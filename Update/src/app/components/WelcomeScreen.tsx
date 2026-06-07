import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Code2, User, Globe } from 'lucide-react';

export function WelcomeScreen() {
  const [stage, setStage] = useState(0); // 0: initial, 1: "Welcome", 2: "Welcome to my Portfolio Website"

  useEffect(() => {
    // Stage 1: Show "Welcome"
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 400);

    // Stage 2: Morph to "Welcome to my Portfolio Website" + show domain capsule
    const timer2 = setTimeout(() => {
      setStage(2);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[#000000] flex flex-col items-center justify-center z-50 select-none overflow-hidden p-6"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center justify-center gap-10 max-w-2xl w-full">
        {/* 3 Circular Icons Row */}
        <div className="flex gap-4">
          {[
            { icon: <Code2 className="w-5 h-5 text-white/90" />, delay: 0.1 },
            { icon: <User className="w-5 h-5 text-white/90" />, delay: 0.25 },
            { icon: <Globe className="w-5 h-5 text-white/90" />, delay: 0.4 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="w-12 h-12 rounded-full border border-white/10 bg-zinc-900/40 backdrop-blur-md flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: item.delay, 
                type: 'spring', 
                stiffness: 150, 
                damping: 15 
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* Main Text Content */}
        <div className="h-[220px] flex flex-col items-center justify-center text-center w-full">
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.h1
                key="welcome-text"
                className="font-['Montserrat'] font-extrabold text-white text-5xl tracking-tight md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                Welcome
              </motion.h1>
            )}

            {stage === 2 && (
              <motion.div
                key="portfolio-text"
                className="flex flex-col items-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="font-['Montserrat'] font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                >
                  Welcome to my
                </motion.h1>
                <motion.h1
                  className="font-['Montserrat'] font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mt-1.5"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  Portfolio Website
                </motion.h1>

                {/* Capsule Domain Badge */}
                <motion.div
                  className="bg-zinc-950 border border-white/10 px-5 py-2 rounded-full mt-8 flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35, type: 'spring' }}
                >
                  <span className="font-['Inter'] text-xs text-white/50 tracking-wider font-semibold">
                    rifqifauzian.web.id
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
