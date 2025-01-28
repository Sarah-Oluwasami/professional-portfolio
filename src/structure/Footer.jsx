import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="">
      <div className="max-sm:fixed bottom-0 max-sm:justify-around max-sm:w-full max-sm:bg-black max-sm:opacity-25 p-3   mt-20 mx-auto w-[80%] sm:my-14 flex space-x-10 ">
        <a
          href="https://www.linkedin.com/in/sarah-oluwasami-241a90291/"
          className=" "
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon text-white " />
        </a>
        <a href="https://github.com/Sarah-Oluwasami" className=" ">
          <FontAwesomeIcon icon={faGithub} className="icon text-white " />
        </a>
        <a href="mailto:saraholuwasami20@gmail.com" className=" ">
          <FontAwesomeIcon icon={faEnvelope} className="icon text-white " />
        </a>
      </div>
    </div>
  );
}

export default Footer;
