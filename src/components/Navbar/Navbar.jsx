import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "/logo-yellow.png";
// import UseAuth from "../hooks/useAuth";
// import Profile from "./Profile";
// import ScaleLoader from "react-spinners/ScaleLoader";

const Navbar = () => {
  // const { user, loading } = UseAuth();
  const [menu, setMenu] = useState(false);
  const user  = false;

  const routes1 = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Queries",
      path: "/queries",
    },
    {
      id: 3,
      name: "Login",
      path: "/login",
    },
  ];

  const routes2 = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Queries",
      path: "/queries",
    },
    {
      id: 3,
      name: "Recommendations For Me",
      path: "/recommendations-for-me",
    },
    {
      id: 4,
      name: "My Queries",
      path: "/my-queries",
    },
    {
      id: 5,
      name: "My Recommendations",
      path: "/my-recommendations",
    },
  ];

  let routes = null;
  if (user) {
    routes = routes2;
  } else {
    routes = routes1;
  }

  return (
    <header className=" sticky top-0 z-50 bg-navy mb-2">
      <div className="container flex justify-between items-center h-16 mx-auto relative">
        
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
        >
          <img className="w-10 h-10 md:w-12 md:h-12" src={logo} alt="" />
          <span className="font-bold text-2xl md:text-3xl text-white">Scholar<span className="text-yellow">Vista</span> </span>
        </Link>
        <button
          onClick={() => setMenu(!menu)}
          className="flex justify-end xl:hidden text-white"
        >
          {menu ? (
            <IoClose className="text-4xl" />
          ) : (
            <IoMenu className="text-4xl" />
          )}
        </button>
        <ul className="items-stretch hidden space-x-6 xl:flex text-white">
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                className="font-medium text-lg hover:text-yellow ease-in-out duration-300 cursor-pointer"
                to={`${route.path}`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={`${
            menu
              ? "absolute xl:hidden top-24 left-4 p-4 pr-20 sm:pr-40 space-y-2 duration-700 ease-in-out shadow-md rounded-md z-50 bg-white"
              : "hidden"
          } `}
        >
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300 cursor-pointer active:border-b-2"
                to={`${route.path}`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* <div className="flex items-center gap-8">
          <input
            data-hs-theme-switch=""
            className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-green-300 border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none

before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto"
            type="checkbox"
            id="darkSwitch"
          />
          {loading ? (
            <ScaleLoader height={30} width={3} color="#36d7b7" />
          ) : !loading && user ? (
            <Profile user={user} />
          ) : (
            <Link
              to="/login"
              className="block md:hidden px-5 py-1.5 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300"
            >
              Login
            </Link>
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;