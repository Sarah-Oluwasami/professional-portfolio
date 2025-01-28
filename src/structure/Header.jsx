import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function Header() {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={`relative  flex  z-10 w-full  px- my-5   justify-between items-center`}
      >
        <Link to={"/"}>
          <img src="/images/portfolio-logo.png" alt="" className="w-44 " />
        </Link>

        <button
          onClick={toggleSidebar}
          className=" max-sm:mx-10 z-20  my-2 rounded-md block sm:hidden"
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="icon text-white text-4xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="icon text-white text-4xl"
            />
          )}
        </button>
        <blockquote
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } transition-transform duration-500 ease-in-out  max-sm:bg-black max-sm:opacity-25 p-6 overflow-hidden flex sm:flex-row flex-col max-sm:fixed max-sm:h-[100%] max-sm:top-0 max-sm:right-0  items-center max-sm:justify-center max-sm:space-y-3 space sm:space-x-10 text-lg  max-sm:font-medium text-zinc-50 sm:mr-10`}
        >
          <Link
            to={"/skills"}
            className="relative inline-block text-zinc-400  hover:text-white after:block after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full tracking-wider"
          >
            Skills
          </Link>
          <Link
            to={"/projects"}
            className="relative inline-block text-zinc-400 hover:text-white after:block after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full tracking-wider"
          >
            Projects
          </Link>
          <Link
            to={"/contact"}
            className="relative inline-block text-zinc-400 hover:text-white after:block after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full tracking-wider"
          >
            Contact me
          </Link>
        </blockquote>
      </div>
    </div>
  );
}

export default Header;
