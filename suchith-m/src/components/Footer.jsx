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
            <AiFillLinkedin
              tabIndex={0}
              onClick={openLinkedIn}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openLinkedIn();
                }
              }}
            />
            <AiFillGithub
              tabIndex={0}
              onClick={openGithub}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openGithub();
                }
              }}
            />
            <BsInstagram
              tabIndex={0}
              onClick={openInstagram}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openInstagram();
                }
              }}
            />
            <BiLogoGmail
              tabIndex={0}
              onClick={openGmail}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openGmail();
                }
              }}
            />
          </div>
          <span className="text-xs font-serif text-gray-600">
            Copyright © {new Date().getFullYear()} M Suchith
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
