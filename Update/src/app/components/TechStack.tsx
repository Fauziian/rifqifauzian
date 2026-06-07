import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Code2, Award, Cpu, Github, ExternalLink, Trophy, Star, Target } from 'lucide-react';

// Import project images
import mountYHImage from '../../imports/6447ee5e-15ca-4b84-b04c-738fda31cb29.png';
import mountVelmornImage from '../../imports/thumb3.png';

interface TechStackProps {
  onViewPKLPhotos?: () => void;
  onViewWorkPhotos?: () => void;
}

export function TechStack({ onViewPKLPhotos, onViewWorkPhotos }: TechStackProps) {
  const [activeTab, setActiveTab] = useState<'techstack' | 'projects' | 'certificates'>('techstack');
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

  const tabs = [
    { id: 'projects', label: 'Projects', icon: <Code2 className="w-4 h-4" /> },
    { id: 'certificates', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
    { id: 'techstack', label: 'Tech Stack', icon: <Cpu className="w-4 h-4" /> },
  ];

  const technologies = [
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'ReactJS', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    { name: 'Node JS', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'Material UI', icon: 'https://cdn.simpleicons.org/mui/007FFF' },
    { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
    { name: 'SweetAlert2', icon: 'https://github.com/sweetalert2.png' },
    { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva/00C4CC' },
    { name: 'Adobe Animate', icon: 'https://cdn.simpleicons.org/adobeanimate/FF0000' },
    { name: 'Adobe Photoshop', icon: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF' },
    { name: 'Capcut', icon: 'https://raw.githubusercontent.com/kreativ-anders/brand-names/main/capcut.svg' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' }
  ];

  const projects = [
    {
      title: 'Mount YH (Roblox)',
      desc: 'Most popular 3D adventure map with 2.69M+ player visits',
      stack: 'Roblox Studio, Lua Scripting, 3D Modeling',
      demo: 'https://www.roblox.com/games/87256726839066/MOUNT-YH',
      featured: true,
      color: 'purple',
      image: mountYHImage,
    },
    {
      title: 'Mount Velmorn (Roblox)',
      desc: 'Immersive 3D environment map with 1.2K+ player visits',
      stack: 'Roblox Studio, Lua, Game Design',
      demo: 'https://www.roblox.com/games/103423346509098/Mount-Velmorn',
      featured: true,
      color: 'purple',
      image: mountVelmornImage,
    },
    {
      title: 'THE AWAKENING OF SURABAYA',
      desc: 'Retro 2D Java platformer inspired by Surabaya',
      stack: 'Java, Java Swing, OOP',
      github: 'https://github.com/Fauziian/The-Awakening-Of-Surabaya',
      demo: 'https://drive.google.com/file/d/1KlJ7wRQqPHCPFl1VlrER2iYW54iyVHRs/view?usp=sharing',
      image: 'https://images.unsplash.com/photo-1671740193633-abef5626698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'GuitarHobbys',
      desc: 'Responsive static site showcasing guitars',
      stack: 'HTML, CSS, JavaScript',
      github: 'https://github.com/Fauziian/GuitarHobbys',
      demo: 'https://fauziian.github.io/GuitarHobbys/',
      image: 'https://images.unsplash.com/photo-1725152471889-6c59a52e7794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'JKT 48 Entertainment',
      desc: 'JKT48 inspired site with dynamic PHP',
      stack: 'HTML, PHP, CSS, JavaScript',
      github: 'https://github.com/Fauziian/JKT48',
      demo: 'https://fauziian.github.io/JKT48/',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'Gaming Shop',
      desc: 'Responsive web store for UI/UX practice',
      stack: 'HTML, CSS',
      github: 'https://github.com/Fauziian/GamingShop',
      demo: 'https://fauziian.github.io/GamingShop/',
      image: 'https://images.unsplash.com/photo-1626218174358-7769486c4b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'RasaRekomendasi',
      desc: 'AI-powered recipe platform',
      stack: 'Laravel, PHP, MySQL',
      github: 'https://github.com/Fauziian/RasaRekomendasi',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      title: 'Ranata Tour',
      desc: 'Harley-Davidson Merdeka Ride 2026 platform',
      stack: 'HTML, CSS, JavaScript',
      github: 'https://github.com/Fauziian/RanataTour',
      demo: 'https://fauziian.github.io/RanataTour/',
      image: 'https://images.unsplash.com/photo-1558979159-2b18a4070a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Professional Certifications',
      items: [
        'Network Configuration Expert',
        'Full-Stack Development',
        'Game Development Fundamentals',
      ],
      color: '#00C875',
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Key Accomplishments',
      items: [
        'Successfully deployed network infrastructure for 50+ clients',
        'Developed 7+ production-ready applications',
        'Reduced network downtime by 40% through QoS optimization',
      ],
      color: '#00A8FF',
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Game Development Success',
      items: [
        '2.695M total player visits on Roblox',
        'Owner & Developer of Mount YH (2.69M visits)',
        'Creator of Mount Velmorn (1.2K visits)',
      ],
      color: 'rgb(168, 85, 247)',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Career Highlights',
      items: [
        'Field Work Practice at PT. Wastama',
        'Production Excellence at PT. Asahi',
        'Multiple Client Deployments',
      ],
      color: '#00C875',
    },
  ];

  return (
    <section id="techstack-tabs-section" className="w-full bg-[#07090b] relative py-20 border-t border-white/[0.02]">
      {/* Tab Selector Header */}
      <div className="flex border-b border-white/[0.04] bg-[#0c0d10] w-full mb-16 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl w-full mx-auto px-16 flex justify-start md:justify-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-8 py-5 text-sm font-semibold font-['Montserrat'] tracking-wider border-b-2 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#2b141a] text-white border-[#ff4a5a] shadow-[inset_0_-2px_0_0_#ff4a5a]'
                    : 'text-zinc-500 hover:text-zinc-300 border-transparent hover:border-zinc-800'
                }`}
              >
                <span className={`transition-colors duration-300 ${isActive ? 'text-[#ff4a5a]' : 'text-zinc-500'}`}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content Panel */}
      <div className="max-w-7xl w-full mx-auto px-16">
        <AnimatePresence mode="wait">
          {activeTab === 'techstack' && (
            <motion.div
              key="techstack-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="bg-[#0c0d10]/90 border border-white/[0.03] hover:border-purple-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square hover:bg-white/[0.01] transition-all duration-300 hover:-translate-y-1 group cursor-pointer shadow-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-14 h-14 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <h3 className="font-['Montserrat'] font-bold text-xs text-zinc-400 group-hover:text-white transition-colors tracking-wider">
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.slice(0, isProjectsExpanded ? undefined : 4).map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="group h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className={`h-full flex flex-col bg-white/5 border rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                      project.featured
                        ? 'border-purple-500/50 hover:border-purple-500 bg-gradient-to-br from-purple-500/10 to-transparent'
                        : 'border-white/10 hover:border-[#00C875]/50'
                    }`}>
                      {project.image && (
                        <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-gray-800 to-black flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                          {project.featured && (
                            <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500/90 backdrop-blur-sm border border-purple-400/50 rounded-full">
                              <p className="font-['Inter'] text-white text-xs font-semibold">🎮 FEATURED</p>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="p-8 flex-grow flex flex-col">
                        <h3 className="font-['Montserrat'] font-bold text-xl mb-3">{project.title}</h3>
                        <p className="font-['Inter'] text-gray-400 mb-4 flex-grow">{project.desc}</p>
                        <p className={`font-['Inter'] text-sm mb-6 ${project.color === 'purple' ? 'text-purple-400' : 'text-[#00C875]'}`}>
                          {project.stack}
                        </p>

                        <div className="flex gap-3 mt-auto">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white/5"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                                project.color === 'purple'
                                  ? 'bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 text-purple-400'
                                  : 'bg-[#00C875]/20 border border-[#00C875]/30 hover:bg-[#00C875]/30'
                              }`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span className="font-['Inter'] text-sm">{project.featured ? 'Play Now' : 'View'}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                  className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00C875]/50 rounded-xl font-['Inter'] font-semibold text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>{isProjectsExpanded ? 'See Less' : 'See More'}</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isProjectsExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {achievements.map((achievement, i) => (
                <motion.div
                  key={achievement.title}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, borderColor: achievement.color }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    <div style={{ color: achievement.color }}>
                      {achievement.icon}
                    </div>
                  </div>

                  <h3
                    className="font-['Montserrat'] font-bold text-2xl mb-6"
                    style={{ color: achievement.color }}
                  >
                    {achievement.title}
                  </h3>

                  <ul className="space-y-3">
                    {achievement.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span style={{ color: achievement.color }}>•</span>
                        <span className="font-['Inter'] text-gray-300 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
