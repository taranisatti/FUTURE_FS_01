import React from 'react';
import { ArrowUpRight, Mail, FileText, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0F19]"
    >
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyanCustom-500/10 blur-[80px] sm:blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-indigoCustom-500/10 blur-[80px] sm:blur-[120px] -z-10 animate-glow-pulse" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(circle,#000_40%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title & Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Title Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyanCustom-500/10 border border-cyanCustom-500/20 backdrop-blur-sm animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyanCustom-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyanCustom-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyanCustom-400">
                Available for projects
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hey, I'm <br />
              <span className="text-glow-gradient block mt-1 hover:brightness-110 transition-all duration-300">
                Satti Tarani Sai Santhoshi
              </span>
            </h1>

            {/* Subheading / Role */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-200">
              Passionate <span className="text-cyanCustom-400">Full Stack Developer</span>
            </h2>

            {/* Intro Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Currently pursuing an Integrated M.Tech in Computer Science and Engineering at <strong>VIT-AP University</strong>, graduating in 2029. I enjoy building responsive, user-friendly, and visually appealing web applications.
            </p>

            {/* Actions / CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 hover:from-cyanCustom-600 hover:to-indigoCustom-600 text-white shadow-lg shadow-cyanCustom-500/15 hover:shadow-cyanCustom-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/60 hover:bg-slate-800/90 text-white border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact Me
              </button>

              <div className="relative group/resume">
                <button
                  onClick={() => alert('Resume download will be active once CV is provided! Currently hooked up to placeholder.')}
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-transparent hover:bg-slate-800/30 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4 text-indigoCustom-400" />
                  <span>Resume</span>
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded opacity-0 group-hover/resume:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-700">
                  Placeholder CV
                </div>
              </div>
            </div>

            {/* Quick Contact & Socials */}
            <div className="flex items-center space-x-6 pt-6 border-t border-slate-800/60 w-full max-w-sm">
              <a 
                href="https://github.com/taranisatti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 hover:shadow-md hover:shadow-cyanCustom-500/5 flex items-center justify-center"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/tarani-sai-santhoshi-satti-84920b356" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 hover:shadow-md hover:shadow-cyanCustom-500/5 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="mailto:taranisatti@gmail.com"
                className="p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 hover:shadow-md hover:shadow-cyanCustom-500/5"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Art Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient behind-art Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyanCustom-500/10 to-indigoCustom-500/10 rounded-full filter blur-3xl opacity-60 animate-pulse-slow" />
            
            {/* Main Interactive Geometric SVG */}
            <div className="relative w-full max-w-[420px] aspect-square animate-float-slow">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                {/* Circular track */}
                <circle cx="250" cy="250" r="180" stroke="url(#circle-gradient)" strokeWidth="1.5" strokeDasharray="8 8" className="animate-[spin_40s_linear_infinite]" />
                <circle cx="250" cy="250" r="140" stroke="url(#circle-gradient-inner)" strokeWidth="1" strokeDasharray="30 10" className="animate-[spin_20s_linear_infinite_reverse]" />
                
                {/* Outer glowing orbital nodes */}
                <circle cx="160" cy="90" r="8" fill="#22D3EE" className="animate-pulse" />
                <circle cx="340" cy="410" r="6" fill="#818CF8" className="animate-pulse" />
                
                {/* Hexagonal central card */}
                <g filter="url(#hex-shadow)">
                  <polygon points="250,110 370,180 370,320 250,390 130,320 130,180" fill="#0B132B" fillOpacity="0.85" stroke="url(#hex-gradient)" strokeWidth="2" />
                </g>

                {/* Inner code elements visual mockup */}
                {/* Simulated Tags */}
                <text x="180" y="190" fill="#22D3EE" fontFamily="monospace" fontSize="13" fontWeight="bold">&lt;dev&gt;</text>
                <text x="180" y="325" fill="#22D3EE" fontFamily="monospace" fontSize="13" fontWeight="bold">&lt;/dev&gt;</text>
                
                {/* Skill Nodes lines visual mapping */}
                <line x1="250" y1="180" x2="250" y2="300" stroke="#334155" strokeWidth="1.5" />
                <line x1="170" y1="240" x2="330" y2="240" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2" />

                {/* Code rows */}
                <rect x="180" y="215" width="140" height="6" rx="3" fill="url(#row-gradient-1)" />
                <rect x="180" y="235" width="100" height="6" rx="3" fill="url(#row-gradient-2)" className="animate-[pulse_2s_infinite_1s]" />
                <rect x="180" y="255" width="125" height="6" rx="3" fill="url(#row-gradient-1)" />
                <rect x="180" y="275" width="70" height="6" rx="3" fill="url(#row-gradient-3)" className="animate-[pulse_3s_infinite]" />
                <rect x="180" y="295" width="110" height="6" rx="3" fill="url(#row-gradient-2)" />

                {/* Ambient glowing code cursor */}
                <circle cx="260" cy="278" r="4" fill="#06B6D4" className="animate-ping" />
                <circle cx="260" cy="278" r="3" fill="#06B6D4" />

                {/* Floating tags surrounding the hexagon */}
                <g transform="translate(70, 160)" className="animate-float-slow">
                  <rect width="60" height="24" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x="30" y="16" fill="#94A3B8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">React.js</text>
                </g>
                <g transform="translate(360, 200)" className="animate-float-medium">
                  <rect width="70" height="24" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x="35" y="16" fill="#94A3B8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">JavaScript</text>
                </g>
                <g transform="translate(320, 100)" className="animate-float-slow animation-delay-1000">
                  <rect width="70" height="24" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x="35" y="16" fill="#94A3B8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">M.Tech CSE</text>
                </g>
                <g transform="translate(100, 310)" className="animate-float-medium animation-delay-500">
                  <rect width="60" height="24" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x="30" y="16" fill="#94A3B8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Tailwind</text>
                </g>

                {/* Definitions */}
                <defs>
                  <linearGradient id="circle-gradient" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0B0F19" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="circle-gradient-inner" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="hex-gradient" x1="130" y1="250" x2="370" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <linearGradient id="row-gradient-1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="row-gradient-2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0F172A" />
                    <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="row-gradient-3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0F172A" />
                    <stop offset="40%" stopColor="#6366F1" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>
                  <filter id="hex-shadow" x="110" y="90" width="280" height="320" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#06B6D4" floodOpacity="0.25" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group" onClick={() => scrollToSection('about')}>
          <span className="text-xs font-semibold tracking-widest text-slate-500 group-hover:text-cyanCustom-400 uppercase transition-colors duration-300 mb-2">
            Scroll down
          </span>
          <div className="p-1 rounded-full border border-slate-800 group-hover:border-cyanCustom-500/50 transition-colors duration-300">
            <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-cyanCustom-400 group-hover:translate-y-0.5 transition-all duration-300 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
