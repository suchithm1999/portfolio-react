function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "Angular", "HTML5", "CSS3", "Sass", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "Express.js", "MongoDB", "REST APIs", "Kafka", "Microservices"]
    },
    {
      title: "Mobile",
      skills: ["Ionic", "Capacitor", "Cordova"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "GitLab", "CI/CD", "JIRA", "Agile (Scrum)", "Jest", "Postman"]
    }
  ];

  return (
    <div id="skills" className="min-h-screen flex items-center justify-center p-6 relative">
      {/* Decorative Background */}
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 space-y-6 hover:border-indigo-500/30 transition-colors">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 border-l-4 border-indigo-500 pl-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-600 dark:hover:text-indigo-200 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
