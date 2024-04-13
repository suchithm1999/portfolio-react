function Skills() {
  return (
    <>
      <div
        id="skills"
        className="h-full w-full flex flex-col items-center bg-mass-icon bg-contain bg-repeat px-16 max-lg:p-0 pt-0 m-8 mt-0 mb-0 mx-auto"
      >
        <span className="text-4xl font-bold text-center max-lg:text-xl">
          Skills
        </span>
        <div className="w-4/5 flex flex-wrap justify-evenly mt-5 ">
          <div className="flex flex-col items-center justify-center text-center gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 max-lg:m-4 p-8">
            <img src="/public/angular.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">Angular</span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              A powerful front-end framework for building dynamic web
              applications with robust features and seamless data binding.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center max-lg:m-4 text-center gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/react.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">React</span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              A popular JavaScript library for building user interfaces, known
              for its component-based architecture and efficient rendering,
              enabling fast and scalable web applications.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-lg:m-4 gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/ionic.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">Ionic</span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              A versatile framework for building cross-platform mobile
              applications using web technologies, offering a rich set of UI
              components and native-like performance.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-lg:m-4 gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/redux.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">Redux</span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              A predictable state container for JavaScript apps, facilitating
              the management of application state in complex, scalable web
              applications through a single immutable state tree.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-lg:m-4 gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/typescript.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">
              TypeScript
            </span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              Enhancing JavaScript with static typing, TypeScript improves code
              quality, scalability, and maintainability, providing robust
              features for large-scale application development.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-lg:m-4 gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/javascript.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">
              JavaScript
            </span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              The backbone of web development, enabling dynamic and interactive
              content creation with broad browser compatibility and versatile
              application capabilities.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-lg:m-4 gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/html.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">HTML</span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              The standard markup language for creating web pages and
              applications, defining the structure and content of documents
              using a variety of elements and attributes.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-lg:m-4 gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/tailwindcss.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">
              Tailwind CSS
            </span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              A utility-first CSS framework that provides a low-level utility
              classes to style your website, enabling rapid development and easy
              customization without writing custom CSS.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center max-lg:m-4 gap-2 drop-shadow-2xl shadow-indigo-50 bg-opacity-100 bg-white hover:shadow-2xl hover:shadow-indigo-300 rounded hover:rounded-tl-3xl hover:rounded-br-3xl max-w-64 max-h-64 m-8 p-8">
            <img src="/public/bootstrap.svg" width={"75px"} height={"75px"} />
            <span className="text-base font-bold text-gray-700">Bootstrap</span>
            <div className="text-ellipsis text-xs font-normal font-serif text-gray-700">
              A widely-used front-end framework for building responsive and
              mobile-first websites, offering pre-designed components and
              utilities to streamline web development.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
