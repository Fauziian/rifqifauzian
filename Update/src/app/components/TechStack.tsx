import { motion } from 'motion/react';
import { useState } from 'react';
import { Network, Shield } from 'lucide-react';

export function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  const technologies = [
    {
      name: 'Java',
      category: 'Backend',
      level: 90,
      color: '#00C875',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'PHP',
      category: 'Backend',
      level: 85,
      color: '#00C875',
      icon: 'https://cdn.simpleicons.org/php/777BB4'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 80,
      color: '#00C875',
      icon: 'https://cdn.simpleicons.org/nodedotjs/339933'
    },
    {
      name: 'React.js',
      category: 'Frontend',
      level: 80,
      color: '#00C875',
      icon: 'https://cdn.simpleicons.org/react/61DAFB'
    },
    {
      name: 'HTML/CSS',
      category: 'Frontend',
      level: 95,
      color: '#00C875',
      icon: 'https://cdn.simpleicons.org/html5/E34F26'
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      level: 85,
      color: '#00C875',
      icon: 'https://cdn.simpleicons.org/javascript/F7DF1E'
    },
    {
      name: 'MySQL',
      category: 'Database',
      level: 85,
      color: '#00C875',
      icon: 'https://cdn.simpleicons.org/mysql/4479A1'
    },
    {
      name: 'Laravel',
      category: 'Framework',
      level: 80,
      color: '#00C875',
      icon: 'https://cdn.simpleicons.org/laravel/FF2D20'
    },
    {
      name: 'Mikrotik',
      category: 'Network',
      level: 90,
      color: '#00A8FF',
      icon: 'https://cdn.simpleicons.org/mikrotik/1f618a'
    },
    {
      name: 'Cisco',
      category: 'Network',
      level: 85,
      color: '#00A8FF',
      icon: 'https://cdn.simpleicons.org/cisco/049FD9'
    },
    {
      name: 'TCP/IP',
      category: 'Network',
      level: 85,
      color: '#00A8FF',
      icon: 'network'
    },
    {
      name: 'VPN/Firewall',
      category: 'Network',
      level: 85,
      color: '#00A8FF',
      icon: 'shield'
    },
    {
      name: 'Java Swing',
      category: 'Game Dev',
      level: 85,
      color: 'rgb(168, 85, 247)',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'Java FX',
      category: 'Game Dev',
      level: 80,
      color: 'rgb(168, 85, 247)',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'Roblox Studio',
      category: 'Game Dev',
      level: 90,
      color: 'rgb(168, 85, 247)',
      icon: 'https://cdn.simpleicons.org/roblox/D41111'
    },
    {
      name: 'Lua Scripting',
      category: 'Game Dev',
      level: 85,
      color: 'rgb(168, 85, 247)',
      icon: 'https://cdn.simpleicons.org/lua/000080'
    },
  ];

  const categories = [
    { name: 'Backend', count: 3, color: '#00C875' },
    { name: 'Frontend', count: 3, color: '#00C875' },
    { name: 'Database', count: 1, color: '#00C875' },
    { name: 'Framework', count: 1, color: '#00C875' },
    { name: 'Network', count: 4, color: '#00A8FF' },
    { name: 'Game Dev', count: 4, color: 'rgb(168, 85, 247)' }
  ];

  const renderIcon = (tech: typeof technologies[0]) => {
    if (tech.icon === 'network') {
      return <Network className="w-6 h-6 text-[#00A8FF]" />;
    }
    if (tech.icon === 'shield') {
      return <Shield className="w-6 h-6 text-[#00A8FF]" />;
    }
    return <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />;
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-32 bg-transparent">
      <div className="max-w-7xl w-full">
        <motion.h2
          className="font-['Syne'] font-bold mb-20"
          style={{ fontSize: '4.5rem', lineHeight: '0.9', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technology
          <br />
          <span className="text-gray-600">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.slice(0, isExpanded ? undefined : 6).map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/[0.05] overflow-hidden">
                    {renderIcon(tech)}
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-lg text-white">{tech.name}</h3>
                    <p className="font-['Inter'] text-sm text-gray-500">{tech.category}</p>
                  </div>
                </div>
                <span
                  className="font-['Syne'] font-bold text-2xl"
                  style={{ color: tech.color }}
                >
                  {tech.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: tech.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More/Less Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00C875]/50 rounded-xl font-['Inter'] font-semibold text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>{isExpanded ? 'See Less' : 'See More'}</span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

        {/* Category Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              className="text-center p-4 bg-white/5 rounded-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-['Inter'] text-sm text-gray-400">{category.name}</p>
              <p
                className="font-['Syne'] font-bold text-3xl mt-2"
                style={{ color: category.color }}
              >
                {category.count}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
