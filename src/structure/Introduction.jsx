// import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";




const AnimatedText = ({ text }) => {
  const letters = text.split("");

  return (
    <div
      style={{
        fontSize: "2rem",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.01 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};



function Introduction() {
  return (
    <div className="h-[40vh]">
      <div className="mt-20 mx-auto w-[80%]">
        <blockquote className="mb-10">
          <h1 className="text-4xl tracking-[.60em] font-extrabold">
            <AnimatedText text="I'M SARAH OLUWASAMI" />
          </h1>
        </blockquote>
        <blockquote className="space-y-8 text-[15px] text-zinc-400 tracking-wide">
          <p>
            Your friendly neighborhood frontend developer, ReactJS and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with <b>PROJECTS</b> and lines of code, turning
            zeroes and ones into immersive, interactive experiences,
          </p>
          <p>
            Bona fide <b>Design</b> enthusiast - responsive or user-friendly,
            I`ve got it covered. I tread the path of minimalism, finding beauty
            in simplicity and order. When I`m not crafting beautiful web
            experiences, you can find me reading <b>ARTICLES</b> or swaying to
            the rhythm of Pop Music & Jazz, losing myself in the captivating
            flow of melodies. anyways you can <b>CONTACT ME</b>
          </p>
        </blockquote>

        <blockquote className="space-x-4 mt-9">
          <Link to={"/skills"} className="text-md text-zinc-300 hover:border-b-2">
            See More About Me
          </Link>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="icon text-white animate-bounceX"
          />
        </blockquote>
      </div>
    </div>
  );
}

export default Introduction;
