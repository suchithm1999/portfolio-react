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
                <strong>Objective:</strong> Developed a comprehensive
                application to streamline monitoring and management of
                construction site activities, enhancing project tracking,
                resource allocation, and real-time data reporting.
              </li>
              <li className="mt-1">
                <strong>Key Contributions:</strong>
                <ul
                  style={{ listStyleType: "disc" }}
                  className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
                >
                  <li>
                    {`Led front-end development with ReactJS as part of a team of 2 front-end developers, collaborating with 2
back-end developers to ensure seamless integration with back-end services built in Node.js and Express.js.`}
                  </li>
                  <li>
                    {`Designed and implemented MongoDB-based data storage, resulting in a 30% improvement in data retrieval
speed.`}
                  </li>
                  <li>
                    {`Integrated Redux for state management, optimizing data flow and improving application performance by
25%.`}
                  </li>
                </ul>
              </li>
            </ol>
            <div className="border border-b-gray-300 p-2 my-1 border-x-0 border-t-0 max-lg:p-0"></div>
            <div className="text-2xl font-semibold mb-1 mt-4 text-left underline max-lg:text-base max-sm:text-sm max-lg:flex-col">
              Back Office Application for Construction Management
            </div>
            <ul
              style={{ listStyleType: "disc" }}
              className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
            >
              <li>
                {`Designed and developed a highly responsive, intuitive UI using Angular, improving operational efficiency
by 20% and streamlining internal processes.`}
              </li>
              <li>
                {`Optimized back-end data management with MongoDB, achieving a 25% increase in data synchronization
speed.`}
              </li>
              <li>
                {`Seamlessly integrated REST APIs, boosting real-time data synchronization performance by 40%, ensuring a
smoother user experience.`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
