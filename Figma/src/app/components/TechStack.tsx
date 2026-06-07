import { motion } from 'motion/react';

export function TechStack() {
  const technologies = [
    { name: 'Java', category: 'Backend', level: 90, color: '#00C875' },
    { name: 'PHP', category: 'Backend', level: 85, color: '#00C875' },
    { name: 'React.js', category: 'Frontend', level: 80, color: '#00C875' },
    { name: 'HTML/CSS', category: 'Frontend', level: 95, color: '#00C875' },
    { name: 'JavaScript', category: 'Frontend', level: 85, color: '#00C875' },
    { name: 'MySQL', category: 'Database', level: 85, color: '#00C875' },
    { name: 'Laravel', category: 'Framework', level: 80, color: '#00C875' },
    { name: 'Mikrotik', category: 'Network', level: 90, color: '#00A8FF' },
    { name: 'TCP/IP', category: 'Network', level: 85, color: '#00A8FF' },
    { name: 'VPN/Firewall', category: 'Network', level: 85, color: '#00A8FF' },
    { name: 'Java Swing', category: 'Game Dev', level: 85, color: 'rgb(168, 85, 247)' },
    { name: 'Java FX', category: 'Game Dev', level: 80, color: 'rgb(168, 85, 247)' },
    { name: 'Roblox Studio', category: 'Game Dev', level: 90, color: 'rgb(168, 85, 247)' },
    { name: 'Lua Scripting', category: 'Game Dev', level: 85, color: 'rgb(168, 85, 247)' },
  ];

  const categories = ['Backend', 'Frontend', 'Database', 'Framework', 'Network', 'Game Dev'];

  return (
    <section className="min-h-screen flex items-center justify-center px-16 py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl w-full">
        <motion.h2
          className="font-['Syne'] font-bold mb-20 text-center"
          style={{ fontSize: '4rem', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technology
          <br />
          <span className="text-gray-600">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-lg">{tech.name}</h3>
                  <p className="font-['Inter'] text-sm text-gray-500">{tech.category}</p>
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
              <p className="font-['Inter'] text-sm text-gray-400">{category}</p>
              <p className="font-['Syne'] font-bold text-xl text-[#00C875] mt-2">
                {technologies.filter(t => t.category === category).length}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
