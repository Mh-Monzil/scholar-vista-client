import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="container  2xl:max-w-[1920px] mx-auto">
      <Outlet />
      </div>
    </div>
  );
};

export default Root;
