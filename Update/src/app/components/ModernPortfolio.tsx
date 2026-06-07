import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Instagram, Youtube, Music, FileText, ExternalLink, Code2, Network, Server, Shield, Briefcase, Award, Gamepad2, Cpu, Database, ArrowUp, Phone, MapPin, Send } from 'lucide-react';
import { Navbar } from './Navbar';
import { DraggableCard } from './DraggableCard';
import { Experience } from './Experience';
import { Achievements } from './Achievements';
import { TechStack } from './TechStack';
import { ScrollProgress } from './ScrollProgress';

// Import project images
import mountYHImage from '../../imports/6447ee5e-15ca-4b84-b04c-738fda31cb29.png';
import mountVelmornImage from '../../imports/thumb3.png';
import robloxGameImage from '../../imports/roblox_game.jpg';
import networkEngineerImage from '../../imports/network_engineer.png';
import softwareEngineerImage from '../../imports/software_engineer.png';

const roles = [
  'Network Engineer',
  'Software Engineer',
  'Game Developer',
  'Designer'
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer: any;
    const currentFullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentFullText.substring(0, prev.length + 1));
        
        if (displayText === currentFullText) {
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setDisplayText((prev) => currentFullText.substring(0, prev.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(40);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <span className="inline-block relative">
      <span className="text-[#00C875]">{displayText}</span>
      <span className="ml-1 inline-block w-0.5 h-6 bg-[#00C875] animate-pulse align-middle"></span>
    </span>
  );
}

interface ModernPortfolioProps {
  onViewPKLPhotos: () => void;
  onViewWorkPhotos: () => void;
}

const WEB3FORMS_ACCESS_KEY = "bdaf39e6-aa5f-4cf6-964e-d3daf9ca508d"; // Get your free access key from https://web3forms.com/

export function ModernPortfolio({ onViewPKLPhotos, onViewWorkPhotos }: ModernPortfolioProps) {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'missing_key' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" || !WEB3FORMS_ACCESS_KEY) {
      setSubmitStatus('missing_key');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 3,
    }));
    setStars(newStars);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sections = ['hero', 'skills', 'projects', 'experience', 'contact'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-[#04060c] text-[#E8E8E8] overflow-x-hidden relative">
      {/* Animated Parallax Cyber Grid Overlays */}
      <div className="animated-grid-bg" />
      <div className="animated-grid-bg-blue" />

      {/* Floating Glowing Orbs / Aurora Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute w-[650px] h-[650px] rounded-full bg-[#00C875]/12 blur-[150px]"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -90, 50, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '5%', left: '2%' }}
        />
        <motion.div
          className="absolute w-[750px] h-[750px] rounded-full bg-[#00A8FF]/10 blur-[170px]"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 90, -70, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '35%', right: '4%' }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-[160px]"
          animate={{
            x: [0, 80, -90, 0],
            y: [0, -50, 110, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '20%', left: '8%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-[#FF007A]/6 blur-[145px]"
          animate={{
            x: [0, -70, 60, 0],
            y: [0, 80, -90, 0],
            scale: [0.9, 1.1, 0.95, 0.9],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '45%', right: '15%' }}
        />
      </div>

      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.15 + Math.random() * 0.5,
              animation: `twinkle ${2 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Magnetic Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 200, 117, 0.02) 0%, rgba(0, 168, 255, 0.015) 50%, transparent 80%)`,
        }}
      />
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-16 relative pt-24">
        <div className="max-w-7xl w-full grid grid-cols-2 gap-32 items-center">
          {/* Left - Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="font-['Inter'] text-gray-400 mb-4"
              style={{ fontSize: '1rem', letterSpacing: '0.2em' }}
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              className="font-['Syne'] font-bold mb-6"
              style={{ fontSize: '5rem', lineHeight: '1', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">RIFQI</span>
              <br />
              <span className="text-gray-500">FAUZI</span>
              <br />
              <span className="text-white">ANWAR</span>
            </motion.h1>

            <motion.h2
              className="font-['Montserrat'] font-semibold text-[#00C875] mb-8 min-h-[40px] flex items-center"
              style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter />
            </motion.h2>

            <motion.p
              className="font-['Inter'] text-gray-400 leading-relaxed mb-12 max-w-lg"
              style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Aspiring software/network engineer with strong foundation in full-stack web development, 2D Java game programming, & Mikrotik configuration.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-[#00C875] text-black rounded-full font-['Inter'] font-semibold hover:shadow-2xl hover:shadow-[#00C875]/50 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1hKpaADxq1aXtyPR8SCDqiWTc4B7EosRf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 rounded-full font-['Inter'] font-semibold hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                View CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Draggable 3D Photo with Rope */}
          <motion.div
            className="relative h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DraggableCard />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-32">
        <div className="max-w-6xl w-full">
          <motion.h2
            className="font-['Syne'] font-bold mb-20 text-center text-5xl md:text-[4rem]"
            style={{ letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About <span className="text-gray-600">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#00C875]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#00C875]/20 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-[#00C875]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl mb-3">Software Engineer</h3>
              <p className="font-['Inter'] text-gray-400 leading-relaxed">
                Full-stack development with 3+ years of experience in modern web technologies, creating efficient and scalable applications.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#00A8FF]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-[#00A8FF]/20 rounded-2xl flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-[#00A8FF]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl mb-3">Network Engineer</h3>
              <p className="font-['Inter'] text-gray-400 leading-relaxed">
                7+ years of experience in Cisco & Mikrotik configuration, network infrastructure setup, and ensuring secure, reliable connectivity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl mb-3">Game Developer</h3>
              <p className="font-['Inter'] text-gray-400 leading-relaxed">
                Creating engaging games for 11+ years with Java and Roblox Studio. Owner of Mount YH with 2.695M total player visits.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-br from-[#00C875]/10 to-[#00A8FF]/10 border border-white/10 rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-['Inter'] text-lg text-gray-300 leading-relaxed text-center">
              I'm passionate about creating <span className="text-[#00C875] font-semibold">efficient, user-oriented digital solutions</span> through clean design and practical implementation. With experience in both <span className="text-[#00A8FF] font-semibold">network infrastructure</span> and <span className="text-[#00C875] font-semibold">software development</span>, I bring a unique perspective to every project, ensuring both technical excellence and user satisfaction.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <p className="font-['Syne'] font-bold text-4xl text-[#00C875] mb-2">3+ Yrs</p>
                <p className="font-['Inter'] text-gray-400">Full-Stack Dev</p>
              </div>
              <div className="text-center">
                <p className="font-['Syne'] font-bold text-4xl text-[#00A8FF] mb-2">7+ Yrs</p>
                <p className="font-['Inter'] text-gray-400">Network Engineer</p>
              </div>
              <div className="text-center">
                <p className="font-['Syne'] font-bold text-4xl text-purple-500 mb-2">11+ Yrs</p>
                <p className="font-['Inter'] text-gray-400">Game Developer</p>
              </div>
              <div className="text-center">
                <p className="font-['Syne'] font-bold text-4xl text-[#00C875] mb-2">2.695M</p>
                <p className="font-['Inter'] text-gray-400">Player Visits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-32">
        <div className="max-w-7xl w-full">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-32 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Software Engineering */}
            <div>
              <h3
                className="font-['Syne'] font-bold mb-12 text-5xl md:text-[4rem]"
                style={{ lineHeight: '1', letterSpacing: '-0.02em' }}
              >
                Software
                <br />
                <span className="text-gray-600">Engineer</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Code2 className="w-6 h-6 text-[#00C875]" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Backend</p>
                    <p className="font-['Inter'] text-white">Java, PHP, OOP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Code2 className="w-6 h-6 text-[#00C875]" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Frontend</p>
                    <p className="font-['Inter'] text-white">HTML, CSS, React.js, UI/UX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="w-6 h-6 text-[#00C875]" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Database</p>
                    <p className="font-['Inter'] text-white">MySQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tilted Photo */}
            <motion.div
              className="relative flex items-center justify-center mt-12 md:mt-0 cursor-pointer"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 8 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-72 h-80 bg-white rounded-2xl shadow-2xl p-3 flex flex-col transition-shadow duration-300 hover:shadow-[#00C875]/25">
                <div className="w-full h-[85%] overflow-hidden rounded-xl bg-gray-900">
                  <img src={softwareEngineerImage} alt="Software Engineer" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <span className="font-['Syne'] text-black text-xs font-bold tracking-wider">CODING MODE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Network Engineering */}
          <motion.div
            className="grid grid-cols-2 gap-16 mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tilted Photo */}
            <motion.div
              className="relative flex items-center justify-center order-last md:order-first mt-12 md:mt-0 cursor-pointer"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -8 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-72 h-80 bg-white rounded-2xl shadow-2xl p-3 flex flex-col transition-shadow duration-300 hover:shadow-[#00A8FF]/25">
                <div className="w-full h-[85%] overflow-hidden rounded-xl bg-gray-900">
                  <img src={networkEngineerImage} alt="Network Engineer" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <span className="font-['Syne'] text-black text-xs font-bold tracking-wider">ROUTER CONFIG</span>
                </div>
              </div>
            </motion.div>

            {/* Network Skills */}
            <div className="order-first md:order-last">
              <h3
                className="font-['Syne'] font-bold mb-12 text-5xl md:text-[4rem]"
                style={{ lineHeight: '1', letterSpacing: '-0.02em' }}
              >
                Network
                <br />
                <span className="text-gray-600">Engineer</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Shield className="w-6 h-6 text-[#00A8FF]" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Mikrotik</p>
                    <p className="font-['Inter'] text-white">RouterOS, Firewall, VPN, QoS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Cpu className="w-6 h-6 text-[#00A8FF]" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Cisco</p>
                    <p className="font-['Inter'] text-white">Switching, Routing, Cisco IOS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Network className="w-6 h-6 text-[#00A8FF]" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Concepts</p>
                    <p className="font-['Inter'] text-white">TCP/IP, DNS, DHCP, Routing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="w-6 h-6 text-[#00A8FF]" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Hardware</p>
                    <p className="font-['Inter'] text-white">Router, Switch, AP Management</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Game Development */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Game Dev Skills */}
            <div>
              <h3
                className="font-['Syne'] font-bold mb-12 text-5xl md:text-[4rem]"
                style={{ lineHeight: '1', letterSpacing: '-0.02em' }}
              >
                Game
                <br />
                <span className="text-gray-600">Developer</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Gamepad2 className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Frameworks & Engines</p>
                    <p className="font-['Inter'] text-white">Java Swing, Java FX, Roblox Studio</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Cpu className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Game Development</p>
                    <p className="font-['Inter'] text-white">2D Platformers, 3D Environments, Lua Scripting</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="font-['Inter'] text-gray-400 text-sm">Achievements</p>
                    <p className="font-['Inter'] text-white">2.695M Player Visits on Roblox</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tilted Photo */}
            <motion.div
              className="relative flex items-center justify-center mt-12 md:mt-0 cursor-pointer"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 8 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-72 h-80 bg-white rounded-2xl shadow-2xl p-3 flex flex-col transition-shadow duration-300 hover:shadow-purple-500/25">
                <div className="w-full h-[85%] overflow-hidden rounded-xl bg-gray-900">
                  <img src={robloxGameImage} alt="Roblox Game" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex items-center justify-center">
                  <span className="font-['Syne'] text-black text-xs font-bold tracking-wider">MOUNT YH</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-16 py-32">
        <div className="max-w-7xl w-full">
          <motion.h2
            className="font-['Syne'] font-bold mb-20 text-5xl md:text-[4rem]"
            style={{ letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured
            <br />
            <span className="text-gray-600">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].slice(0, isProjectsExpanded ? undefined : 4).map((project, i) => (
              <motion.div
                key={i}
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
                  {/* Project Image */}
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
                    {project.featured && !project.image && (
                      <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full mb-4">
                        <p className="font-['Inter'] text-purple-400 text-xs font-semibold">🎮 FEATURED</p>
                      </div>
                    )}
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
        </div>
      </section>

      {/* Experience Section */}
      <Experience onViewPKLPhotos={onViewPKLPhotos} onViewWorkPhotos={onViewWorkPhotos} />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-16 py-32 relative z-10">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <motion.h2
            className="font-['Syne'] font-bold text-center mb-16 bg-gradient-to-r from-[#00A8FF] to-[#00C875] bg-clip-text text-transparent"
            style={{ fontSize: '3.5rem', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Say Hi, Don't Be Shy
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Info Cards & Social Links */}
            <div className="lg:col-span-5 space-y-6">
              {/* Email Card */}
              <motion.div
                className="flex items-center gap-5 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/20 flex items-center justify-center text-[#00A8FF] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-white text-sm">Email</h4>
                  <a href="mailto:rifqifauzii.an@gmail.com" className="font-['Inter'] text-white/60 hover:text-[#00A8FF] transition-colors text-sm break-all">
                    rifqifauzii.an@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                className="flex items-center gap-5 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#00C875]/10 border border-[#00C875]/20 flex items-center justify-center text-[#00C875] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-white text-sm">Phone</h4>
                  <a href="tel:+6282211187591" className="font-['Inter'] text-white/60 hover:text-[#00C875] transition-colors text-sm">
                    +62 822-1118-7591
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                className="flex items-center gap-5 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-white text-sm">Location</h4>
                  <p className="font-['Inter'] text-white/60 text-sm">
                    Bandung, Jawa Barat, Indonesia
                  </p>
                </div>
              </motion.div>

              {/* Connect With Me Section */}
              <div className="pt-6">
                <h4 className="font-['Montserrat'] font-bold text-white mb-4 text-base">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rifqi-fauzi-anwar-ab486b290/' },
                    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Fauziian' },
                    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/rfqifziannn/?__pwa=1#' },
                    { icon: <Music className="w-5 h-5" />, href: 'https://www.tiktok.com/@fauziiann?is_from_webapp=1&sender_device=pc' },
                    { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@Fauzii_An' },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 hover:border-[#00C875] hover:text-[#00C875] hover:shadow-lg hover:shadow-[#00C875]/25 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              className="lg:col-span-7 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-['Montserrat'] font-semibold text-white/80 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl font-['Inter'] text-white placeholder-white/30 focus:outline-none focus:border-[#00C875] focus:bg-white/[0.08] transition-all duration-300 text-sm"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-['Montserrat'] font-semibold text-white/80 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl font-['Inter'] text-white placeholder-white/30 focus:outline-none focus:border-[#00C875] focus:bg-white/[0.08] transition-all duration-300 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-['Montserrat'] font-semibold text-white/80 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl font-['Inter'] text-white placeholder-white/30 focus:outline-none focus:border-[#00C875] focus:bg-white/[0.08] transition-all duration-300 text-sm"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-['Montserrat'] font-semibold text-white/80 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl font-['Inter'] text-white placeholder-white/30 focus:outline-none focus:border-[#00C875] focus:bg-white/[0.08] transition-all duration-300 text-sm resize-none"
                    required
                  />
                </div>

                {/* Form Submit Status Messages */}
                {submitStatus === 'success' && (
                  <p className="font-['Inter'] text-sm text-[#00C875] bg-[#00C875]/10 border border-[#00C875]/20 rounded-xl p-3.5 text-center">
                    Message sent successfully! Thank you.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="font-['Inter'] text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3.5 text-center">
                    Failed to send message. Please try again or email directly.
                  </p>
                )}
                {submitStatus === 'missing_key' && (
                  <div className="font-['Inter'] text-sm text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 text-center space-y-1">
                    <p className="font-semibold">⚠️ Web3Forms Access Key is missing.</p>
                    <p className="text-xs text-white/70">
                      Please generate a free key from <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="underline hover:text-amber-400">web3forms.com</a> and paste it into <code>ModernPortfolio.tsx</code>.
                    </p>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00A8FF] to-[#00C875] hover:from-[#0096e6] hover:to-[#00b368] text-white rounded-xl font-['Inter'] font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </motion.div>
          </div>

          {/* Footer Copyright */}
          <p className="text-center text-white/30 mt-20 font-['Inter'] text-sm">
            © 2026 Rifqi Fauzi Anwar. All rights reserved.
          </p>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-14 h-14 bg-[#00C875] rounded-full flex items-center justify-center shadow-2xl shadow-[#00C875]/50 hover:scale-110 transition-transform z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 text-black" />
        </motion.button>
      )}
    </div>
  );
}
