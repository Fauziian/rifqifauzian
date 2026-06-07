import { motion } from 'motion/react';
import { Award, Trophy, Star, Target } from 'lucide-react';

export function Achievements() {
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
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 py-32">
      <div className="max-w-7xl w-full">
        <motion.h2
          className="font-['Syne'] font-bold mb-20 text-center"
          style={{ fontSize: '4rem', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements &<br />
          <span className="text-gray-600">Recognitions</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
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
        </div>
      </div>
    </section>
  );
}
