function Experience() {
  return (
    <>
      <div
        id="work-experience"
        className="h-full w-full flex flex-col bg-map-image bg-no-repeat bg-cover items-center p-14 pt-12 m-8 mx-auto max-lg:p-0 "
      >
        <span className="text-4xl max-lg:text-2xl font-bold max-sm:text-xl">
          Work Experience
        </span>
        <div className="w-4/5">
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-4">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span>SURYA DIGITECH PRIVATE LIMITED</span>
              <span>July 2022 - April 2024</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Software Development Engineer 1
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Designed and developed user interfaces using Angular, ReactJS, HTML, CSS, TypeScript, and JavaScript.`}
                </li>
                <li>
                  {`Translated Figma designs into responsive user interfaces (UI) for applications.`}
                </li>
                <li>
                  {`Integrated front-end components with REST APIs to fetch and display data.`}
                </li>
                <li>
                  {`Collaborated with back-end developers to create a seamless user experience.`}
                </li>
                <li>
                  {`Optimized applications for performance and scalability.`}
                </li>
                <li>
                  {`Wrote clean, maintainable, and well-documented code.`}
                </li>
                <li>{`Tested and debugged applications to ensure quality.`}</li>
                <li>
                  {`Managed front-end deployment and facilitated uploads to the Play Store and App Store Connect.`}
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-b-gray-300 p-2 my-4 border-x-0 border-t-0 max-lg:p-0"></div>
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-5">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span className="">SURYA SOFTWARE PRIVATE LIMITED</span>
              <span>March 2022 - June 2022</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Software Development Engineer (Internship)
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Developed a web application using Angular and Typescript.`}
                </li>
                <li>
                  {`Simultaneously, created Android and iOS applications within the same project using Ionic for native
                    development.`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
