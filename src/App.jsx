import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 overflow-x-hidden">
      {/* Global Scroll-linked Accent Glow bubbles (Non-interactive) */}
      <div className="absolute top-[15%] left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyanCustom-500/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[45%] right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-indigoCustom-500/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[75%] left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyanCustom-500/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Nav Section */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
