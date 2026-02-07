
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Footer from "./components/Footer"; // Footer is integrated into Sidebar or Contact now
import Home from "./components/Home";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-cyan-50 dark:bg-slate-950 dark:bg-none min-h-screen transition-colors duration-300">
      {/* Sidebar is fixed on the left */}
      <Sidebar />

      {/* Main Content Area - Pushed right by 16rem (Sidebar width) on LG screens */}
      <main className="lg:ml-64 relative min-h-screen text-slate-900 dark:text-slate-200">
        <Home />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
