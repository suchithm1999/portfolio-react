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
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-5">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span className="">NTT DATA, INC</span>
              <span>March 2025 - Present</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Senior Associate Software Development Engineer
            </span>
          </div>
          <div className="border border-b-gray-300 p-2 my-4 border-x-0 border-t-0 max-lg:p-0"></div>
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
                  {`Developed and maintained two full-stack applications using MERN (ReactJS, Node.js, Express.js,
MongoDB) and MEAN (Angular, Node.js, Express.js, MongoDB) stacks, serving 100+ users daily.`}
                </li>
                <li>
                  {`Optimized RESTful APIs, reducing average load times by 30% (from 3 seconds to 2.1 seconds), enhancing
application performance.`}
                </li>
                <li>
                  {`Converted Figma designs into responsive UIs with 99% pixel accuracy, ensuring a seamless user experience
across both web and mobile platforms.`}
                </li>
                <li>
                  {`Implemented state management using Redux and RxJs, increasing application efficiency and reducing
interaction latency by 25%.`}
                </li>
                <li>
                  {`Conducted debugging efforts, leading to a 25% reduction in bug reports, ensuring consistent application
stability.`}
                </li>
                <li>
                  {`Deployed both applications to a secure server, ensuring high performance, robust security, and compliance
with industry standards.`}
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-b-gray-300 p-2 my-4 border-x-0 border-t-0 max-lg:p-0"></div>
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-5">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span className="">SURYA SOFTWARE SYSTEMS PRIVATE LIMITED</span>
              <span>February 2022 - June 2022</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Software Development Engineer Intern
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Developed cross-platform mobile applications using Ionic, ensuring seamless functionality on both Android
and iOS, leading to a 30% reduction in development time compared to separate native builds.`}
                </li>
                <li>
                  {`Implemented and tested APIs for real-time data handling, improving response consistency and reliability,
resulting in a 40% decrease in latency and a 20% increase in user satisfaction.`}
                </li>
                <li>
                  {`Collaborated with senior developers to refine app workflows and enhance user experiences, contributing to
a 15% improvement in app usability scores and 25% reduction in user-reported issues.`}
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
