import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <nav className="w-[80%] ml-[10%] mt-3 ">
        <Navbar />
      </nav>

      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
