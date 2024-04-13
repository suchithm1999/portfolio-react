import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

function Footer() {
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
    <div className="mb-5">
      <div className="border border-b-gray-300 p-2 border-x-0 border-t-0"></div>
      <div className="w-full bg-gray-50 h-32">
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
    </div>
  );
}

export default Footer;
