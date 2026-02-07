function Experience() {
  const jobs = [
    {
      company: "NTT DATA, INC",
      role: "Senior Associate Software Development Engineer",
      duration: "March 2025 - Present",
      description: [
        "Built and scaled NestJS-based backend services with comprehensive unit and integration testing using Jest, reducing production defects by 35%.",
        "Designed and deployed a Kafka-based asynchronous consumer pipeline for data ingestion, automating data workflows and saving 10+ hours per week.",
        "Modernized legacy MongoDB Realm Function GraphQL services by migrating to Apollo Federation, improving schema governance and reducing post-release incidents by 25%.",
        "Partnered with DevOps teams to strengthen CI/CD pipelines, enabling zero-downtime deployments and improving overall release reliability."
      ]
    },
    {
      company: "SURYA DIGITECH PRIVATE LIMITED",
      role: "Software Development Engineer I",
      duration: "July 2022 - April 2024",
      description: [
        "Designed, built, and maintained full-stack applications using MERN and MEAN stacks, supporting 1000+ daily active users.",
        "Optimized RESTful APIs, reducing average response times by 30% (3s → 2.1s) and improving overall application performance.",
        "Delivered responsive, scalable UIs from Figma designs, ensuring consistent user experience across devices and browsers.",
        "Implemented Redux and RxJS–based state management, reducing UI interaction latency by 25% and improving data flow reliability."
      ]
    },
    {
      company: "SURYA SOFTWARE SYSTEMS PRIVATE LIMITED",
      role: "Software Development Engineer Internship",
      duration: "February 2022 - June 2022",
      description: [
        "Delivered cross-platform mobile apps using Ionic, accelerating feature delivery by 30% over native builds.",
        "Implemented and validated RESTful APIs supporting real-time workflows, reducing latency by 40%.",
        "Partnered with senior engineers to refine UI/UX interactions, improving usability metrics by 15% and reducing reported issues by 25%."
      ]
    }
  ];

  return (
    <div id="work-experience" className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="max-w-5xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="section-title">Work Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-800 md:hidden" />

          {jobs.map((job, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-50 dark:border-slate-950 shadow-[0_0_0_4px_rgba(99,102,241,0.2)] -translate-x-1/2 top-6 z-10" />

              {/* Date (Desktop only, opposite side) */}
              <div className={`hidden md:flex w-1/2 items-start pt-5 ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-wider">{job.duration}</span>
              </div>

              {/* Content Card */}
              <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                <div className="glass-card p-6 md:p-8 space-y-4 relative group hover:border-indigo-500/30">
                  {/* Arrow for Desktop */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 
                    bg-white dark:bg-slate-900 
                    border-l border-b border-slate-200 dark:border-slate-700/30 
                    rotate-45 group-hover:bg-white dark:group-hover:bg-slate-800/40 
                    group-hover:border-indigo-200 dark:group-hover:border-slate-600 
                    transition-colors duration-300
                    ${index % 2 === 0
                      ? '-right-2.5 border-r border-t border-l-0 border-b-0'
                      : '-left-2.5 border-l border-b'}
                  `} />

                  <div className="space-y-1">
                    <div className="md:hidden text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-2">{job.duration}</div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{job.role}</h3>
                    <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{job.company}</h4>
                  </div>

                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span className="text-indigo-500 mt-1.5 min-w-[6px] h-1.5 rounded-full bg-indigo-500" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
