import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/about.css";
import "../Styles/EventHighlights.css";
import commonBackground from "../assets/images/bg_new.jpg";

const AboutEvent = () => {
  const aboutRef = useRef(null);
  const highlightsTextRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Reset styles using gsap.set
    gsap.set(aboutRef.current, {
      opacity: 1,
      x: 0,
    });

    gsap.set(highlightsTextRef.current, {
      opacity: 1,
      x: 0,
    });

    // Remove existing ScrollTriggers if any
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div
      className="about-event-container font-[Ghr4] opacity-85"
      style={{
        backgroundImage: `url(${commonBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="about-event-content flex flex-wrap ">
        {/* About Section */}
        <div ref={aboutRef} className="about-section w-full md:w-1/2 p-6">
          <h2 className="text-white font-[Ghr4] text-2xl md:text-3xl mb-4">ABOUT THE EVENT</h2>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Hack WiE 3.0 is the flagship hackathon of the Women in Engineering (WiE) sub-branch of IEEE, aimed at
            fostering innovation, collaboration, and creativity while encouraging women’s participation in technology.
            Scheduled for 29th and 30th January 2025, this 24-hour Hybrid hackathon provides a platform for women tech
            enthusiasts, students, developers, and innovators from across the country to showcase their technical prowess
            and problem-solving abilities. With the theme "Code the Future", Hack WiE 3.0 challenges participants to
            address real-world problems, explore cutting-edge technologies, and push the boundaries of innovation.
          </p>
        </div>

        {/* Event Highlights Section */}
        <div
          ref={highlightsTextRef}
          className="highlights-section w-full md:w-1/2 p-6 text-white text-left"
        >
          <h2 className="text-white text-2xl md:text-3xl mb-4">EVENT HIGHLIGHTS</h2>
          <div className="leading-relaxed">
            <strong className="text-lg">Duration:</strong> 24 hours of Hybrid innovation. <br />
            <strong className="text-lg">Tracks:</strong> Artificial Intelligence, Blockchain, Sustainability, FinTech,
            Healthcare, Open Innovation, and more. <br />
            <strong className="text-lg">Networking Opportunities:</strong> Collaborate with industry experts, mentors,
            and peers. <br />
            <strong className="text-lg">Recognition:</strong> Certificates for all participants. <br />
            <strong className="text-lg">Exciting Perks:</strong> Goodies, swag, free meals, and more. <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
