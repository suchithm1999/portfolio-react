function AboutMe() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/M_Suchith.pdf";
    link.download = "M_Suchith.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about" className="min-h-screen flex items-center justify-center p-6 relative">
      {/* Decorative Background Element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Col: Title & Bio */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="section-title">About Me</h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full" />
          </div>

          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              I am a <span className="text-slate-900 dark:text-slate-200 font-semibold">Senior Associate Software Development Engineer</span> based in Bangalore, India.
              With over 2 years of hands-on experience, I specialize in building robust, scalable web applications.
            </p>
            <p>
              My expertise lies in the <span className="text-indigo-600 dark:text-indigo-400 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js) and
              <span className="text-indigo-600 dark:text-indigo-400 font-medium"> NestJS</span> for backend microservices. I have a strong background in distributed systems,
              utilizing Kafka for real-time data pipelines and optimizing APIs for high performance.
            </p>
            <p>
              I thrive in fast-paced Agile environments, consistently delivering maintainable code with high test coverage and automating workflows to improve release stability.
            </p>
          </div>

          <button
            onClick={downloadResume}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 dark:bg-slate-800 dark:bg-none dark:hover:bg-slate-700 text-white dark:text-white rounded-lg border border-transparent dark:border-slate-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
          >
            <span className="font-semibold">Download Resume</span>
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Right Col: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Stat Card 1 */}
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-4xl font-bold text-indigo-500 dark:text-indigo-400">2+</span>
            <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Experience</span>
          </div>

          {/* Stat Card 2 */}
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center space-y-2">
            <span className="text-4xl font-bold text-cyan-500 dark:text-cyan-400">5+</span>
            <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Projects Completed</span>
          </div>

          {/* Stat Card 3 */}
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center space-y-2 col-span-1 sm:col-span-2">
            <div className="text-xl font-semibold text-slate-800 dark:text-slate-200">Bangalore, India</div>
            <a href="mailto:suchithm1999@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
              suchithm1999@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
