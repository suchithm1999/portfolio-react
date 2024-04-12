import "/src/App.css";

function Home() {
  return (
    <>
      <div
        id="home"
        style={{ zIndex: 3 }}
        className="w-full h-screen max-sm:h-56 absolute bottom-0 object-fill flex items-center justify-center"
      >
        <div className="h-screen w-2/5 flex flex-col gap-4 items-center justify-center max-sm:hidden">
          <div className="text-white text-xl flex gap-2 items-center">
            <span>Hello, my name is </span>
            <span className="bg-gray-700 p-1 rounded px-3 font-semibold">
              Suchith M
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-4xl text-white font-semibold whitespace-nowrap pt-3 pr-3">
              {`I'm a`}
            </span>
            <span className="text-4xl text-white font-semibold overflow-hidden pt-3 whitespace-nowrap pr-0">
              {` Software Developer ...!!`}
            </span>
          </div>
          <span className="text-ellipsis text-white text-center font-medium pt-5">
            {`Experienced Software Development Engineer proficient in web development, specializing in Angular, React, and TypeScript. Expertise extends to mobile application development with Ionic, alongside a strong foundation in front-end technologies and state management techniques.`}
          </span>
          <div className="pt-5 flex gap-5">
            <button className="bg-white p-2.5 px-5 active:bg-gray-200 text-black rounded-full font-medium">
              About Me
            </button>
            <button className="bg-blue-700 p-2.5 px-5 active:bg-blue-500 text-white rounded-full font-medium">
              Work Experience
            </button>
          </div>
        </div>
        <div className="h-full w-3/5 hidden flex-col gap-1 items-center justify-center max-sm:flex">
          <div className="text-white text-base flex gap-2 items-center">
            <span>Hello, my name is </span>
            <span className="bg-gray-700 p-0 rounded px-1 font-semibold">
              Suchith M
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-lg text-white font-semibold whitespace-nowrap pt-1 pr-1">
              {`I'm a`}
            </span>
            <span className="text-base animate-typing text-white font-semibold overflow-hidden pt-1 whitespace-nowrap border-r-4 border-r-black pr-0">
              {` Software Developer ...!!`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
