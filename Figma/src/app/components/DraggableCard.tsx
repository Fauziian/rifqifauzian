import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import profilImg from '../../imports/profil.jpg';

export function DraggableCard() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  // Constants for lanyard length and anchor
  const anchorY = -220;
  const L = 220;         // Rest length of lanyard ribbon
  const k = 0.055;       // Spring stiffness
  const g = 0.42;        // Gravity
  const c = 0.022;       // Damping (air resistance/friction)

  // Physics simulation state ref (avoids component re-renders)
  const physicsRef = useRef({
    x: 0,
    y: -350,   // Start falling from far above
    vx: 12,    // Initial sideways force to make it swing on first drop
    vy: 0,
    isSimulating: true
  });

  // Dynamic SVG path for the lanyard ribbon
  const pathD = useTransform([cardX, cardY], ([x, y]) => {
    const anchorX = 175;
    const targetX = 175 + (x as number);
    const targetY = 75 + (y as number);
    
    // Smooth bezier sway
    const ctrlX = anchorX + (x as number) * 0.45;
    const ctrlY = anchorY + (targetY - anchorY) * 0.55;
    
    return `M ${anchorX} ${anchorY} Q ${ctrlX} ${ctrlY} ${targetX} ${targetY}`;
  });

  // Calculate card rotation angle based on pendulum position
  const rotation = useTransform([cardX, cardY], ([x, y]) => {
    const dx = x as number;
    const dy = (y as number) - anchorY;
    const angle = Math.atan2(dx, dy) * (180 / Math.PI);
    return angle * 0.85;
  });

  // Physics simulation loop (only runs when not dragging)
  useEffect(() => {
    if (isDragging) {
      physicsRef.current.isSimulating = false;
      return;
    }

    physicsRef.current.isSimulating = true;
    let rAFId: number;

    const updatePhysics = () => {
      if (!physicsRef.current.isSimulating) return;

      const p = physicsRef.current;
      const dx = p.x;
      const dy = p.y - anchorY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

      // Tension force (spring pull)
      const springDiff = dist - L;
      const currentK = springDiff > 0 ? k : k * 0.2; // Stronger pull when stretched
      const forceMagnitude = -currentK * springDiff;

      const forceX = forceMagnitude * (dx / dist);
      const forceY = forceMagnitude * (dy / dist);

      // Gravity pulling downward
      const gravityY = g;

      // Air resistance (damping)
      const dampingX = -c * p.vx;
      const dampingY = -c * p.vy;

      // Accelerations
      const ax = forceX + dampingX;
      const ay = forceY + gravityY + dampingY;

      // Update velocities
      p.vx += ax;
      p.vy += ay;

      // Update positions
      p.x += p.vx;
      p.y += p.vy;

      // Update motion values
      cardX.set(p.x);
      cardY.set(p.y);

      rAFId = requestAnimationFrame(updatePhysics);
    };

    rAFId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(rAFId);
  }, [isDragging, cardX, cardY]);

  // Sync physics positions with drag motion values in real-time
  useEffect(() => {
    const unsubscribeX = cardX.on('change', (val) => {
      if (isDragging) physicsRef.current.x = val;
    });
    const unsubscribeY = cardY.on('change', (val) => {
      if (isDragging) physicsRef.current.y = val;
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [isDragging, cardX, cardY]);

  return (
    <div className="relative w-[350px] h-[520px] flex flex-col items-center justify-start">
      {/* Dynamic Ribbon Lanyard SVG */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full z-10" style={{ overflow: 'visible' }}>
        {/* Lanyard Shadow */}
        <motion.path
          d={pathD}
          stroke="rgba(0, 0, 0, 0.4)"
          strokeWidth="18"
          fill="none"
          strokeLinecap="square"
          className="blur-[5px]"
          style={{ transform: 'translate(6px, 8px)' }}
        />
        
        {/* Thick Black Ribbon Background */}
        <motion.path
          id="lanyard-ribbon-path"
          d={pathD}
          stroke="#121316"
          strokeWidth="15"
          fill="none"
          strokeLinecap="square"
        />

        {/* Ribbon Borders for realistic feel */}
        <motion.path
          d={pathD}
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="16"
          fill="none"
          strokeLinecap="square"
        />

        {/* Ribbon Text along Path */}
        <text fill="rgba(255, 255, 255, 0.7)" className="font-mono font-extrabold text-[7px] tracking-[6px]" dy="2.5">
          <textPath href="#lanyard-ribbon-path" startOffset="50%" textAnchor="middle">
            3D CARD • 3D CARD • 3D CARD
          </textPath>
        </text>
      </svg>

      {/* Draggable ID Badge */}
      <motion.div
        drag
        dragConstraints={{
          top: -40,
          left: -120,
          right: 120,
          bottom: 120,
        }}
        dragElastic={0.15}
        style={{ 
          x: cardX, 
          y: cardY, 
          rotate: rotation,
          transformOrigin: '50% 12%' // Anchors rotation/swing to top of card where clip is
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(event, info) => {
          setIsDragging(false);
          // Seed physics simulation with release velocity (convert px/s to px/frame)
          physicsRef.current.vx = Math.max(-35, Math.min(35, info.velocity.x / 60));
          physicsRef.current.vy = Math.max(-35, Math.min(35, info.velocity.y / 60));
        }}
        className="relative cursor-grab active:cursor-grabbing z-20 mt-[80px]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      >
        {/* Plastic Lanyard Clip / Bracket */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-5 bg-zinc-800 border border-white/10 rounded flex flex-col items-center justify-center shadow-md">
          <div className="w-5 h-1 bg-zinc-600 rounded-full mb-0.5"></div>
          <div className="w-3 h-1.5 bg-[#00C875] rounded-full"></div>
        </div>

        {/* Outer ID Holder (Physical White Polaroid / PVC Card) */}
        <div className="bg-[#FFFFFF] border-4 border-zinc-100/90 rounded-3xl shadow-2xl p-4 w-[280px] h-[390px] flex flex-col justify-between relative overflow-hidden select-none">
          
          {/* Card Top Slots */}
          <div className="w-full flex justify-between items-center opacity-30 mb-2 px-6">
            <div className="w-3 h-1 bg-zinc-900 rounded-full"></div>
            <div className="w-10 h-1 bg-zinc-900 rounded-full"></div>
            <div className="w-3 h-1 bg-zinc-900 rounded-full"></div>
          </div>

          {/* Photo Container */}
          <div className="w-full h-[76%] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-inner">
            <img
              src={profilImg}
              alt="Rifqi Fauzi Anwar"
              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.95] hover:grayscale-0 transition-all duration-500 ease-in-out"
              draggable="false"
            />
          </div>

          {/* Text Info */}
          <div className="text-center pb-2 flex flex-col justify-center flex-grow">
            <h3 className="font-['Syne'] font-extrabold text-zinc-900 text-xl tracking-tight leading-none uppercase mt-3.5">
              RIFQI FAUZI
            </h3>
            <p className="font-['Montserrat'] font-semibold text-[#00C875] text-[10px] tracking-wider uppercase mt-1">
              Frontend Developer
            </p>
          </div>

          {/* Sweep Shine Reflection Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full pointer-events-none"
            animate={{
              translateX: isDragging ? ['-100%', '100%'] : '-100%',
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Interactive Helper Text */}
      <motion.p
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-['Inter'] text-white/30 text-xs tracking-wider"
        animate={{
          opacity: isDragging ? 0 : [0.3, 0.7, 0.3],
          y: isDragging ? 5 : [0, -3, 0],
        }}
        transition={{
          opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        ← CLICK & DRAG BADGE →
      </motion.p>
    </div>
  );
}
