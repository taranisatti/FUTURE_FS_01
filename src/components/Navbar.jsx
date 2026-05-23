import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Track scrolling to adjust navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-lg border-b border-slate-800/40 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative p-2 bg-slate-800/50 rounded-lg border border-slate-700/30 group-hover:border-cyanCustom-500/50 transition-colors duration-300">
              <Code2 className="w-6 h-6 text-cyanCustom-400 group-hover:text-indigoCustom-400 transition-colors duration-300" />
              <span className="absolute -inset-1 bg-cyanCustom-500/20 blur rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Tarani<span className="text-cyanCustom-400">.</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 nav-underline py-1 ${
                  activeSection === link.id
                    ? 'text-cyanCustom-400 active'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 hover:from-cyanCustom-600 hover:to-indigoCustom-600 shadow-md shadow-cyanCustom-500/10 hover:shadow-cyanCustom-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-dark-900/95 backdrop-blur-xl border-l border-slate-800/50 shadow-2xl p-6 transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold tracking-tight text-white">
            Tarani<span className="text-cyanCustom-400">.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-5">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-left text-lg font-medium py-2 px-4 rounded-xl transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-cyanCustom-400 bg-cyanCustom-500/10 border-l-4 border-cyanCustom-500'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/20'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 px-6 py-3.5 rounded-xl text-center text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 hover:from-cyanCustom-600 hover:to-indigoCustom-600 shadow-lg shadow-cyanCustom-500/10 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
      
      {/* Background overlay when mobile drawer is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
