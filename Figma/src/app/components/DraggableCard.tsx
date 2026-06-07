import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';
import profilImg from '../../imports/profil.jpg';

export function DraggableCard() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  // Dynamic SVG path for the lanyard/rope.
  // The anchor point is at (175, 10) relative to the container.
  // The attachment point on the card slot is at (175 + cardX, 90 + cardY).
  const pathD = useTransform([cardX, cardY], ([x, y]) => {
    const anchorX = 175;
    const anchorY = 10;
    const targetX = 175 + (x as number);
    const targetY = 90 + (y as number);
    
    // Control point for the Bezier curve lags slightly to simulate weight/rope physics
    const ctrlX = anchorX + (x as number) * 0.3;
    const ctrlY = anchorY + (targetY - anchorY) * 0.5;
    
    return `M ${anchorX} ${anchorY} Q ${ctrlX} ${ctrlY} ${targetX} ${targetY}`;
  });

  return (
    <div className="relative w-[350px] h-[520px] flex flex-col items-center justify-start">
      {/* Dynamic Lanyard SVG */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full z-10" style={{ overflow: 'visible' }}>
        {/* Shadow path */}
        <motion.path
          d={pathD}
          stroke="rgba(0, 0, 0, 0.4)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="blur-[2px]"
          style={{ transform: 'translate(4px, 4px)' }}
        />
        {/* Main lanyard string */}
        <motion.path
          d={pathD}
          stroke="#00C875"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(0,200,117,0.5)]"
        />
      </svg>

      {/* Hanging Pin Anchor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-800 border-2 border-zinc-600 rounded-full shadow-lg z-20 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
      </div>

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
        style={{ x: cardX, y: cardY }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="relative cursor-grab active:cursor-grabbing z-20 mt-[80px]"
        whileHover={{ scale: 1.02, rotate: isDragging ? 0 : 2 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          rotate: isDragging ? 0 : -3,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      >
        {/* Plastic Lanyard Clip / Attachment */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-zinc-700/80 border border-white/20 rounded-md flex items-center justify-center shadow-md">
          <div className="w-4 h-1.5 bg-[#00C875] rounded-full"></div>
        </div>

        {/* Outer ID Holder (Transparent Matte Acrylic) */}
        <div className="backdrop-blur-xl bg-black/75 border border-white/15 rounded-3xl shadow-2xl p-5 w-[280px] h-[380px] flex flex-col justify-between relative overflow-hidden select-none">
          {/* Card Top Slots */}
          <div className="w-full flex justify-between items-center opacity-40 mb-2">
            <div className="w-4 h-1 bg-white rounded-full"></div>
            <div className="w-12 h-1 bg-white rounded-full"></div>
            <div className="w-4 h-1 bg-white rounded-full"></div>
          </div>

          {/* Badge Grid Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg className="w-full h-full">
              <pattern id="badge-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#badge-grid)" />
            </svg>
          </div>

          {/* Badge Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-3 relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C875] animate-pulse drop-shadow-[0_0_4px_#00C875]"></span>
              <span className="font-['Montserrat'] font-bold text-xs tracking-widest text-[#00C875]">ACTIVE</span>
            </div>
            <span className="font-['Syne'] font-bold text-[10px] tracking-widest text-white/50">MEMBER_07</span>
          </div>

          {/* Photo Section */}
          <div className="my-4 flex justify-center relative z-10">
            <div className="relative group">
              {/* Outer frame */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#00C875] to-[#00A8FF] rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              {/* Image holder */}
              <div className="relative w-36 h-36 bg-zinc-900 border-2 border-white/20 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                <img
                  src={profilImg}
                  alt="Rifqi Fauzi Anwar"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="text-center relative z-10 mt-1 flex-grow flex flex-col justify-center">
            <h3 className="font-['Syne'] font-extrabold text-white text-xl tracking-wide leading-tight">
              RIFQI FAUZI
            </h3>
            <p className="font-['Montserrat'] font-semibold text-white/40 text-[9px] tracking-widest uppercase mt-0.5">
              ANWAR
            </p>
            <p className="font-['Inter'] text-[#00C875] font-medium text-xs tracking-wider mt-2 bg-[#00C875]/10 py-1 px-3 rounded-full inline-block mx-auto border border-[#00C875]/25">
              Fullstack Engineer
            </p>
          </div>

          {/* Barcode/Footer Section */}
          <div className="border-t border-white/10 pt-3 mt-2 flex justify-between items-center relative z-10">
            {/* Fake Barcode */}
            <div className="flex flex-col gap-0.5 opacity-60">
              <div className="flex gap-[1.5px] h-6 items-end">
                <div className="w-[1.5px] h-full bg-white"></div>
                <div className="w-[3px] h-full bg-white"></div>
                <div className="w-[1.5px] h-[70%] bg-white"></div>
                <div className="w-[1px] h-full bg-white"></div>
                <div className="w-[4px] h-[80%] bg-white"></div>
                <div className="w-[1.5px] h-full bg-white"></div>
                <div className="w-[2px] h-full bg-white"></div>
                <div className="w-[1.5px] h-[60%] bg-white"></div>
                <div className="w-[3px] h-full bg-white"></div>
                <div className="w-[1px] h-full bg-white"></div>
                <div className="w-[2px] h-full bg-white"></div>
              </div>
              <span className="font-mono text-[7px] text-white/50 tracking-[2px]">FAUZIIAN_</span>
            </div>
            {/* Logo */}
            <div className="font-['Syne'] font-extrabold text-white text-sm tracking-tighter opacity-80">
              PORT<span className="text-[#00C875]">FOLIO</span>
            </div>
          </div>

          {/* Sweep Shine Reflection Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full pointer-events-none"
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
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-['Inter'] text-white/40 text-xs tracking-wider"
        animate={{
          opacity: isDragging ? 0 : [0.4, 0.8, 0.4],
          y: isDragging ? 5 : [0, -4, 0],
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
