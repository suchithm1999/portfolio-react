import { BiHome, BiSolidContact, BiLogoGmail } from "react-icons/bi";
import { PiUserCircleDuotone } from "react-icons/pi";
import { BsSpeedometer2, BsInstagram, BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { TbSettingsBolt } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSetActive = (to) => setActiveLink(to);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/M_Suchith.pdf";
    link.download = "M_Suchith.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: "home", icon: BiHome, label: "Home" },
    { id: "about", icon: PiUserCircleDuotone, label: "About" },
    { id: "skills", icon: TbSettingsBolt, label: "Skills" },
    { id: "work-experience", icon: BsSpeedometer2, label: "Experience" },
    { id: "projects", icon: FaProjectDiagram, label: "Projects" },
    { id: "education", icon: FaGraduationCap, label: "Education" },
    { id: "contacts", icon: BiSolidContact, label: "Contact" },
  ];

  const socialLinks = [
    { icon: AiFillLinkedin, url: "https://www.linkedin.com/in/suchith-m", label: "LinkedIn" },
    { icon: AiFillGithub, url: "https://github.com/suchithm1999", label: "GitHub" },
    { icon: BsInstagram, url: "https://www.instagram.com/suchithshetty_", label: "Instagram" },
    { icon: BiLogoGmail, url: "mailto:suchithm1999@gmail.com", label: "Email" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 right-4 z-50 lg:hidden p-2 rounded-md bg-white/80 dark:bg-slate-800/80 backdrop-blur text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Theme Toggle Button (Fixed Position for Visibility) */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-16 lg:right-8 z-50 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg hover:scale-110 transition-transform"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <BsFillSunFill className="text-yellow-400" /> : <BsFillMoonStarsFill className="text-indigo-600" />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 glass flex flex-col justify-between transition-transform duration-300 z-40 bg-white/90 dark:bg-slate-900/40
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Profile Header */}
        <div className="p-8 flex flex-col items-center border-b border-slate-200 dark:border-slate-800/50">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>
            <img
              src="/suchith_m.jpeg"
              alt="M Suchith"
              className="relative w-24 h-24 rounded-full object-cover border-2 border-white dark:border-slate-900 shadow-xl"
            />
          </div>
          <h2 className="mt-4 text-xl font-bold text-slate-800 dark:text-slate-100 tracking-wide">M Suchith</h2>
          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium uppercase tracking-wider mt-1">Senior Associate SDE</p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-20} // Adjusted for smooth landing
              duration={500}
              onSetActive={handleSetActive}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer group
                ${activeLink === item.id
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-500 dark:to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className={`text-lg transition-colors ${activeLink === item.id ? "text-white" : "group-hover:text-slate-600 dark:group-hover:text-slate-300"}`} />
              <span>{item.label}</span>
            </Link>
          ))}

          <button
            onClick={downloadResume}
            className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
          >
            <IoMdDownload className="text-lg" />
            Resume
          </button>
        </div>

        {/* Footer / Socials */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label={social.label}
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-500 dark:text-slate-600 mt-4 font-mono">
            © {new Date().getFullYear()} M Suchith
          </p>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
