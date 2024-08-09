import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="mb-8 bg-background-2">
      <Navbar />
      <div className="px-8 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
