function AboutMe() {
  const downloadResume = () => {
    const fileUrl = "/Suchith M.pdf";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Suchith M.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openGmail = () => {
    const emailAddress = "suchithm1999@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <>
      <div
        id="about"
        className="p-10 m-auto w-4/5 flex gap-16 items-center justify-center my-20"
      >
        <div className="w-1/2 h-full m-auto">
          <img src="/AboutMe_profile.svg" />
        </div>
        <div className="w-1/2 m-auto h-full flex flex-col gap-4">
          <span className="text-4xl font-bold">About Me</span>
          <span className="text-xl font-medium text-gray-500">{`I'm a Software Development Engineer`}</span>
          <span className="text-sm font-normal text-gray-500 leading-6">{`Software Development Engineer with a strong background in web development, specializing in Angular, React,
            and TypeScript. Proven expertise in Ionic native development for mobile applications on both Android and iOS
            platforms. Solid foundation in front-end technologies, including HTML, CSS, and JavaScript. Skilled in state
            management using Redux, Redux Toolkit, and React Hooks.`}</span>
          <div className="border border-b-gray-300 p-2 border-x-0 border-t-0"></div>
          <div className="flex justify-between">
            <div className="text-sm flex flex-col m-3 gap-4">
              <div className="flex gap-2">
                <span className="font-semibold">Name:</span>
                <span className="text-gray-500 font-medium">Suchith M</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Age:</span>
                <span className="text-gray-500 font-medium">24</span>
              </div>
            </div>
            <div className="text-sm flex flex-col m-3 gap-4">
              <div className="flex gap-2">
                <span className="font-semibold">Email:</span>
                <span
                  onClick={openGmail}
                  className="text-blue-500 cursor-pointer underline font-medium"
                >
                  suchithm1999@gmail.com
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">From:</span>
                <span className="text-gray-500 font-medium">
                  Bengaluru, Karnataka, India
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={downloadResume}
            className="bg-blue-700 p-2.5 mt-2 px-5 active:bg-blue-500 text-white rounded-full font-medium w-max"
          >
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
