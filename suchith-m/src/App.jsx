import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex relative">
      <div className="w-1/5 max-lg:hidden h-screen shadow-xl">
        <Sidebar />
      </div>
      <div className="w-4/5 max-lg:w-full h-full">
        <div className="h-screen max-sm:h-56 bg-office-background bg-no-repeat bg-cover relative">
          <div
            className="h-full inset-0 bg-black opacity-50 relative"
            style={{ zIndex: 1 }}
          />
          <div className="relative">
            <img
              src="../public/wave.png"
              style={{ zIndex: 2 }}
              className="w-full absolute -bottom-px object-fill"
            />
          </div>
          <div className="relative">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
