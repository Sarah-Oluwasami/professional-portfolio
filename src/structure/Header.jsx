
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      
      <div className="relative z-10 w-full  px-8 my-5 flex justify-between items-center">
        <Link to={"/"}>
          <img src="/images/portfolio-logo.png" alt="" className="w-44 " />
        </Link>

        <blockquote>
          <blockquote className="flex space-x-10 text-sm text-zinc-400 mr-10">
            <Link
              to={"/skills"}
              className="relative inline-block hover:text-white after:block after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full tracking-wider "
            >
              Skills
            </Link>
            <Link
              to={"/projects"}
              className="relative inline-block hover:text-white after:block after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full tracking-wider"
            >
              Projects
            </Link>
            <Link
              to={"/contact"}
              className="relative inline-block hover:text-white after:block after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full tracking-wider"
            >
              Contact me
            </Link>
          </blockquote>
        </blockquote>
      </div>
    </div>
  );
}

export default Header
