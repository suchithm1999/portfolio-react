function Skills() {
  return (
    <>
      <div
        id="skills"
        className="h-full w-4/5 flex flex-col bg-mass-icon items-center bg-contain bg-repeat p-10 max-lg:p-0 pt-12 m-8 mt-4 mb-10 mx-auto"
      >
        <span className="text-4xl font-bold text-center max-sm:text-xl max-lg:text-2xl">
          Skills
        </span>
        <div className="w-full flex flex-col gap-2 text-lg font-normal justify-between mt-12 max-lg:mt-4 max-sm:text-xs max-lg:text-sm max-lg:flex-col">
          <ul className="list-disc list-inside">
            <li>
              <strong>Frontend:</strong> ReactJS, Angular, HTML5, CSS3, Sass,
              JavaScript (ES6+), TypeScript
            </li>
            <li className="mt-2">
              <strong>Backend:</strong> Node.js, Express.js, MongoDB
            </li>
            <li className="mt-2">
              <strong>State Management:</strong> Redux, Redux Toolkit, React
              Hooks, RxJS, NgRx
            </li>
            <li className="mt-2">
              <strong>Mobile Development:</strong> Ionic, Cordova, Capacitor
            </li>
            <li className="mt-2">
              <strong>Version Control:</strong> Git, GitHub, GitLab
            </li>
            <li className="mt-2">
              <strong>Devops & Tools:</strong> Postman, Visual Studio Code,
              Android Studio, Xcode, JIRA, Chrome DevTools, Azure, Vercel
            </li>
            <li className="mt-2">
              <strong>Agile Methodologies:</strong> Sprint Planning, Daily
              Standups, Velocity Analysis, Retrospective
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
