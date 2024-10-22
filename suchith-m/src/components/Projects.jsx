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
                <ol className="list-disc list-inside ml-6">
                  <li>
                    Led front-end development using ReactJS, Redux, TypeScript,
                    HTML, and CSS to build a responsive and user-friendly
                    interface.
                  </li>
                  <li>
                    Integrated REST APIs for real-time data synchronization,
                    reducing data fetch times by 40%.
                  </li>
                  <li>
                    Optimized user interaction efficiency by 25% through
                    effective state management using Redux.
                  </li>
                  <li>
                    Improved overall workflow by implementing features that
                    supported seamless communication and collaboration between
                    different project teams.
                  </li>
                </ol>
              </li>
            </ol>
            <div className="border border-b-gray-300 p-2 my-1 border-x-0 border-t-0 max-lg:p-0"></div>
            <div className="text-2xl font-semibold mb-1 mt-4 text-left underline max-lg:text-base max-sm:text-sm max-lg:flex-col">
              Back Office Application for Construction Management
            </div>
            <ol className="list-none text-lg font-normal list-inside max-lg:text-sm max-lg:flex-col max-sm:text-xs">
              <li>
                <strong>Objective:</strong> Created a back-office application to
                support administrative tasks and data management for the
                construction site monitoring application.
              </li>
              <li className="mt-1">
                <strong>Key Contributions:</strong>
                <ol className="list-disc list-inside ml-6">
                  <li>
                    Designed and developed the user interface using Angular,
                    ensuring a cohesive and efficient user experience.
                  </li>
                  <li>
                    Integrated REST APIs for seamless data management and
                    administrative functions, enhancing data consistency and
                    flow.
                  </li>
                  <li>
                    Improved user satisfaction by 25% by creating a highly
                    intuitive interface that simplified complex workflows.
                  </li>
                  <li>
                    Collaborated with back-end developers to ensure smooth
                    integration and synchronization between front-end components
                    and back-end systems.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
