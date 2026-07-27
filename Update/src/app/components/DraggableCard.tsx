import { useEffect, useRef, useState, useCallback } from 'react';
import profilImg from '../../imports/profil.jpg';

// ── Physics ──────────────────────────────────────────────────────────────────
const GRAVITY   = 0.38;   // px/frame²
const DAMPING   = 0.012;  // air resistance per frame
const ROPE_K    = 0.032;  // spring stiffness (lower = looser rope)
const MAX_VEL   = 38;

// ── Layout (all in container-local pixels) ────────────────────────────────────
// Container: 350 × 560px  (relative, overflow visible)
// Rope anchor:  centre-top, 200px above container
const ANCHOR_X  = 175;    // px from container left
const ANCHOR_Y  = -200;   // px from container top  (negative = above)
// Card natural top inside container (including mt space)
const CARD_NATURAL_TOP = 90;   // px
// Clip attachment = 16px above card top
const CLIP_OFFSET_Y    = -16;  // px relative to card top
// At rest the clip sits at:
const REST_ATTACH_Y = CARD_NATURAL_TOP + CLIP_OFFSET_Y; // 74px

// Natural rope length = distance from anchor to rest attachment
// => sqrt(0² + (74 - (-200))²) = 274
const ROPE_LEN = Math.hypot(0, REST_ATTACH_Y - ANCHOR_Y); // ≈ 274

export function DraggableCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef      = useRef<HTMLDivElement>(null);
  const pathRefs     = useRef<(SVGPathElement | null)[]>([null, null, null]);

  const [isDragging, setIsDragging] = useState(false);

  // Physics: dx, dy = card displacement FROM natural rest position (container px)
  const phys = useRef({
    dx: 0,
    dy: -380,   // start above
    vx: 12,
    vy: 0,
    dragging: false,
    grabOffsetX: 0,
    grabOffsetY: 0,
    lastPx: 0, lastPy: 0,
    velX: 0,   velY: 0,
  });

  const rafRef = useRef(0);

  // ── Draw rope directly on SVG path elements ───────────────────────────────
  const drawRope = useCallback((dx: number, dy: number) => {
    // Clip attachment in container-local coords
    const attachX = ANCHOR_X + dx;                       // horizontally offset
    const attachY = REST_ATTACH_Y + dy;                  // vertically offset

    // Quadratic bezier control point: sag/bow naturally
    const ctrlX = ANCHOR_X + dx * 0.5;
    const ctrlY = ANCHOR_Y + (attachY - ANCHOR_Y) * 0.5;

    const d = `M ${ANCHOR_X} ${ANCHOR_Y} Q ${ctrlX} ${ctrlY} ${attachX} ${attachY}`;
    pathRefs.current.forEach(p => p?.setAttribute('d', d));
  }, []);

  // ── Apply card CSS transform ──────────────────────────────────────────────
  const applyCard = useCallback((dx: number, dy: number) => {
    if (!cardRef.current) return;
    // Rotation = pendulum angle from vertical
    const attachY = REST_ATTACH_Y + dy;
    const rot = Math.atan2(dx, attachY - ANCHOR_Y) * (180 / Math.PI) * 0.8;
    cardRef.current.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
  }, []);

  // ── Physics tick ─────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const p = phys.current;

    if (!p.dragging) {
      // Vector from anchor to current clip position
      const clipX = ANCHOR_X + p.dx;
      const clipY = REST_ATTACH_Y + p.dy;
      const vecX  = clipX - ANCHOR_X;
      const vecY  = clipY - ANCHOR_Y;
      const dist  = Math.hypot(vecX, vecY) || 0.001;

      // Rope tension – only pull when stretched, very light push when slack
      const stretch = dist - ROPE_LEN;
      const kEff    = stretch > 0 ? ROPE_K : ROPE_K * 0.05;
      const tension = -kEff * stretch;

      const fx = tension * (vecX / dist);
      const fy = tension * (vecY / dist) + GRAVITY;

      p.vx = (p.vx + fx) * (1 - DAMPING);
      p.vy = (p.vy + fy) * (1 - DAMPING);

      p.vx = Math.max(-MAX_VEL, Math.min(MAX_VEL, p.vx));
      p.vy = Math.max(-MAX_VEL, Math.min(MAX_VEL, p.vy));

      p.dx += p.vx;
      p.dy += p.vy;
    }

    applyCard(p.dx, p.dy);
    drawRope(p.dx, p.dy);

    rafRef.current = requestAnimationFrame(tick);
  }, [applyCard, drawRope]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  // ── Pointer drag ─────────────────────────────────────────────────────────
  const getXY = (e: MouseEvent | TouchEvent) =>
    'touches' in e
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY };

  const onPointerDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const p = phys.current;

    // Convert screen pointer to container-local coords
    const rect = containerRef.current!.getBoundingClientRect();
    const raw  = 'touches' in e.nativeEvent
      ? { x: (e.nativeEvent as TouchEvent).touches[0].clientX, y: (e.nativeEvent as TouchEvent).touches[0].clientY }
      : { x: (e.nativeEvent as MouseEvent).clientX, y: (e.nativeEvent as MouseEvent).clientY };

    // Local pointer position relative to container
    const localX = raw.x - rect.left;
    const localY = raw.y - rect.top;

    // Offset from card's current displaced position
    // Card top-centre is at (ANCHOR_X + dx, CARD_NATURAL_TOP + dy) in container coords
    p.grabOffsetX = localX - (ANCHOR_X + p.dx);
    p.grabOffsetY = localY - (CARD_NATURAL_TOP + p.dy);

    p.lastPx  = raw.x;
    p.lastPy  = raw.y;
    p.velX    = 0;
    p.velY    = 0;
    p.dragging = true;
    setIsDragging(true);

    const onMove = (ev: MouseEvent | TouchEvent) => {
      const cur  = getXY(ev);
      const rect2 = containerRef.current!.getBoundingClientRect();

      // Velocity for release momentum (screen delta per frame)
      p.velX = cur.x - p.lastPx;
      p.velY = cur.y - p.lastPy;
      p.lastPx = cur.x;
      p.lastPy = cur.y;

      // Target: pointer in container coords, minus grab offset = card centre
      const localCX = (cur.x - rect2.left) - p.grabOffsetX;
      const localCY = (cur.y - rect2.top)  - p.grabOffsetY;

      // Convert to physics offsets from rest position
      p.dx = localCX - ANCHOR_X;
      p.dy = localCY - CARD_NATURAL_TOP;
    };

    const onUp = () => {
      // Transfer pointer velocity to physics (convert screen px/event → container delta)
      p.vx = p.velX;
      p.vy = p.velY;
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
    <div
      ref={containerRef}
      className="relative w-[350px] h-[560px] select-none"
      style={{ overflow: 'visible' }}
    >
      {/* Rope SVG */}
      <svg
        className="absolute inset-0 pointer-events-none z-10"
        width="350" height="560"
        style={{ overflow: 'visible' }}
      >
        {/* Shadow */}
        <path
          ref={el => { pathRefs.current[0] = el; }}
          stroke="rgba(0,0,0,0.4)" strokeWidth="18" fill="none"
          strokeLinecap="square"
          style={{ filter: 'blur(5px)', transform: 'translate(6px,8px)' }}
        />
        {/* Ribbon body */}
        <path
          ref={el => { pathRefs.current[1] = el; }}
          id="lanyard-ribbon-path"
          stroke="#121316" strokeWidth="15" fill="none"
          strokeLinecap="square"
        />
        {/* Highlight border */}
        <path
          ref={el => { pathRefs.current[2] = el; }}
          stroke="rgba(255,255,255,0.06)" strokeWidth="17" fill="none"
          strokeLinecap="square"
        />
        {/* Text on ribbon */}
        <text fill="rgba(255,255,255,0.65)" fontSize="7" dy="2.5"
          fontFamily="monospace" letterSpacing="5">
          <textPath href="#lanyard-ribbon-path" startOffset="50%" textAnchor="middle">
            3D CARD • 3D CARD • 3D CARD
          </textPath>
        </text>
      </svg>

      {/* Card (transform set via DOM ref) */}
      <div
        ref={cardRef}
        onMouseDown={onPointerDown}
        onTouchStart={onPointerDown}
        className={`absolute will-change-transform z-20 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          top: `${CARD_NATURAL_TOP}px`,
          left: `${ANCHOR_X - 140}px`,   // 280px card, centred: 175 - 140 = 35
          touchAction: 'none',
          transformOrigin: `140px ${CLIP_OFFSET_Y * -1}px`, // rotate around clip point
        }}
      >
        {/* Plastic clip */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-5 bg-zinc-800 border border-white/10 rounded flex flex-col items-center justify-center shadow-md">
          <div className="w-5 h-1 bg-zinc-600 rounded-full mb-0.5" />
          <div className="w-3 h-1.5 bg-[#00C875] rounded-full" />
        </div>

        {/* PVC ID card */}
        <div
          className="bg-white border-4 border-zinc-100/90 rounded-3xl p-4 w-[280px] h-[390px] flex flex-col justify-between relative overflow-hidden"
          style={{
            boxShadow: isDragging
              ? '0 35px 90px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)'
              : '0 20px 60px rgba(0,0,0,0.45)',
            transition: 'box-shadow 0.25s ease',
          }}
        >
          {/* Card notches */}
          <div className="w-full flex justify-between items-center opacity-25 mb-2 px-6">
            <div className="w-3 h-1 bg-zinc-900 rounded-full" />
            <div className="w-10 h-1 bg-zinc-900 rounded-full" />
            <div className="w-3 h-1 bg-zinc-900 rounded-full" />
          </div>

          {/* Photo */}
          <div className="w-full h-[76%] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-inner">
            <img
              src={profilImg}
              alt="Rifqi Fauzi Anwar"
              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-700 ease-in-out"
              draggable="false"
            />
          </div>

          {/* Info */}
          <div className="text-center pb-2 flex flex-col justify-center flex-grow">
            <h3 className="font-['Syne'] font-extrabold text-zinc-900 text-xl tracking-tight leading-none uppercase mt-3">
              RIFQI FAUZI
            </h3>
            <p className="font-['Montserrat'] font-semibold text-[#00C875] text-[10px] tracking-widest uppercase mt-1">
              Fullstack Developer
            </p>
          </div>

          {/* Shine sweep */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none"
            style={{
              transform: isDragging ? 'translateX(120%)' : 'translateX(-120%)',
              transition: isDragging ? 'transform 0.55s ease' : 'none',
            }}
          />
        </div>
      </div>

      {/* Hint */}
      <p
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-['Inter'] text-white/30 text-xs tracking-wider whitespace-nowrap pointer-events-none"
        style={{ opacity: isDragging ? 0 : 0.45, transition: 'opacity 0.3s ease' }}
      >
        ← CLICK &amp; DRAG BADGE →
      </p>
    </div>
  );
}
