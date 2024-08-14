import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <div className="max-w-[1140px] h-[55px] justify-center px-4 mx-auto">
        <div className="flex justify-between flex-row">
          <div>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              <Link to={"/"}>Product Store 🛒</Link>
            </p>
          </div>
          <div>
            <button
              className="dark:bg-slate-700 rounded-md p-2 m-1 hover:bg-slate-200 dark:hover:bg-slate-900 active:bg-slate-700 focus:outline-none !duration-0"
            >
              <Link to="/create">
                <CiSquarePlus size={30} className="dark:text-white" />
              </Link>
            </button>
            <button
              className="dark:bg-slate-700 rounded-md p-2 m-1 hover:bg-slate-200 dark:hover:bg-slate-900 active:bg-slate-700 focus:outline-none"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <MdLightMode size={30} className="text-white" />
              ) : (
                <IoMdMoon size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
