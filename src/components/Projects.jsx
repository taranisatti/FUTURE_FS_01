import React from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: "Learnova Tracker",
      description: "A comprehensive study productivity application designed to help students track study sessions, monitor hourly progress, and manage learning milestones through detailed analytics.",
      tech: ["React.js", "Tailwind CSS", "LocalStorage", "Context API"],
      liveLink: "https://learnova-tracker.netlify.app/",
      accentColor: "cyanCustom",
      // Custom SVG productivity tracking dashboard mockup
      svgMockup: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <rect width="400" height="240" fill="#0B132B" />
          <rect x="15" y="15" width="370" height="210" rx="8" fill="#111827" stroke="#1F2937" strokeWidth="2" />
          {/* Header */}
          <rect x="25" y="25" width="80" height="12" rx="3" fill="#1F2937" />
          <circle cx="360" cy="31" r="5" fill="#EF4444" />
          <circle cx="372" cy="31" r="5" fill="#F59E0B" />
          <circle cx="384" cy="31" r="5" fill="#10B981" />
          {/* Timer Circle Panel */}
          <circle cx="100" cy="120" r="45" fill="none" stroke="#1F2937" strokeWidth="6" />
          <circle cx="100" cy="120" r="45" fill="none" stroke="#06B6D4" strokeWidth="6" strokeDasharray="210 100" className="animate-[spin_30s_linear_infinite]" style={{ transformOrigin: '100px 120px' }} />
          <text x="100" y="125" fill="#FFFFFF" fontFamily="monospace" fontSize="14" fontWeight="bold" textAnchor="middle">25:00</text>
          <text x="100" y="142" fill="#06B6D4" fontSize="8" fontWeight="semibold" textAnchor="middle">FOCUS</text>
          {/* Task rows */}
          <rect x="175" y="65" width="200" height="32" rx="6" fill="#1E293B" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="195" cy="81" r="8" fill="#06B6D4" fillOpacity="0.2" stroke="#06B6D4" strokeWidth="1.5" />
          <path d="M192 81L194.5 83.5L198.5 78" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="215" y="77" width="100" height="8" rx="2" fill="#FFFFFF" />
          
          <rect x="175" y="105" width="200" height="32" rx="6" fill="#1E293B" />
          <circle cx="195" cy="121" r="8" fill="none" stroke="#475569" strokeWidth="1.5" />
          <rect x="215" y="117" width="120" height="8" rx="2" fill="#475569" />

          <rect x="175" y="145" width="200" height="32" rx="6" fill="#1E293B" />
          <circle cx="195" cy="161" r="8" fill="none" stroke="#475569" strokeWidth="1.5" />
          <rect x="215" y="157" width="80" height="8" rx="2" fill="#475569" />

          {/* Productivity Stats */}
          <rect x="25" y="185" width="135" height="30" rx="6" fill="#1E293B" />
          <text x="35" y="204" fill="#06B6D4" fontSize="11" fontWeight="bold">Session: #4</text>
          <text x="150" y="204" fill="#10B981" fontSize="11" fontWeight="bold" textAnchor="end">85% Done</text>
        </svg>
      )
    },
    {
      title: "CareNow Assist",
      description: "A highly responsive and user-friendly portal designed for modern healthcare product support, providing structured medical scheduling, service listings, and rapid assistance routes.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Grid"],
      liveLink: "https://carenowassist.netlify.app/",
      accentColor: "indigoCustom",
      // Custom SVG healthcare scheduling interface mockup
      svgMockup: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <rect width="400" height="240" fill="#0B132B" />
          <rect x="15" y="15" width="370" height="210" rx="8" fill="#111827" stroke="#1F2937" strokeWidth="2" />
          {/* Header with logo */}
          <circle cx="40" cy="35" r="10" fill="#6366F1" />
          <path d="M40 29V41M34 35H46" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="58" y="29" width="70" height="12" rx="3" fill="#6366F1" />
          {/* Search bar */}
          <rect x="250" y="25" width="120" height="20" rx="10" fill="#1F2937" />
          <circle cx="262" cy="35" r="4" fill="none" stroke="#6366F1" strokeWidth="1.5" />
          {/* Heart rate monitor visual */}
          <rect x="25" y="65" width="350" height="55" rx="6" fill="#1E293B" stroke="#374151" strokeWidth="1" />
          <path d="M35 92.5H100L110 75L120 110L130 92.5H200L210 72L220 115L230 92.5H365" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
          <circle cx="210" cy="72" r="4" fill="#818CF8" />
          <circle cx="210" cy="72" r="8" stroke="#818CF8" strokeWidth="1" fill="none" className="animate-ping" style={{ transformOrigin: '210px 72px' }} />
          {/* Booking / Service grids */}
          <rect x="25" y="135" width="105" height="75" rx="6" fill="#1E293B" />
          <circle cx="77" cy="160" r="12" fill="#6366F1" fillOpacity="0.2" />
          <path d="M77 152V168M69 160H85" stroke="#6366F1" strokeWidth="2" />
          <text x="77" y="195" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Book Consultation</text>

          <rect x="145" y="135" width="105" height="75" rx="6" fill="#1E293B" />
          <circle cx="197" cy="160" r="12" fill="#10B981" fillOpacity="0.2" />
          <path d="M190 160L195 165L205 155" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <text x="197" y="195" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Find Medicine</text>

          <rect x="265" y="135" width="110" height="75" rx="6" fill="#1E293B" stroke="#E11D48" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="320" cy="160" r="12" fill="#E11D48" fillOpacity="0.2" />
          <path d="M315 155H325M312 165H328" stroke="#E11D48" strokeWidth="2" />
          <text x="320" y="195" fill="#EF4444" fontSize="9" fontWeight="bold" textAnchor="middle">Emergency Support</text>
        </svg>
      )
    },
    {
      title: "Airify",
      description: "An elegant, responsive product showcase website demonstrating aerodynamically advanced clean air purification appliances. Highlighted by sleek minimal animations and micro-interactions.",
      tech: ["React.js", "Tailwind CSS", "Smooth Animations"],
      liveLink: "https://airify.netlify.app/",
      accentColor: "cyanCustom",
      // Custom SVG product air-circulator showcase mockup
      svgMockup: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <rect width="400" height="240" fill="#0B132B" />
          <rect x="15" y="15" width="370" height="210" rx="8" fill="#111827" stroke="#1F2937" strokeWidth="2" />
          {/* Airify Brand Header */}
          <rect x="25" y="27" width="50" height="12" rx="3" fill="#06B6D4" />
          <line x1="150" y1="33" x2="250" y2="33" stroke="#1F2937" strokeWidth="1.5" />
          {/* Main Air Purifier Body Graphic */}
          <g transform="translate(160, 60)">
            <rect x="20" y="10" width="40" height="120" rx="20" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="40" cy="40" r="15" fill="#0B132B" stroke="#374151" strokeWidth="1.5" />
            <path d="M40 30L45 45H35L40 30Z" fill="#06B6D4" className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: '40px 40px' }} />
            {/* Ventilation Slots Grid */}
            <line x1="28" y1="70" x2="52" y2="70" stroke="#334155" strokeWidth="2" />
            <line x1="28" y1="80" x2="52" y2="80" stroke="#334155" strokeWidth="2" />
            <line x1="28" y1="90" x2="52" y2="90" stroke="#334155" strokeWidth="2" />
            <line x1="28" y1="100" x2="52" y2="100" stroke="#334155" strokeWidth="2" />
            <line x1="28" y1="110" x2="52" y2="110" stroke="#334155" strokeWidth="2" />
          </g>
          {/* Floating air purification rings */}
          <ellipse cx="200" cy="50" rx="40" ry="10" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeOpacity="0.8" className="animate-bounce" />
          <ellipse cx="200" cy="35" rx="30" ry="8" fill="none" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.5" className="animate-bounce" style={{ animationDelay: '200ms' }} />
          {/* UI Left description block */}
          <rect x="30" y="70" width="100" height="10" rx="2" fill="#FFFFFF" />
          <rect x="30" y="90" width="80" height="6" rx="2" fill="#475569" />
          <rect x="30" y="105" width="90" height="6" rx="2" fill="#475569" />
          <rect x="30" y="130" width="70" height="24" rx="12" fill="#06B6D4" />
          <text x="65" y="145" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Shop Now</text>
          {/* Info Right block */}
          <rect x="270" y="70" width="100" height="40" rx="6" fill="#1E293B" />
          <text x="280" y="85" fill="#06B6D4" fontSize="10" fontWeight="bold">Air Quality</text>
          <text x="280" y="102" fill="#10B981" fontSize="12" fontWeight="extrabold">98% PURE</text>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background Ambient glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyanCustom-500/5 blur-[90px] -z-10 animate-pulse-slow" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigoCustom-500/5 blur-[90px] -z-10 animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-cyanCustom-500 uppercase mb-3">
            Portfolio Showcase
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Implementations
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative"
            >
              {/* Graphic Mockup Panel */}
              <div className="relative aspect-[5/3] overflow-hidden border-b border-slate-800/60 bg-dark-900 group-hover:brightness-105 transition-all duration-300">
                {project.svgMockup}
                {/* Visual hovering element */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text & Content Panel */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                <div className="space-y-2.5">
                  {/* Category / Icon */}
                  <div className="flex items-center space-x-2">
                    <Layers className={`w-4 h-4 ${project.accentColor === "cyanCustom" ? "text-cyanCustom-400" : "text-indigoCustom-400"}`} />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                      Web Application
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyanCustom-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-slate-800/80 border border-slate-700/50 text-slate-300 group-hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r ${
                      project.accentColor === "cyanCustom"
                        ? "from-cyanCustom-500/20 to-cyanCustom-600/10 border border-cyanCustom-500/20 hover:border-cyanCustom-500/50"
                        : "from-indigoCustom-500/20 to-indigoCustom-600/10 border border-indigoCustom-500/20 hover:border-indigoCustom-500/50"
                    } hover:from-cyanCustom-500 hover:to-indigoCustom-500 hover:shadow-lg shadow-cyanCustom-500/5 transition-all duration-500`}
                  >
                    <span>Launch Live Site</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
