import { useState } from 'react';

export function FloatingNav() {
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
        <div className="font-['Syne'] font-bold tracking-tight" style={{ fontSize: '1.125rem', letterSpacing: '0.05em' }}>
          RIFQI FAUZI
        </div>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`
                font-['Inter'] px-4 py-2 rounded-full transition-all duration-300
                ${activeLink === link.id
                  ? 'bg-white/10 text-[#00C875] shadow-lg shadow-[#00C875]/20'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
                }
              `}
              style={{ fontSize: '0.9375rem' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
