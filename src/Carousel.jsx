import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const SplideCarousel = () => {
  const skills = [
    { name: "Tailwind", img: "/images/tailwind-logo.png" },
    { name: "JavaScript", img: "/images/js-logo.png" },
    { name: "HTML", img: "/images/html-logo.png" },
    { name: "Next.js", img: "/images/next-logo.png" },
    { name: "React", img: "/images/react-logo.png" },
    { name: "Figma", img: "/images/figma-logo.png" },
    { name: "Git", img: "/images/git-logo.png" },
  ];

  const options = {
    type: "loop", // Enables infinite scrolling
    perPage: 7, // Number of slides visible at a time
    perMove: 1, // Number of slides to scroll per action
    autoplay: true, // Enables autoplay
    interval: 3000, // Autoplay interval in milliseconds
    gap: "1rem", // Space between slides
    pagination: true, // Shows pagination dots
    arrows: false, // Displays navigation arrows
    breakpoints: {
      1024: { perPage: 3 }, // Adjust slides for medium screens
      768: { perPage: 2 }, // Adjust slides for small screens
      480: { perPage: 1 }, // Adjust slides for very small screens
    },
  };

  return (
    <div className="border text-black rounded-xl py-4 px-4">
      <Splide options={options} aria-label="Skills Carousel">
        {skills.map((skill, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center justify-center bg-[#ddf1f0] py-4  rounded-xl shadow-md">
              <img src={skill.img} alt={skill.name} className="w-16 mb-1" />
              <p className="text-center font-medium">{skill.name}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SplideCarousel;
