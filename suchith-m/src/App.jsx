import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex relative">
      <div className="w-1/5 max-lg:hidden h-screen shadow-xl fixed">
        <Sidebar />
      </div>
      <div
        style={{ left: "20%" }}
        className="w-4/5 max-lg:w-full h-full relative"
      >
        <div className="h-screen max-sm:h-56 bg-office-background bg-no-repeat bg-cover relative">
          <div
            className="h-full inset-0 bg-black opacity-50 relative"
            style={{ zIndex: 1 }}
          />
          <div className="relative">
            <img
              src="/wave.png"
              style={{ zIndex: 2 }}
              className="w-full absolute -bottom-px object-fill"
            />
          </div>
          <div className="relative">
            <Home />
          </div>
        </div>
        <div className="relative">
          <AboutMe />
        </div>
        <div className="h-screen bg-gray-100"></div>
      </div>
    </div>
  );
}

export default App;
