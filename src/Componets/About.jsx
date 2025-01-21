import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/about.css";


const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the image (coming from left)
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: -200, // Start from the left
        rotationY: 45,
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // When the top of the element is at 80% of the viewport
          end: "bottom 20%",
          scrub: true, // Smooth animation on scroll
        },
      }
    );

    // Animation for the text (coming from right)
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 200, // Start from the right
        rotationY: -45,
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // When the top of the element is at 80% of the viewport
          end: "bottom 20%",
          scrub: true, // Smooth animation on scroll
        },
      }
    );
  }, []);

  return (
    <div ref={aboutRef} className="about-container font-[Ghr4]">
      <div className="about-content">
        <img
          src=""
          alt="Turtle"
          className="about-image z-10"
        />
        <div ref={textRef} className="about-text">
          <h2 className=" text-justify justify-center text-white font-[Ghr4]">
            ABOUT THE EVENT
          </h2>
          <p>
            Hack We 3.0 is the flagship hackathon of the Women in Engineering
            (WE) sub-branch of IEEE, aimed at fostering innovation,
            collaboration, and creativity while encouraging women’s
            participation in technology. Scheduled for 8th and 9th March 2025,
            this 28-hour offline hackathon provides a platform for women tech
            enthusiasts, students, developers, and innovators from across the
            country to showcase their technical prowess and problem-solving
            abilities. With the theme Code the Future, Hack We 3.0 challenges
            participants to address real-world problems, explore cutting-edge
            technologies, and push the boundaries of innovation. The event is
            designed to empower women in tech, promote diversity, and create a
            supportive environment for groundbreaking ideas, networking
            opportunities, and knowledge exchange, all within a spirit of
            healthy competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
