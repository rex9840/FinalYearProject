import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/home/Navbar";
import Sidebar from "./components/home/Sidebar";

function App() {
  return (
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-2">
          <Navbar />
          <Outlet />
        </div>
      </div>
  );
}

export default App;
