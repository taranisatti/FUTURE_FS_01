import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

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
    <footer className="relative bg-[#070A13] border-t border-slate-900/80 py-12 overflow-hidden">
      {/* Absolute ambient lights */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-cyanCustom-500/10 blur-[50px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top visual divider row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full pb-8 border-b border-slate-900/60 gap-6">
          {/* Brand */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={scrollToTop}>
            <div className="p-1.5 bg-slate-800/40 rounded-lg border border-slate-800 group-hover:border-cyanCustom-500/30 transition-colors duration-300">
              <Code2 className="w-5 h-5 text-cyanCustom-400" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Tarani<span className="text-cyanCustom-400">.</span>
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/taranisatti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800/70 text-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/tarani-sai-santhoshi-satti-84920b356" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800/70 text-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:taranisatti@gmail.com"
              className="p-2 rounded-lg bg-slate-800/20 hover:bg-slate-800/70 text-slate-500 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row: copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left leading-relaxed">
            &copy; {currentYear} Satti Tarani Sai Santhoshi. All rights reserved. <br className="sm:hidden" />
            <span className="hidden sm:inline">|</span> Integrated M.Tech CSE student at VIT-AP University (Class of 2029).
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-900 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-750 text-slate-500 hover:text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="text-xs font-semibold uppercase tracking-wider">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
