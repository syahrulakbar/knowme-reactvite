import { NavLink } from "react-router-dom";
import { BiCodeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { TbCertificate, TbBrandGoogleAnalytics } from "react-icons/tb";

const Navbar = () => {
  return (
    <div id="main-button" className="flex justify-center mt-10">
      <div id="button-container" className={` dark:border-white border-slate-800 transition duration-150 ease-in-out flex justify-center border-t w-[100%]`}>
        <div id="button" className={`flex w-full justify-center`}>
          <NavLink
            to={"/"}
            aria-label="button my experience section"
            id="button-experience"
            style={({ isActive }) => ({
              borderTopColor: isActive ? `${localStorage.theme === "dark" ? "#FFF" : "#000"}` : "",
            })}
            className={`mr-2 border-t-[2px]  dark:hover:border-white hover:border-slate-900 border-transparent  w-[20%]`}
          >
            <div className="flex justify-center mt-1">
              <span className="on hidden lg:block">Experience</span>
              <i className="lg:ml-2 ml-0">
                <TbBrandGoogleAnalytics className="w-full text-xl flex justify-center" />
              </i>
            </div>
          </NavLink>
          <NavLink
            aria-label="button my project section"
            style={({ isActive }) => ({
              borderTopColor: isActive ? `${localStorage.theme === "dark" ? "#FFF" : "#000"}` : "",
            })}
            to={"/project"}
            id="button-project"
            className={`mr-2 border-t-[2px] dark:hover:border-white hover:border-slate-900 border-transparent  w-[20%]`}
          >
            <div className="flex justify-center mt-1">
              <span className="on hidden lg:block">My Project</span>
              <i className="lg:ml-2 ml-0">
                <FaLaptopCode className="w-full text-xl flex justify-center" />
              </i>
            </div>
          </NavLink>
          <NavLink
            aria-label="button my skill section"
            style={({ isActive }) => ({
              borderTopColor: isActive ? `${localStorage.theme === "dark" ? "#FFF" : "#000"}` : "",
            })}
            to={"/skill"}
            id="button-skills"
            className={`mr-2 border-t-[2px] dark:hover:border-white hover:border-slate-900 border-transparent  w-[20%]`}
          >
            <div className="flex justify-center mt-1">
              <span className="on hidden lg:block">My Skills</span>
              <i className="lg:ml-2 ml-0">
                <BiCodeAlt className="w-full text-xl flex justify-center" />
              </i>
            </div>
          </NavLink>
          <NavLink
            aria-label="button my certificate section"
            style={({ isActive }) => ({
              borderTopColor: isActive ? `${localStorage.theme === "dark" ? "#FFF" : "#000"}` : "",
            })}
            to={"/certificate"}
            id="button-certificate"
            className={`mr-2 border-t-[2px] dark:hover:border-white hover:border-slate-900 border-transparent  w-[20%]`}
          >
            <div className="flex justify-center mt-1">
              <span className="on hidden lg:block">Certificate</span>
              <i className="lg:ml-1 ml-0">
                <TbCertificate className="w-full text-xl" />
              </i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
