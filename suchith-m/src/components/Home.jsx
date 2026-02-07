import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 transition-colors">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10 space-y-8">
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm animate-fade shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Open to Opportunities</span>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Hi, I'm <span className="text-gradient">M Suchith</span>
          </h1>
          <div className="h-20 md:h-24 flex items-center justify-center overflow-hidden">
            <span className="text-xl md:text-2xl lg:text-3xl font-mono text-slate-500 dark:text-slate-400">
              Senior Associate SDE
              <span className="animate-[blink_1s_infinite] text-indigo-500 font-bold ml-1">_</span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Building scalable, high-performance web applications with
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold mx-1">React</span>,
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold mx-1">NestJS</span>, and
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold mx-1">Microservices</span>.
          Focused on delivering robust code and efficient distributed systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="work-experience"
            smooth={true}
            offset={-50}
            duration={500}
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="contacts"
            smooth={true}
            offset={-50}
            duration={500}
            className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
