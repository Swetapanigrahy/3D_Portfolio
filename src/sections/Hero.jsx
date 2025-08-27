import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { smoothScrollTo } from "../utils/smoothScroll";

// Add CSS for smooth scrolling
const smoothScrollStyles = `
  html {
    scroll-behavior: smooth;
  }
  
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

// Add smooth scroll styles to the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = smoothScrollStyles;
  document.head.appendChild(style);
}

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" className="w-full h-auto" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Hi, I'm SWETA
              </h1>
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <div className="relative z-10">
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                onClick={() => {
                  smoothScrollTo("#work", {
                    offset: 100, // Adjust this value based on your header height
                    duration: 1000,
                  });
                }}
                onTouchStart={(e) => e.stopPropagation()} // Prevent touch events from bubbling up
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
