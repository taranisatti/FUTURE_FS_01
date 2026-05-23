import React from 'react';

const Skills = () => {
  const skillList = [
    {
      name: "HTML",
      category: "Frontend",
      glowColor: "group-hover:shadow-orange-500/10",
      description: "Creating structured, accessible, and semantic web layouts.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M15 10L22.1 82.5L50 90L77.9 82.5L85 10H15Z" fill="#e34f26" />
          <path d="M50 17V82.8L71.4 77L77 21H50V17Z" fill="#f06529" />
          <path d="M50 36.8H34.8L33.7 26H50V17H23.5L26.6 57.5H50V48.5H35.8L35 36.8H50V36.8Z" fill="#ebebeb" />
          <path d="M50 36.8H65.2L64.2 48.5H50V57.5H63.3L62.1 71.3L50 74.8V82.8L71.4 77L73.1 57.5H50V36.8Z" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: "CSS",
      category: "Frontend",
      glowColor: "group-hover:shadow-blue-500/10",
      description: "Styling responsive page layouts with Flexbox, Grid, and custom transitions.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M15 10L22.1 82.5L50 90L77.9 82.5L85 10H15Z" fill="#1572b6" />
          <path d="M50 17V82.8L71.4 77L77 21H50V17Z" fill="#33a9dc" />
          <path d="M50 36.8H34.8L33.7 26H50V17H23.5L26.6 57.5H50V48.5H35.8L35 36.8H50V36.8Z" fill="#ebebeb" opacity="0.9" />
          <path d="M50 36.8H65.2L64.2 48.5H50V57.5H63.3L62.1 71.3L50 74.8V82.8L71.4 77L73.1 57.5H50V36.8Z" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: "JavaScript",
      category: "Frontend",
      glowColor: "group-hover:shadow-yellow-500/10",
      description: "Adding interactive features, managing standard algorithms, and fetching dynamic APIs.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect width="80" height="80" x="10" y="10" rx="8" fill="#f7df1e" />
          <text x="75" y="80" fill="#000000" fontFamily="sans-serif" fontWeight="900" fontSize="38" textAnchor="end">JS</text>
        </svg>
      )
    },
    {
      name: "React.js",
      category: "Frontend",
      glowColor: "group-hover:shadow-cyan-500/10",
      description: "Building component-based user interfaces and managing state logic.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="8" fill="#00d8ff" />
          <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#00d8ff" strokeWidth="3" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#00d8ff" strokeWidth="3" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#00d8ff" strokeWidth="3" transform="rotate(120 50 50)" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      glowColor: "group-hover:shadow-cyan-400/10",
      description: "Crafting beautiful interfaces quickly using utility-first styling classes.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M25 50C25 38 35 38 40 30C45 22 40 10 25 10C10 10 5 22 10 30C15 38 25 38 25 50Z" fill="#38bdf8" />
          <path d="M50 70C50 58 60 58 65 50C70 42 65 30 50 30C35 30 30 42 35 50C40 58 50 58 50 70Z" fill="#38bdf8" opacity="0.8" />
        </svg>
      )
    },
    {
      name: "Python",
      category: "General & Data",
      glowColor: "group-hover:shadow-blue-500/10",
      description: "Writing automation scripts, algorithms, and general computational logic.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M50 10C27.9 10 28 22 28 22L28.1 34L50 34.1L50 37.1L19.4 37C19.4 37 10 37 10 59.2C10 81.3 22 81.3 22 81.3L34.1 81.2L34.1 65C34.1 53 45.9 53 45.9 53L62.2 53.1C62.2 53.1 81.3 53.1 81.3 34.1C81.3 15 68.3 10 50 10Z" fill="#3776ab" />
          <path d="M50 90C72.1 90 72 78 72 78L71.9 66L50 65.9L50 62.9L80.6 63C80.6 63 90 63 90 40.8C90 18.7 78 18.7 78 18.7L65.9 18.8L65.9 35C65.9 47 54.1 47 54.1 47L37.8 46.9C37.8 46.9 18.7 46.9 18.7 65.9C18.7 85 31.7 90 50 90Z" fill="#ffd343" />
          <circle cx="39" cy="22" r="3.5" fill="#ffffff" />
          <circle cx="61" cy="78" r="3.5" fill="#000000" opacity="0.3" />
        </svg>
      )
    },
    {
      name: "Java",
      category: "General & Data",
      glowColor: "group-hover:shadow-amber-500/10",
      description: "Practicing object-oriented programming concepts and algorithm engineering.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M30 35H70C70 35 70 65 50 65C30 65 30 35 30 35Z" fill="#5382a1" />
          <path d="M70 40H76C80 40 82 43 82 47C82 51 80 54 76 54H70" fill="none" stroke="#5382a1" strokeWidth="4" strokeLinecap="round" />
          <path d="M20 70H80" stroke="#f89820" strokeWidth="4" strokeLinecap="round" />
          <path d="M42 28Q45 22 42 16" fill="none" stroke="#f89820" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 28Q53 22 50 16" fill="none" stroke="#f89820" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M58 28Q61 22 58 16" fill="none" stroke="#f89820" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "SQL",
      category: "General & Data",
      glowColor: "group-hover:shadow-indigo-500/10",
      description: "Understanding relational databases, writing queries, and designing tables.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <ellipse cx="50" cy="25" rx="35" ry="14" fill="#0064a5" />
          <path d="M15 25V42C15 48.7 30.7 54 50 54C69.3 54 85 48.7 85 42V25" fill="#0075c2" />
          <ellipse cx="50" cy="25" rx="35" ry="14" fill="#0075c2" stroke="#005b99" strokeWidth="1" />
          <path d="M15 42V59C15 65.7 30.7 71 50 71C69.3 71 85 65.7 85 59V42" fill="#0084db" />
          <ellipse cx="50" cy="42" rx="35" ry="14" fill="#0084db" stroke="#0064a5" strokeWidth="1" />
          <ellipse cx="50" cy="59" rx="35" ry="14" fill="#0091f2" stroke="#0075c2" strokeWidth="1" />
        </svg>
      )
    },
    {
      name: "Git & GitHub",
      category: "Collaboration",
      glowColor: "group-hover:shadow-red-500/10",
      description: "Using version control to track project files and publish repositories.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M50 10C27.9 10 10 27.9 10 50C10 67.7 21.5 82.7 37.4 88C39.4 88.4 40.1 87.1 40.1 86.1C40.1 85.1 40.1 82.6 40.1 79.8C29 82.2 26.6 74.5 26.6 74.5C24.8 69.9 22.2 68.7 22.2 68.7C18.6 66.2 22.5 66.3 22.5 66.3C26.5 66.6 28.6 70.4 28.6 70.4C32.2 76.5 38 74.8 40.3 73.7C40.7 71.1 41.7 69.3 42.8 68.3C34 67.3 24.7 63.9 24.7 48.7C24.7 44.4 26.2 40.8 28.8 38C28.4 37 27 33 29.2 27.5C29.2 27.5 32.5 26.4 40.1 31.6C43.2 30.7 46.6 30.3 50 30.3C53.4 30.3 56.8 30.7 59.9 31.6C67.5 26.4 70.8 27.5 70.8 27.5C73 33 71.6 37 71.2 38C73.8 40.8 75.3 44.4 75.3 48.7C75.3 64 65.9 67.3 57.1 68.3C58.5 69.5 59.8 71.9 59.8 75.6C59.8 80.9 59.8 85.2 59.8 86.2C59.8 87.2 60.5 88.5 62.5 88.1C78.4 82.7 90 67.7 90 50C90 27.9 72.1 10 50 10Z" fill="#f05032" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyanCustom-500/5 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-cyanCustom-500 uppercase mb-3">
            My Toolbox
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Skills
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between text-left space-y-4 hover:-translate-y-1 transition-all duration-300 ${skill.glowColor}`}
            >
              {/* Icon and Category Tag */}
              <div className="flex justify-between items-center">
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/30 group-hover:border-slate-600/50 group-hover:bg-slate-800/80 transition-all duration-300">
                  {skill.svg}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                  {skill.category}
                </span>
              </div>

              {/* Name & Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-cyanCustom-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
