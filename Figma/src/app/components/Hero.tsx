import { FileText, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Typography */}
        <div className="space-y-6">
          <h1 className="font-['Syne'] font-bold tracking-tight" style={{ fontSize: '4rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            RIFQI FAUZI ANWAR
          </h1>
          <h2 className="font-['Montserrat'] font-semibold text-[#00C875]" style={{ fontSize: '1.5rem', lineHeight: '1.4', letterSpacing: '0.02em' }}>
            Network Engineer | Software Engineer | Game Developer | Designer
          </h2>
          <p className="font-['Inter'] text-white/80 leading-relaxed" style={{ fontSize: '1.125rem', letterSpacing: '0.01em' }}>
            Aspiring software/network engineer w/ strong foundation in full-stack web dev, 2D Java game programming, & Mikrotik configuration. Passionate about efficient, user-oriented digital solutions via clean design & practical network integration.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-[#00C875] text-[#0D1114] rounded-full font-['Inter'] font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#00C875]/40 hover:scale-105"
              style={{ fontSize: '1rem' }}
            >
              View My Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1hKpaADxq1aXtyPR8SCDqiWTc4B7EosRf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 text-white rounded-full font-['Inter'] font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              style={{ fontSize: '1rem' }}
            >
              <FileText className="w-5 h-5" />
              View CV
            </a>
          </div>
        </div>

        {/* Right Column - 3D ID Badge */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="relative w-[350px] h-[450px]">
            {/* Main Badge */}
            <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="p-8 h-full flex flex-col items-center justify-center gap-6">
                {/* Avatar Silhouette */}
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#00C875]/20 to-[#00A8FF]/20 border-2 border-[#00C875]/50 shadow-lg shadow-[#00C875]/30 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00C875] to-[#00A8FF] opacity-50"></div>
                </div>

                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00C875" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Name */}
                <div className="relative z-10 text-center">
                  <p className="font-['Syne'] font-bold text-white" style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}>
                    RIFQI FAUZI
                  </p>
                  <p className="font-['Inter'] text-[#00C875]" style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                    ENGINEER
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Leaves */}
            <div className="absolute -top-8 -right-8 w-24 h-24 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 10 Q70 30 50 50 Q30 30 50 10" fill="#00C875" opacity="0.3"/>
                <path d="M50 50 Q70 70 50 90 Q30 70 50 50" fill="#00A8FF" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
