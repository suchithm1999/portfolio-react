function Projects() {
  const projects = [
    {
      title: "Construction Site Work Monitor and Management Application",
      description: "A web-based application designed to monitor on-site work progress, manage resources, and provide real-time operational insights for construction projects.",
      technologies: ["ReactJS", "Redux", "Node.js", "Express.js", "MongoDB"],
      responsibilities: [
        "Developed a responsive, user-friendly frontend using ReactJS, enabling efficient tracking and visualization of site activities.",
        "Implemented Redux-based global state management, improving application responsiveness and reducing UI update latency by 25%.",
        "Designed and optimized MongoDB schemas to support high-volume operational data, achieving 30% faster query performance.",
        "Integrated the frontend with Node.js and Express.js REST APIs, enabling real-time data synchronization and accurate reporting across modules."
      ]
    }
  ];

  return (
    <div id="projects" className="min-h-screen flex items-center justify-center p-6 relative">
      {/* Decorative Background */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 md:p-10 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Visual / Icon Placeholder */}
                <div className="hidden lg:flex w-24 h-24 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 items-center justify-center shrink-0 border border-indigo-500/20">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-500/10 rounded-full border border-indigo-200 dark:border-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Key Contributions</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          <span className="text-indigo-500 mt-1.5 min-w-[6px] h-1.5 rounded-full bg-indigo-500" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
