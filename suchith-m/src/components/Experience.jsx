function Experience() {
  return (
    <>
      <div
        id="work-experience"
        className="h-full w-full flex flex-col bg-map-image bg-no-repeat bg-cover items-center p-14 pt-12 m-8 mx-auto max-lg:p-0 "
      >
        <span className="text-4xl font-bold max-lg:text-xl">
          Work Experience
        </span>
        <div className="w-4/5">
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-4">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span>SURYA DIGITECH PRIVATE LIMITED</span>
              <span>July 2022 - Present</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Software Development Engineer 1
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm"
              >
                <li>
                  {`Developed a web application using Angular with TypeScript, concurrently creating Android and iOS
                  applications with Ionic for native development.`}
                </li>
                <li>
                  {`Managed front-end deployment and facilitated upload to Play
                  Store and App Store Connect.`}
                </li>
                <li>
                  {`Collaborated in an Agile-Scrum
                  environment, gathering requirements and assisting in sprint
                  planning`}
                </li>
                <li>
                  {`Translated Figma designs into responsive user interfaces
                  (UI) for the application.`}
                </li>
                <li>
                  {`Integrated server-side components for
                  enhanced functionality.`}
                </li>
              </ul>
            </div>
            <span className="text-lg w-full font-bold text-gray-700 mt-2 max-lg:text-sm">
              Additional Projects:
            </span>
            <div className="w-full">
              <div>
                <ul
                  style={{ listStyleType: "disc" }}
                  className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm"
                >
                  <li>
                    <span className="font-bold">Back Office Tool : </span>
                    Designed and implemented a comprehensive internal tool for
                    user profile maintenance, focusing on React, Redux,
                    JavaScript, TypeScript, and Tailwind CSS.
                  </li>
                  <li>
                    <span className="font-bold">
                      Employee Time Tracking Tool :{" "}
                    </span>
                    Led development of an internal tool to monitor employee work
                    hours, emphasizing Angular, Ionic, Capacitor, and Tailwind
                    CSS.
                  </li>
                </ul>
              </div>
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
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm"
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
