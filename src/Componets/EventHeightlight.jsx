import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/EventHighlights.css";

const EventHighlights = () => {
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
    <div className="highlights-container font-[Ghr4]">
      <div className="highlights-content">
        <div ref={textRef} className="highlights-text z-20">
          <h2 className="text-white">Event Highlights</h2>
          <div className="text-left justify-center mx-auto">
          <strong className="text-black text-1xl md:text-2xl">Duration:</strong> 24 hours of Hybrid innovation. <br />
              <strong className="text-black text-1xl md:text-2xl">Tracks:</strong> Artificial Intelligence, Blockchain,
              Sustainability, FinTech, Healthcare, Open Innovation and lot more. <br />
              <strong className="text-black text-1xl md:text-2xl">Networking Opportunities:</strong> Collaborate with
              industry experts, mentors, and peers. <br />
              <strong className="text-black text-1xl md:text-2xl">Recognition:</strong> Certificates for all participants. <br />
              <strong className="text-black text-1xl md:text-2xl">Exciting Perks:</strong> Goodies, swag, free meals, and
              more. <br />
          </div>
            
        </div>
        <img
          ref={imageRef}
          src=""
          alt=""
          className="highlights-image"
        />
      </div>
    </div>
  );
};

export default EventHighlights;
