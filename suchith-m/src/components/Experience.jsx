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
                  {`Developed and maintained full-stack applications using MERN (ReactJS, Node.js, Express.js, MongoDB) and MEAN
(Angular, Node.js, Express.js, MongoDB) stacks.`}
                </li>
                <li>
                  {`Designed and optimized RESTful APIs for seamless integration with front-end components, reducing load times by
30%.`}
                </li>
                <li>
                  {`Translated Figma designs into responsive, pixel-perfect UIs for web and mobile applications.`}
                </li>
                <li>
                  {`Implemented state management using Redux and NgRx, improving user interaction efficiency by 25%.`}
                </li>
                <li>
                  {`Collaborated with back-end developers to create robust, secure, and scalable APIs.`}
                </li>
                <li>
                  {`Tested and debugged applications, leading to a 25% decrease in bug reports, and managed deployment processes on
Azure and mobile app stores.`}
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-b-gray-300 p-2 my-4 border-x-0 border-t-0 max-lg:p-0"></div>
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-5">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span className="">SURYA SOFTWARE PRIVATE LIMITED</span>
              <span>February 2022 - June 2022</span>
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
                  {`Developed cross-platform mobile applications using Ionic, ensuring seamless functionality on both Android and iOS.`}
                </li>
                <li>
                  {`Collaborated with senior developers to implement and test APIs for real-time data handling using MongoDB.`}
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
