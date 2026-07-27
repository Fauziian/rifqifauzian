import { useEffect, useRef, useState, useCallback } from 'react';
import profilImg from '../../imports/profil.jpg';

// ─── Physics constants ───────────────────────────────────────────────────────
const GRAVITY      = 0.45;   // px / frame²  (downward pull)
const DAMPING      = 0.018;  // air resistance (fraction of velocity removed per frame)
const ROPE_LEN     = 220;    // natural rope length  (px)
const ROPE_K       = 0.06;   // rope tension stiffness
const MAX_VEL      = 40;     // velocity cap (px/frame)

// ─── SVG layout helpers ──────────────────────────────────────────────────────
const SVG_W        = 350;
const ANCHOR_X     = SVG_W / 2;   // 175
const ANCHOR_SVG_Y = -220;        // above the container top edge

export function DraggableCard() {
  const cardRef      = useRef<HTMLDivElement>(null);
  const svgRef       = useRef<SVGSVGElement>(null);
  const pathRef      = useRef<SVGPathElement>(null);
  const pathShadRef  = useRef<SVGPathElement>(null);
  const pathBorderRef= useRef<SVGPathElement>(null);

  // Current rendered transform
  const renderRef = useRef({ x: 0, y: 0, rot: 0 });

  // Physics state (mutable, no re-render on change)
  const phys = useRef({
    x: 0,     // offset from centre column
    y: 0,     // offset from natural rest position
    vx: 14,   // kick sideways on first drop
    vy: 0,
    dragging: false,
    // pointer tracking
    ptrX: 0, ptrY: 0,
    lastPtrX: 0, lastPtrY: 0,
    ptrVX: 0, ptrVY: 0,
  });

  const rafRef    = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  // ── Natural rest Y (where card hangs at rope length below anchor) ──────────
  // In our coordinate system: card offset y=0 means the card centre is at
  // anchorY + ROPE_LEN = -220 + 220 = 0  → the card top of the SVG box.
  // Card is rendered at mt-[80px] + y offset.

  // ── Update SVG rope path (called every rAF frame, no React re-render) ──────
  const updateRope = useCallback((cx: number, cy: number) => {
    // Card attachment point on SVG canvas
    const attachX  = ANCHOR_X + cx;
    const attachY  = 75 + cy;          // 75 = card top within SVG box

    const ctrlX = ANCHOR_X + cx * 0.5;
    const ctrlY = ANCHOR_SVG_Y + (attachY - ANCHOR_SVG_Y) * 0.55;

    const d = `M ${ANCHOR_X} ${ANCHOR_SVG_Y} Q ${ctrlX} ${ctrlY} ${attachX} ${attachY}`;

    if (pathRef.current)       pathRef.current.setAttribute('d', d);
    if (pathShadRef.current)   pathShadRef.current.setAttribute('d', d);
    if (pathBorderRef.current) pathBorderRef.current.setAttribute('d', d);
  }, []);

  // ── Apply transform to card DOM node directly (skip React) ──────────────────
  const applyTransform = useCallback((x: number, y: number, rot: number) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      `translate(${x}px, ${y}px) rotate(${rot}deg)`;
    renderRef.current = { x, y, rot };
  }, []);

  // ── Main physics loop ────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const p = phys.current;

    if (!p.dragging) {
      // Distance from anchor (0, ANCHOR_SVG_Y relative to card home)
      const dx   = p.x;
      const dy   = p.y - ANCHOR_SVG_Y;          // vector from anchor → card
      const dist = Math.hypot(dx, dy) || 0.001;

      // Rope tension (pulls toward anchor, only when stretched beyond ROPE_LEN)
      const stretch = dist - ROPE_LEN;
      const kEff    = stretch > 0 ? ROPE_K : ROPE_K * 0.15; // slack rope barely pushes back
      const fMag    = -kEff * stretch;

      const forceX  = fMag * (dx / dist);
      const forceY  = fMag * (dy / dist);

      // Euler integration
      p.vx += forceX - DAMPING * p.vx;
      p.vy += forceY + GRAVITY - DAMPING * p.vy;

      // Clamp velocity
      p.vx = Math.max(-MAX_VEL, Math.min(MAX_VEL, p.vx));
      p.vy = Math.max(-MAX_VEL, Math.min(MAX_VEL, p.vy));

      p.x += p.vx;
      p.y += p.vy;
    }

    // Rotation — card tilts like a pendulum based on horizontal offset
    const relDY  = p.y - ANCHOR_SVG_Y;
    const rot    = Math.atan2(p.x, relDY) * (180 / Math.PI) * 0.82;

    applyTransform(p.x, p.y, rot);
    updateRope(p.x, p.y);

    rafRef.current = requestAnimationFrame(tick);
  }, [applyTransform, updateRope]);

  // ── Start / restart loop ─────────────────────────────────────────────────────
  useEffect(() => {
    // Seed with initial drop position
    phys.current.y = -350;
    phys.current.vx = 14;
    phys.current.vy = 0;

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  // ── Pointer handlers (pure mouse/touch, no Framer drag) ─────────────────────
  const getEventPos = (e: MouseEvent | TouchEvent) => {
    if ('touches' in e) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const onPointerDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const p = phys.current;
    const pos = 'touches' in e.nativeEvent
      ? { x: (e.nativeEvent as TouchEvent).touches[0].clientX, y: (e.nativeEvent as TouchEvent).touches[0].clientY }
      : { x: (e.nativeEvent as MouseEvent).clientX, y: (e.nativeEvent as MouseEvent).clientY };

    p.dragging  = true;
    p.ptrX      = pos.x - p.x;
    p.ptrY      = pos.y - p.y;
    p.lastPtrX  = pos.x;
    p.lastPtrY  = pos.y;
    p.ptrVX     = 0;
    p.ptrVY     = 0;
    setIsDragging(true);

    const onMove = (ev: MouseEvent | TouchEvent) => {
      const cur = getEventPos(ev);
      p.ptrVX    = cur.x - p.lastPtrX;
      p.ptrVY    = cur.y - p.lastPtrY;
      p.lastPtrX = cur.x;
      p.lastPtrY = cur.y;
      p.x        = cur.x - p.ptrX;
      p.y        = cur.y - p.ptrY;
    };

    const onUp = () => {
      // Release: inherit pointer velocity as initial physics velocity
      p.vx       = p.ptrVX;
      p.vy       = p.ptrVY;
      p.dragging = false;
      setIsDragging(false);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup',   onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend',  onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend',  onUp);
  }, []);

  return (
    <div className="relative w-[350px] h-[520px] flex flex-col items-center justify-start select-none">

      {/* Dynamic Rope SVG — updated directly via DOM refs */}
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none w-full h-full z-10"
        style={{ overflow: 'visible' }}
      >
        {/* Drop shadow */}
        <path
          ref={pathShadRef}
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="18"
          fill="none"
          strokeLinecap="square"
          className="blur-[5px]"
          style={{ transform: 'translate(6px,8px)' }}
        />

        {/* Thick dark ribbon */}
        <path
          ref={pathRef}
          id="lanyard-ribbon-path"
          stroke="#121316"
          strokeWidth="15"
          fill="none"
          strokeLinecap="square"
        />

        {/* Subtle border highlight */}
        <path
          ref={pathBorderRef}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="16"
          fill="none"
          strokeLinecap="square"
        />

        {/* Ribbon text */}
        <text
          fill="rgba(255,255,255,0.7)"
          className="font-mono font-extrabold text-[7px] tracking-[6px]"
          dy="2.5"
        >
          <textPath href="#lanyard-ribbon-path" startOffset="50%" textAnchor="middle">
            3D CARD • 3D CARD • 3D CARD
          </textPath>
        </text>
      </svg>

      {/* ── ID Badge card (transform applied via DOM ref) ── */}
      <div
        ref={cardRef}
        onMouseDown={onPointerDown}
        onTouchStart={onPointerDown}
        className={`relative z-20 mt-[80px] will-change-transform ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ touchAction: 'none' }}
      >
        {/* Plastic lanyard clip */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-5 bg-zinc-800 border border-white/10 rounded flex flex-col items-center justify-center shadow-md">
          <div className="w-5 h-1 bg-zinc-600 rounded-full mb-0.5" />
          <div className="w-3 h-1.5 bg-[#00C875] rounded-full" />
        </div>

        {/* White PVC card */}
        <div
          className="bg-[#FFFFFF] border-4 border-zinc-100/90 rounded-3xl shadow-2xl p-4 w-[280px] h-[390px] flex flex-col justify-between relative overflow-hidden"
          style={{
            boxShadow: isDragging
              ? '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)'
              : '0 20px 60px rgba(0,0,0,0.4)',
            transition: 'box-shadow 0.2s ease',
          }}
        >
          {/* Card top slots */}
          <div className="w-full flex justify-between items-center opacity-30 mb-2 px-6">
            <div className="w-3 h-1 bg-zinc-900 rounded-full" />
            <div className="w-10 h-1 bg-zinc-900 rounded-full" />
            <div className="w-3 h-1 bg-zinc-900 rounded-full" />
          </div>

          {/* Photo */}
          <div className="w-full h-[76%] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-inner">
            <img
              src={profilImg}
              alt="Rifqi Fauzi Anwar"
              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.95] hover:grayscale-0 transition-all duration-500 ease-in-out"
              draggable="false"
            />
          </div>

          {/* Name */}
          <div className="text-center pb-2 flex flex-col justify-center flex-grow">
            <h3 className="font-['Syne'] font-extrabold text-zinc-900 text-xl tracking-tight leading-none uppercase mt-3.5">
              RIFQI FAUZI
            </h3>
            <p className="font-['Montserrat'] font-semibold text-[#00C875] text-[10px] tracking-wider uppercase mt-1">
              Fullstack Developer
            </p>
          </div>

          {/* Sweep shine on drag */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"
            style={{
              transform: isDragging ? 'translateX(100%)' : 'translateX(-100%)',
              transition: isDragging ? 'transform 0.6s ease' : 'none',
            }}
          />
        </div>
      </div>

      {/* Hint text */}
      <p
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-['Inter'] text-white/30 text-xs tracking-wider whitespace-nowrap"
        style={{
          opacity: isDragging ? 0 : 0.5,
          transition: 'opacity 0.3s ease',
        }}
      >
        ← CLICK &amp; DRAG BADGE →
      </p>
    </div>
  );
}
