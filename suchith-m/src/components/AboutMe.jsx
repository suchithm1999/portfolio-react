function AboutMe() {
  const downloadResume = () => {
    const fileUrl = "/M Suchith.pdf";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "M Suchith.pdf";
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
        className="p-10 h-full m-auto mb-0 w-4/5 flex gap-12 items-center justify-center my-20 max-lg:m-0 max-lg:gap-0.5 max-lg:w-full max-lg:p-0 max-lg:flex-col max-lg:mt-5"
      >
        <div className="w-1/2 h-full m-auto">
          <img src="/AboutMe_profile.svg" />
        </div>
        <div className="w-1/2 max-lg:w-5/6 m-auto h-full flex flex-col gap-4 max-sm:w-full max-lg:gap-1 max-lg:px-4 max-lg:text-center">
          <span className="text-4xl font-bold max-sm:text-xl max-lg:text-2xl max-lg:mt-5">
            About Me
          </span>
          <span className="text-xl font-medium text-gray-500 max-sm:text-sm">{`I'm a Senior Associate Software Development Engineer`}</span>
          <span className="text-sm font-normal text-gray-500 max-lg:text-gray-700 leading-6 max-sm:text-xs max-lg:text-justify">{`Skilled Senior Associate Software Development Engineer with over 2 years of experience specializing in MERN and MEAN
stacks. Proficient in developing scalable, secure, and efficient applications using ReactJS, Angular, Node.js, Express.js,
and MongoDB. Experienced in building RESTful APIs and integrating them with front-end components for seamless data
synchronization. Passionate about delivering high-performance applications with a strong foundation in Agile
methodologies and cross-team collaboration. Experienced in both web and mobile development.`}</span>
          <div className="border border-b-gray-300 p-2 border-x-0 border-t-0"></div>
          <div className="flex justify-between">
            <div className="text-sm flex flex-col m-3 max-lg:mx-0 gap-4 max-sm:text-xs max-lg:gap-2">
              <div className="flex gap-2">
                <span className="font-semibold">Name:</span>
                <span className="text-gray-500 whitespace-nowrap font-medium">
                  M Suchith
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Age:</span>
                <span className="text-gray-500 font-medium">24</span>
              </div>
            </div>
            <div className="text-sm flex flex-col m-3 max-lg:mx-0 gap-4 max-sm:text-xs max-lg:gap-2">
              <div className="flex gap-2">
                <span className="font-semibold">Email:</span>
                <a
                  onClick={openGmail}
                  href="mailto:suchithm1999@gmail.com"
                  className="text-blue-500 cursor-pointer underline font-medium"
                >
                  suchithm1999@gmail.com
                </a>
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
            className="bg-blue-700 p-2.5 mt-2 px-5 active:bg-blue-500 text-white rounded-full font-medium w-max max-sm:text-xs max-sm:px-3"
          >
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
