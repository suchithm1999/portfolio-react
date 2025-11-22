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
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Developed scalable backend services using NestJS; implemented unit and integration tests with Jest, reducing QA-reported bugs by 35%.`}
                </li>
                <li>
                  {`Designed and deployed a Kafka-based message consumer pipeline for Excel ingestion, automating workflows and saving 10+ hours/week.`}
                </li>
                <li>
                  {`Migrated legacy MongoDB Realm Function–based GraphQL APIs to Apollo Federation, adding schema validation and automated regression suites, reducing post-deployment issues by 25%.`}
                </li>
                <li>
                  {`Collaborated with DevOps teams to enhance CI/CD pipelines, ensuring zero-downtime deployments and improved release reliability.`}
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-b-gray-300 p-2 my-4 border-x-0 border-t-0 max-lg:p-0"></div>
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-4">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span>SURYA DIGITECH PRIVATE LIMITED</span>
              <span>July 2022 - April 2024</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Software Development Engineer I
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Built and maintained full-stack applications using MERN and MEAN stacks, supporting 100+ daily active users.`}
                </li>
                <li>
                  {`Optimized REST APIs, cutting average response times by 30% (3s → 2.1s) and improving user experience.`}
                </li>
                <li>
                  {`Translated Figma designs into responsive UIs with 99% pixel accuracy, enhancing cross-platform consistency.`}
                </li>
                <li>
                  {`Implemented Redux and RxJS state management, reducing UI interaction latency by 25%.`}
                </li>
                <li>
                  {`Deployed frontend applications on secure hosting environments ensuring uptime and compliance.`}
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
                  {`Built cross-platform mobile applications using Ionic, reducing development time by 30% compared to native builds.`}
                </li>
                <li>
                  {`Developed and tested REST APIs for real-time data processing, improving response consistency and reducing latency by 40%.`}
                </li>
                <li>
                  {`Enhanced UI/UX workflows in collaboration with senior engineers, improving usability scores by 15% and reducing user-reported issues by 25%.`}
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
