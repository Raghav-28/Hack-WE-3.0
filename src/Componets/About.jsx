import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/about.css";
import bannerImg from "../assets/bannerimg.jpg";
const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Reset image styles using gsap.set
    gsap.set(imageRef.current, {
      opacity: 1,
      x: 0,
      rotationY: 0, // Remove any previous transform and reset opacity
    });

    // Reset text styles using gsap.set
    gsap.set(textRef.current, {
      opacity: 1,
      x: 0,
      rotationY: 0, // Remove any previous transform and reset opacity
    });

    // Optionally, you can remove ScrollTriggers if they exist
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div ref={aboutRef} className="about-container font-[Ghr4]">
      <div className="about-content">
      <div>
      <img src={bannerImg} alt="Event Image" className="about-image z-10 " />
      </div>

        <div ref={textRef} className="about-text text-left ">
          <h2 className="text-white font-[Ghr4]">
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
            abilities. With the theme "Code the Future", Hack We 3.0 challenges
            participants to address real-world problems, explore cutting-edge
            {/* technologies, and push the boundaries of innovation. The event is
            designed to empower women in tech, promote diversity, and create a
            supportive environment for groundbreaking ideas, networking
            opportunities, and knowledge exchange, all within a spirit of
            healthy competition. */}
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default AboutSection;
