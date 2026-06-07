import { Briefcase, Image as ImageIcon, FileDown } from 'lucide-react';

interface ExperienceProps {
  onViewPKLPhotos: () => void;
  onViewWorkPhotos: () => void;
}

export function Experience({ onViewPKLPhotos, onViewWorkPhotos }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-5xl w-full">
        <h2 className="font-['Syne'] font-bold text-center mb-16" style={{ fontSize: '3rem', letterSpacing: '0.02em' }}>
          Professional Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00C875] via-[#00A8FF] to-[#00C875]"></div>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="relative pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#00C875] border-4 border-[#0D1114] shadow-lg shadow-[#00C875]/50"></div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00C875]/20">
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="w-6 h-6 text-[#00C875] mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="font-['Montserrat'] font-bold mb-2" style={{ fontSize: '1.5rem' }}>
                      Field Work Practice (PKL)
                    </h3>
                    <p className="font-['Inter'] text-[#00C875] mb-1" style={{ fontSize: '1.125rem' }}>
                      PT. Wastama
                    </p>
                    <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.9375rem' }}>
                      January 2020 - March 2020
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="font-['Inter'] text-white/80 flex items-start gap-3" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    <span className="text-[#00C875] mt-1">•</span>
                    <span>Mikrotik configuration and network infrastructure setup</span>
                  </li>
                  <li className="font-['Inter'] text-white/80 flex items-start gap-3" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    <span className="text-[#00C875] mt-1">•</span>
                    <span>Point-to-Point Triangle tower installation</span>
                  </li>
                  <li className="font-['Inter'] text-white/80 flex items-start gap-3" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    <span className="text-[#00C875] mt-1">•</span>
                    <span>QoS bandwidth management implementation</span>
                  </li>
                  <li className="font-['Inter'] text-white/80 flex items-start gap-3" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    <span className="text-[#00C875] mt-1">•</span>
                    <span>Computer Lab infrastructure development</span>
                  </li>
                </ul>

                <button
                  onClick={onViewPKLPhotos}
                  className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-[#00C875]/10 border border-[#00C875]/30 rounded-full text-[#00C875] hover:bg-[#00C875]/20 hover:border-[#00C875]/50 transition-all duration-300"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span className="font-['Inter']" style={{ fontSize: '0.875rem' }}>View Photos</span>
                </button>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#00A8FF] border-4 border-[#0D1114] shadow-lg shadow-[#00A8FF]/50"></div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A8FF]/20">
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="w-6 h-6 text-[#00A8FF] mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="font-['Montserrat'] font-bold mb-2" style={{ fontSize: '1.5rem' }}>
                      Production Operator
                    </h3>
                    <p className="font-['Inter'] text-[#00A8FF] mb-1" style={{ fontSize: '1.125rem' }}>
                      PT. Asahi Agung Abadi Mandiri
                    </p>
                    <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.9375rem' }}>
                      November 2021 - August 2023
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="font-['Inter'] text-white/80 flex items-start gap-3" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    <span className="text-[#00A8FF] mt-1">•</span>
                    <span>High-capacity press machine operations</span>
                  </li>
                  <li className="font-['Inter'] text-white/80 flex items-start gap-3" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    <span className="text-[#00A8FF] mt-1">•</span>
                    <span>Compatibility measurements and quality control</span>
                  </li>
                  <li className="font-['Inter'] text-white/80 flex items-start gap-3" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                    <span className="text-[#00A8FF] mt-1">•</span>
                    <span>Troubleshooting machine malfunctions</span>
                  </li>
                </ul>

                <div className="flex gap-3">
                  <button
                    onClick={onViewWorkPhotos}
                    className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-[#00A8FF]/10 border border-[#00A8FF]/30 rounded-full text-[#00A8FF] hover:bg-[#00A8FF]/20 hover:border-[#00A8FF]/50 transition-all duration-300"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span className="font-['Inter']" style={{ fontSize: '0.875rem' }}>View Photos</span>
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <FileDown className="w-4 h-4" />
                    <span className="font-['Inter']" style={{ fontSize: '0.875rem' }}>Download Employment Letter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
