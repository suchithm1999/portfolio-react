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
                <strong>Objective:</strong> Developed an application to monitor
                and manage construction site activities, ensuring efficient
                project tracking and resource management.
              </li>
              <li className="mt-1">
                <strong>Responsibilities:</strong> Led front-end development
                using ReactJS, Redux, TypeScript, HTML, and CSS.
              </li>
              <li className="mt-1">
                <strong>Key Contributions:</strong>
                <ol className="list-disc list-inside ml-6">
                  <li>Created a responsive and user-friendly interface.</li>
                  <li>
                    Integrated REST APIs for real-time data synchronization and
                    reporting.
                  </li>
                  <li>Implemented Redux for state management.</li>
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
                <strong>Responsibilities:</strong> Developed the user interface
                with Angular.
              </li>
              <li className="mt-1">
                <strong>Key Contributions:</strong>
                <ol className="list-disc list-inside ml-6">
                  <li>Ensured a cohesive and efficient user experience.</li>
                  <li>
                    Integrated REST APIs for seamless data management and
                    administrative functions.
                  </li>
                  <li>
                    Collaborated with back-end developers to ensure smooth data
                    flow and consistency.
                  </li>
                </ol>
              </li>
            </ol>
            <div className="border border-b-gray-300 p-2 my-1 border-x-0 border-t-0 max-lg:p-0"></div>
            <div className="text-2xl font-semibold mb-1 mt-4 text-left underline max-lg:text-base max-sm:text-sm max-lg:flex-col">
              Employee Time Tracking Application
            </div>
            <ol className="list-none text-lg font-normal list-inside max-lg:text-sm max-lg:flex-col max-sm:text-xs">
              <li>
                <strong>Objective:</strong> Built an application to track
                employee work hours, ensuring accurate payroll processing and
                productivity analysis.
              </li>
              <li className="mt-1">
                <strong>Responsibilities:</strong> Developed the mobile
                application using Ionic, Capacitor, Angular, TypeScript, and
                Git.
              </li>
              <li className="mt-1">
                <strong>Key Contributions:</strong>
                <ol className="list-disc list-inside ml-6">
                  <li>Ensured cross-platform compatibility.</li>
                  <li>
                    Implemented features for time logging, reporting, and
                    management approvals.
                  </li>
                  <li>
                    Participated in Agile ceremonies to enhance team
                    collaboration and productivity.
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
