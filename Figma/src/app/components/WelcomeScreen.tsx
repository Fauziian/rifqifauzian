import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function WelcomeScreen() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Profile Image - Tilted */}
      <motion.div
        className="absolute top-24 right-32"
        initial={{ opacity: 0, rotate: 0, y: -50 }}
        animate={{ opacity: 1, rotate: -8, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-32 h-40 bg-white rounded-lg shadow-2xl p-2">
          <div className="w-full h-full bg-gradient-to-br from-[#00C875]/30 to-[#00A8FF]/30 rounded flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00C875] to-[#00A8FF] opacity-60"></div>
          </div>
        </div>
      </motion.div>

      {/* Welcome Text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-['Syne'] font-bold text-white mb-4"
          style={{ fontSize: '3.5rem', letterSpacing: '0.05em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Welcome to my
        </motion.h1>
        <motion.h2
          className="font-['Syne'] font-bold text-white"
          style={{ fontSize: '3.5rem', letterSpacing: '0.05em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Portfolio Website
        </motion.h2>
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#00C875] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
