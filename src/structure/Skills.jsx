import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SplideCarousel from "../Carousel";

function Skills() {
  return (
    <div className="mx-44 mt-8">
      <h1 className="text-[3rem] font-bold text-green-100 tracking-wide font-sans mb-6">
        About Me.
      </h1>
      <div className="bg-gradient-to-r from-[#aac7c5]  to-white text-black rounded-xl py-4 px-6">
        <blockquote className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-wide py-2">
            Engineering <FontAwesomeIcon icon={faGithub} />
          </h2>
          <a className="underline font-thin text-zinc-700 text-[15px] tracking-wide">
            View Github
          </a>
        </blockquote>
        <blockquote className="py-1">
          <p className="text-xs/tight text-stone-700 tracking-wider">
            Drawing upon my expertise as a seasoned programmer, I possess the
            unique ability to tackle intricate technical challenges while
            crafting websites that exude sleekness and visual allure. Moreover,
            my extensive knowledge of recognized technical standards is
            complemented by my proficiency in modern building practices,
            ensuring that every aspect of your website is finely tuned to
            perfection.
          </p>
        </blockquote>
        <button className="border border-black text-[13px] px-8 py-3 my-3 rounded-xl tracking-wide text-zinc-600">
          <a href="assets/files/sarah cv-3.pdf" download className=" ">
            Download CV
          </a>
        </button>
      </div>

      <div className="my-2">
        <blockquote className="my-10">
          <h2 className="text-[#b5d2d1] text-2xl font-bold  font-sans">
            Technologies I work with...
          </h2>
        </blockquote>
        <SplideCarousel />
      </div>
      <blockquote className="space-x-4 mt-9">
        <Link
          to={"/projects"}
          className="text-md text-zinc-300 hover:border-b-2"
        >
          Let's continue to projects
        </Link>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="icon text-white animate-bounceX"
        />
      </blockquote>
    </div>
  );
}

export default Skills;
