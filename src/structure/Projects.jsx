import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    id: 1,
    image: "/images/ethereum-prj.png",
    alt: "Ethereum project",
    delay: 200,
    externalLink: "https://etherscan-clone-smoky.vercel.app/", // External link
  },
  {
    id: 2,
    image: "/images/hexashop-project.png",
    alt: "HexaShop project",
    delay: 400,
    marginTop: "mt-4",
    externalLink: "https://sarah-hexashop-ecommerce.netlify.app/",
  },
  {
    id: 3,
    image: "/images/weather-project.png",
    alt: "Weather project",
    delay: 600,
    marginTop: "mt-4",
    externalLink: "https://open-weather-website.netlify.app/",
  },
  {
    id: 4,
    image: "/images/myportfolio-prj.png",
    alt: "My Portfolio project",
    delay: 800,
    marginTop: "mt-8",
    
  },
  {
    id: 5,
    image: "/images/fabrics-prj.png",
    alt: "Fabrics project",
    delay: 1000,
    marginTop: "mt-4",
    externalLink: "https://o-ololadefabrics.netlify.app/",
  },
  {
    id: 6,
    image: "/images/exchange-prj.png",
    alt: "Exchange project",
    delay: 1200,
    marginTop: "mt-12",
    
  },
];

function Projects() {
  return (
    <div className="mt-20 mx-auto w-[80%]">
      <h1 className="text-[3rem] font-bold text-green-100 tracking-wide font-sans mb-10 ">
        Projects.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rounded-md ${project.marginTop || ""}`}
          >
            {/* Wrap image in an external link */}
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-96 h-80 object-cover rounded-md"
              />
            </a>
          </div>
        ))}
      </div>
      <blockquote className="space-x-4 mt-9">
        <Link to={"/contact"} className="text-md text-zinc-300 hover:border-b-2">
          Are you convinced to contact me now?
        </Link>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="icon text-white animate-bounceX"
        />
      </blockquote>
    </div>
  );
}

export default Projects;
