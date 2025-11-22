function Projects() {
  return (
    <>
      <div
        id="projects"
        className="h-full w-full flex flex-col bg-mass-icon bg-no-repeat bg-cover items-center p-14 pt-12 m-8 mx-auto max-lg:p-0 "
      >
        <span className="text-4xl font-bold max-sm:text-xl max-lg:text-2xl">
          Projects
        </span>
        <div className="w-4/5">
          <div className="flex flex-col gap-2 justify-between mt-8 max-lg:mt-4">
            <div className="text-2xl font-semibold mb-1 text-left underline max-lg:text-base max-sm:text-sm max-lg:flex-col">
              Construction Site Work Monitor and Management Application
            </div>
            <ol className="list-none text-lg font-normal list-inside max-lg:text-sm max-lg:flex-col max-sm:text-xs">
              <li>
                <strong>Technologies:</strong> ReactJS, Redux, Node.js, Express.js, MongoDB
              </li>
              <li className="mt-1">
                <strong>Responsibilities:</strong>
                <ul
                  style={{ listStyleType: "disc" }}
                  className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
                >
                  <li>
                    {`Led frontend development and implemented Redux-based global state management, improving application responsiveness by 25%.`}
                  </li>
                  <li>
                    {`Designed optimized MongoDB schemas, achieving 30% faster query performance.`}
                  </li>
                </ul>
              </li>
            </ol>
            <div className="border border-b-gray-300 p-2 my-1 border-x-0 border-t-0 max-lg:p-0"></div>
            <div className="text-2xl font-semibold mb-1 mt-4 text-left underline max-lg:text-base max-sm:text-sm max-lg:flex-col">
              BACK OFFICE APPLICATION FOR CONSTRUCTION SITE MANAGEMENT APPLICATION
            </div>
            <ol className="list-none text-lg font-normal list-inside max-lg:text-sm max-lg:flex-col max-sm:text-xs">
              <li>
                <strong>Technologies:</strong> Angular, RxJs, Node.js, Express.js, MongoDB
              </li>
              <li className="mt-1">
                <strong>Responsibilities:</strong>
                <ul
                  style={{ listStyleType: "disc" }}
                  className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
                >
                  <li>
                    {`Developed responsive, scalable UI using Angular, improving operational efficiency by 20%.`}
                  </li>
                  <li>
                    {`Integrated RESTful APIs enabling real-time data sync, reducing data fetch times by 40%.`}
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
