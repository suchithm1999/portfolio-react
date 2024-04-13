import { BiHome } from "react-icons/bi";
import { PiUserCircleDuotone } from "react-icons/pi";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbSettingsBolt } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import "/src/App.css";
import { Link } from "react-scroll";
import { useState } from "react";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const downloadResume = () => {
    const fileUrl = "/Suchith M.pdf";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Suchith M.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/suchith-m", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/suchithshetty_", "_blank");
  };

  const openGmail = () => {
    const emailAddress = "suchithm1999@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/suchithm1999", "_blank");
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="p-5 flex justify-center flex-col items-center bg-map-image">
          <img
            src="/suchith_m.jpeg"
            className="w-36 h-36 rounded-full object-cover"
          />
          <span className="text-xl font-serif font-semibold text-600 pt-5">
            Suchith M
          </span>
          <div>
            <h1 className="animate-typing overflow-hidden pt-3 whitespace-nowrap border-r-4 border-r-black pr-0 text-sm text-gray-500 font-medium">
              {"I'm a Software Developer  !!!!"}
            </h1>
          </div>
        </div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "home" ? "active" : ""} flex p-4 pl-5 px-8 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <BiHome className="text-xl text-gray-600 font-extralight" />
          <span>Home</span>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "about" ? "active" : ""} flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <PiUserCircleDuotone className="text-xl text-gray-600 font-extralight" />
          <span>About</span>
        </Link>
        <Link
          to="work-experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "work-experience" ? "active" : ""} flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <BsSpeedometer2 className="text-xl text-gray-600 font-extralight" />
          <span>Work Experience</span>
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "skills" ? "active" : ""} flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <TbSettingsBolt className="text-xl text-gray-600 font-extralight" />
          <span>Skills</span>
        </Link>
        <div
          onClick={downloadResume}
          className="flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium"
        >
          <IoMdDownload className="text-xl text-gray-600 font-extralight" />
          <span>Download Resume</span>
        </div>
        <Link
          to="contacts"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "contacts" ? "active" : ""} flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <BiSolidContact className="text-xl text-gray-600 font-extralight" />
          <span>Contact</span>
        </Link>
        <div className="flex items-center justify-center flex-col gap-6 pt-10">
          <div className="flex gap-3 text-xl cursor-pointer">
            <AiFillLinkedin onClick={openLinkedIn} />
            <AiFillGithub onClick={openGithub} />
            <BsInstagram onClick={openInstagram} />
            <BiLogoGmail onClick={openGmail} />
          </div>
          <span className="text-xs font-serif text-gray-600">
            Copyright © 2024 Suchith M
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
