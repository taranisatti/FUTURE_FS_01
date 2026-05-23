import React from 'react';
import { GraduationCap, Laptop, Rocket, Award, Calendar, BookOpen } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-cyanCustom-400" />,
      title: "Integrated M.Tech CSE",
      desc: "Developing strong computational logic, algorithms, and CS foundations at VIT-AP University, graduating in 2029."
    },
    {
      icon: <Laptop className="w-6 h-6 text-indigoCustom-400" />,
      title: "Full-Stack Web Dev",
      desc: "Eager about building clean interfaces, structuring modern layouts, and learning to deploy simple, functional web applications."
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyanCustom-400" />,
      title: "Aspiring Engineer",
      desc: "Motivated by hands-on code practice, exploring frameworks, and picking up industry workflows to bridge school and career."
    },
    {
      icon: <Award className="w-6 h-6 text-indigoCustom-400" />,
      title: "UI Design Interest",
      desc: "Delighted by responsive cards, accessibility, custom transitions, and visually engaging glassmorphic styling."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-full -translate-x-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyanCustom-500/5 blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-full translate-x-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigoCustom-500/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-cyanCustom-500 uppercase mb-3">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate Student & Aspiring Developer
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white">
              Hello! I'm Satti Tarani Sai Santhoshi.
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              I am an Integrated M.Tech student in Computer Science and Engineering at <strong>VIT-AP University</strong>, graduating in <strong>2029</strong>, with a strong interest in full-stack web development and modern UI design.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I enjoy building responsive, user-friendly, and visually appealing web applications while continuously improving my problem-solving and development skills. My projects focus on creating clean interfaces, smooth user experiences, and practical solutions using modern web technologies.
            </p>

            <p className="text-slate-400 leading-relaxed">
              As a learner and aspiring developer, I am always exploring new tools, improving my technical knowledge, and working on projects that help me grow as a developer.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-dark-800/40 border border-slate-800/60 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyanCustom-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Calendar className="w-5 h-5 text-cyanCustom-400 mb-2" />
                <span className="block text-2xl font-extrabold text-white">2029</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">M.Tech Graduation</span>
              </div>

              <div className="p-4 rounded-2xl bg-dark-800/40 border border-slate-800/60 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigoCustom-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BookOpen className="w-5 h-5 text-indigoCustom-400 mb-2" />
                <span className="block text-2xl font-extrabold text-white">CSE</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Major Specialization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col items-start text-left space-y-3 group transform hover:-translate-y-1 duration-300"
              >
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 group-hover:border-cyanCustom-500/30 transition-all duration-300">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyanCustom-400 transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
