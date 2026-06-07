import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  stack: string;
  github?: string;
  demo?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'THE AWAKENING OF SURABAYA',
    description: 'Retro 2D Java platformer inspired by Surabaya. Defeat enemies, avoid traps, reach flag. Sprite animation, enemy AI.',
    stack: 'Java, Java Swing, OOP, Game Loop, Sprite Animation',
    github: 'https://github.com/Fauziian/The-Awakening-Of-Surabaya',
    demo: 'https://drive.google.com/file/d/1KlJ7wRQqPHCPFl1VlrER2iYW54iyVHRs/view?usp=sharing',
    gradient: 'from-[#00C875]/20 to-[#00A8FF]/20',
  },
  {
    title: 'GuitarHobbys',
    description: 'Responsive static site showcasing guitars/accessories. Clean layout, hover effects.',
    stack: 'HTML, CSS, JavaScript',
    github: 'https://github.com/Fauziian/GuitarHobbys',
    demo: 'https://fauziian.github.io/GuitarHobbys/',
    gradient: 'from-[#00A8FF]/20 to-[#00C875]/20',
  },
  {
    title: 'JKT 48 Entertainment',
    description: 'JKT48 inspired site: member profiles, news, galleries, fan interactions. Dynamic PHP.',
    stack: 'HTML, PHP, CSS, JavaScript',
    github: 'https://github.com/Fauziian/JKT48',
    demo: 'https://fauziian.github.io/JKT48/',
    gradient: 'from-[#00C875]/20 to-[#00A8FF]/20',
  },
  {
    title: 'Gaming Shop',
    description: 'Simple, responsive web store. Modern layout for UI/UX practice.',
    stack: 'HTML, CSS',
    github: 'https://github.com/Fauziian/GamingShop',
    demo: 'https://fauziian.github.io/GamingShop/',
    gradient: 'from-[#00A8FF]/20 to-[#00C875]/20',
  },
  {
    title: 'Hotel Reservation',
    description: 'Hotel reservation system for Unjani student accommodation.',
    stack: 'PHP, CSS, JavaScript',
    github: 'https://github.com/Fauziian/Reservasi-Hotel',
    gradient: 'from-[#00C875]/20 to-[#00A8FF]/20',
  },
  {
    title: 'RasaRekomendasi',
    description: 'AI-powered recipe platform. Features: consultation, interactive chat, VIP packages.',
    stack: 'Laravel, PHP, MySQL, CSS, JavaScript',
    github: 'https://github.com/Fauziian/RasaRekomendasi',
    gradient: 'from-[#00A8FF]/20 to-[#00C875]/20',
  },
  {
    title: 'Ranata Tour',
    description: 'Reservation platform for Harley-Davidson Merdeka Ride 2026. Hotel booking, restaurant QR, flight services.',
    stack: 'HTML, CSS, JavaScript',
    github: 'https://github.com/Fauziian/RanataTour',
    demo: 'https://fauziian.github.io/RanataTour/',
    gradient: 'from-[#00C875]/20 to-[#00A8FF]/20',
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-7xl w-full">
        <h2 className="font-['Syne'] font-bold text-center mb-16" style={{ fontSize: '3rem', letterSpacing: '0.02em' }}>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6
                hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl
                ${index === 0 ? 'md:col-span-2' : ''}
                ${index === 6 ? 'lg:col-span-2' : ''}
              `}
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)`,
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="font-['Montserrat'] font-bold mb-3" style={{ fontSize: '1.25rem' }}>
                  {project.title}
                </h3>

                <p className="font-['Inter'] text-white/70 mb-4 flex-grow" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="font-['Inter'] text-[#00C875] text-sm mb-2">Tech Stack:</p>
                  <p className="font-['Inter'] text-white/60" style={{ fontSize: '0.875rem' }}>
                    {project.stack}
                  </p>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-[#00C875]/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-['Inter']" style={{ fontSize: '0.875rem' }}>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-[#00C875]/10 border border-[#00C875]/30 rounded-full text-[#00C875] hover:bg-[#00C875]/20 hover:border-[#00C875]/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-['Inter']" style={{ fontSize: '0.875rem' }}>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
