import { Mail, Linkedin, Github, Instagram, Music, Youtube } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-5xl w-full">
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-12">
          <h2 className="font-['Syne'] font-bold text-center mb-4" style={{ fontSize: '2.5rem', letterSpacing: '0.02em' }}>
            Let's Connect
          </h2>
          <p className="font-['Inter'] text-white/80 text-center mb-12" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
            Interested in Project Team collaboration? Let's connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="font-['Montserrat'] font-semibold text-[#00C875] mb-6" style={{ fontSize: '1.25rem' }}>
                Professional
              </h3>

              <a
                href="mailto:rifqifauzii.an@gmail.com"
                className="group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#00C875]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00C875]/20 group-hover:bg-[#00C875]/30 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#00C875]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>Email</p>
                  <p className="font-['Inter'] text-white" style={{ fontSize: '1rem' }}>rifqifauzii.an@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rifqi-fauzi-anwar-ab486b290/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#00C875]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00C875]/20 group-hover:bg-[#00C875]/30 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-[#00C875]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>LinkedIn</p>
                  <p className="font-['Inter'] text-white" style={{ fontSize: '1rem' }}>LinkedIn/RifqiFauzi</p>
                </div>
              </a>

              <a
                href="https://github.com/Fauziian"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#00C875]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00C875]/20 group-hover:bg-[#00C875]/30 transition-all duration-300">
                  <Github className="w-6 h-6 text-[#00C875]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>GitHub</p>
                  <p className="font-['Inter'] text-white" style={{ fontSize: '1rem' }}>GitHub/Fauziian</p>
                </div>
              </a>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="font-['Montserrat'] font-semibold text-[#00A8FF] mb-6" style={{ fontSize: '1.25rem' }}>
                Social
              </h3>

              <a
                href="https://www.instagram.com/rfqifziannn/?__pwa=1#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#00A8FF]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A8FF]/20 group-hover:bg-[#00A8FF]/30 transition-all duration-300">
                  <Instagram className="w-6 h-6 text-[#00A8FF]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>Instagram</p>
                  <p className="font-['Inter'] text-white" style={{ fontSize: '1rem' }}>Instagram/rfqifziannn</p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@fauziiann?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#00A8FF]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A8FF]/20 group-hover:bg-[#00A8FF]/30 transition-all duration-300">
                  <Music className="w-6 h-6 text-[#00A8FF]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>TikTok</p>
                  <p className="font-['Inter'] text-white" style={{ fontSize: '1rem' }}>TikTok/fauziiann</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@Fauzii_An"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#00A8FF]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00A8FF]/20 group-hover:bg-[#00A8FF]/30 transition-all duration-300">
                  <Youtube className="w-6 h-6 text-[#00A8FF]" />
                </div>
                <div>
                  <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>YouTube</p>
                  <p className="font-['Inter'] text-white" style={{ fontSize: '1rem' }}>YouTube/Rifqi Fauzi Anwar</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>
              © 2026 Rifqi Fauzi Anwar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
