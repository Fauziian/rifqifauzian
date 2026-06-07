import { Code2, Network, Database, Wrench, Globe, Shield, Server, Activity } from 'lucide-react';

export function SkillsBento() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-7xl w-full">
        <h2 className="font-['Syne'] font-bold text-center mb-16" style={{ fontSize: '3rem', letterSpacing: '0.02em' }}>
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Development Skills Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00C875]/20">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-[#00C875]" />
              <h3 className="font-['Montserrat'] font-bold text-[#00C875]" style={{ fontSize: '1.75rem' }}>
                Development Skills
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Database className="w-6 h-6 text-[#00C875] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Backend</p>
                  <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>Java, PHP, OOP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-[#00C875] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Frontend</p>
                  <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>HTML, CSS, React.js, UI/UX Design</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Server className="w-6 h-6 text-[#00C875] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Database</p>
                  <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>MySQL</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Wrench className="w-6 h-6 text-[#00C875] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Tools</p>
                  <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>VSCode, IntelliJ, GitHub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Networking Skills Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#12161A] to-[#0D1114] border border-[#00A8FF]/30 rounded-3xl p-8 hover:border-[#00A8FF]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A8FF]/20 overflow-hidden">
            {/* Circuit Background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="circuits" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="#00A8FF"/>
                    <path d="M20 20 L40 20 M20 20 L20 0" stroke="#00A8FF" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuits)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-8 h-8 text-[#00A8FF]" />
                <h3 className="font-['Montserrat'] font-bold text-[#00A8FF]" style={{ fontSize: '1.75rem' }}>
                  Networking Skills
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[#00A8FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Mikrotik</p>
                    <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>RouterOS, Firewall, VPN, Hotspot, QoS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Network className="w-6 h-6 text-[#00A8FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Concepts</p>
                    <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>TCP/IP, DNS, DHCP, Subnetting, Routing</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Server className="w-6 h-6 text-[#00A8FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Hardware</p>
                    <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>Router, Switch, AP Management</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-[#00A8FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-['Inter'] font-semibold text-white mb-2" style={{ fontSize: '1.125rem' }}>Troubleshooting</p>
                    <p className="font-['Inter'] text-white/70" style={{ fontSize: '0.9375rem' }}>Network & Connectivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
