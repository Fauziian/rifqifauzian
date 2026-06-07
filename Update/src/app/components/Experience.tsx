import { Briefcase, Image as ImageIcon, FileDown } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceProps {
  onViewPKLPhotos: () => void;
  onViewWorkPhotos: () => void;
}

export function Experience({ onViewPKLPhotos, onViewWorkPhotos }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-16 py-32 relative z-10">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <motion.h2
          className="font-['Syne'] font-bold text-center mb-24 bg-gradient-to-r from-[#00A8FF] to-[#00C875] bg-clip-text text-transparent"
          style={{ fontSize: '3.5rem', letterSpacing: '0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00C875] via-[#00A8FF] to-[#00C875] -translate-x-1/2"></div>

          <div className="space-y-16 relative">
            {/* Experience 1: Left on desktop, Right-shifted on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
              {/* Card container */}
              <motion.div
                className="w-full md:w-[calc(50%-2.5rem)] order-1 md:order-1 ml-8 md:ml-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00C875]/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00C875]/10 border border-[#00C875]/20 flex items-center justify-center text-[#00C875] flex-shrink-0 mt-1">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-['Montserrat'] font-bold text-white mb-1" style={{ fontSize: '1.25rem' }}>
                        Field Work Practice (PKL)
                      </h3>
                      <p className="font-['Inter'] text-[#00C875] font-semibold mb-1" style={{ fontSize: '1rem' }}>
                        PT. Wastama
                      </p>
                      <p className="font-['Inter'] text-white/50" style={{ fontSize: '0.875rem' }}>
                        January 2020 - March 2020
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    <li className="font-['Inter'] text-white/70 flex items-start gap-2.5" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span className="text-[#00C875] mt-1">•</span>
                      <span>Mikrotik configuration and network infrastructure setup</span>
                    </li>
                    <li className="font-['Inter'] text-white/70 flex items-start gap-2.5" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span className="text-[#00C875] mt-1">•</span>
                      <span>Point-to-Point Triangle tower installation</span>
                    </li>
                    <li className="font-['Inter'] text-white/70 flex items-start gap-2.5" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span className="text-[#00C875] mt-1">•</span>
                      <span>QoS bandwidth management implementation</span>
                    </li>
                    <li className="font-['Inter'] text-white/70 flex items-start gap-2.5" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span className="text-[#00C875] mt-1">•</span>
                      <span>Computer Lab infrastructure development</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-['Inter']">
                        2020
                      </span>
                      <button
                        onClick={onViewPKLPhotos}
                        className="flex items-center gap-2 px-4 py-1.5 backdrop-blur-xl bg-[#00C875]/10 border border-[#00C875]/30 rounded-full text-[#00C875] hover:bg-[#00C875]/20 hover:border-[#00C875]/50 transition-all duration-300 text-xs font-['Inter'] cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>View Photos</span>
                      </button>
                    </div>
                    
                    <span className="px-3.5 py-1.5 rounded-full bg-[#00C875]/10 border border-[#00C875]/20 text-[#00C875] text-xs font-medium flex items-center gap-1">
                      Networking ↗
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-10 md:top-1/2 w-6 h-6 rounded-full bg-[#00C875] border-4 border-[#0D1114] shadow-lg shadow-[#00C875]/50 -translate-x-1/2 -translate-y-1/2 z-10"></div>

              {/* Spacer on Desktop */}
              <div className="hidden md:block w-[calc(50%-2.5rem)] order-2"></div>
            </div>

            {/* Experience 2: Right on desktop, Right-shifted on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
              {/* Spacer on Desktop */}
              <div className="hidden md:block w-[calc(50%-2.5rem)] order-1"></div>

              {/* Card container */}
              <motion.div
                className="w-full md:w-[calc(50%-2.5rem)] order-2 ml-8 md:ml-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A8FF]/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/20 flex items-center justify-center text-[#00A8FF] flex-shrink-0 mt-1">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-['Montserrat'] font-bold text-white mb-1" style={{ fontSize: '1.25rem' }}>
                        Production Operator
                      </h3>
                      <p className="font-['Inter'] text-[#00A8FF] font-semibold mb-1" style={{ fontSize: '1rem' }}>
                        PT. Asahi Agung Abadi Mandiri
                      </p>
                      <p className="font-['Inter'] text-white/50" style={{ fontSize: '0.875rem' }}>
                        November 2021 - August 2023
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    <li className="font-['Inter'] text-white/70 flex items-start gap-2.5" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span className="text-[#00A8FF] mt-1">•</span>
                      <span>High-capacity press machine operations</span>
                    </li>
                    <li className="font-['Inter'] text-white/70 flex items-start gap-2.5" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span className="text-[#00A8FF] mt-1">•</span>
                      <span>Compatibility measurements and quality control</span>
                    </li>
                    <li className="font-['Inter'] text-white/70 flex items-start gap-2.5" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span className="text-[#00A8FF] mt-1">•</span>
                      <span>Troubleshooting machine malfunctions</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-['Inter']">
                        2021 - 2023
                      </span>
                      <button
                        onClick={onViewWorkPhotos}
                        className="flex items-center gap-2 px-3.5 py-1.5 backdrop-blur-xl bg-[#00A8FF]/10 border border-[#00A8FF]/30 rounded-full text-[#00A8FF] hover:bg-[#00A8FF]/20 hover:border-[#00A8FF]/50 transition-all duration-300 text-xs font-['Inter'] cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>View Photos</span>
                      </button>
                      <button className="flex items-center gap-2 px-3.5 py-1.5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs font-['Inter'] cursor-pointer">
                        <FileDown className="w-3.5 h-3.5" />
                        <span>Employment Letter</span>
                      </button>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/20 text-[#00A8FF] text-xs font-medium flex items-center gap-1">
                      Production ↗
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-10 md:top-1/2 w-6 h-6 rounded-full bg-[#00A8FF] border-4 border-[#0D1114] shadow-lg shadow-[#00A8FF]/50 -translate-x-1/2 -translate-y-1/2 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
