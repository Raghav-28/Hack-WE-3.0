import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/EventHighlights.css";

const EventHighlights = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768;

    if (!isSmallScreen) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 200,
          rotationY: -45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: -200,
          rotationY: 45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="highlights-container font-[Ghr4]">
      <div className="highlights-content">
        <div ref={textRef} className="highlights-text z-20">
          <h2 className="text-white">Event Highlights</h2>
          <ul>
            <li>
              <strong>Duration:</strong> 24 hours of Hybrid innovation.
            </li>
            <li>
              <strong>Tracks:</strong> Artificial Intelligence, Blockchain,
              Sustainability, FinTech, Healthcare, Open Innovation and lot more.
            </li>
            <li>
              <strong>Networking Opportunities:</strong> Collaborate with
              industry experts, mentors, and peers.
            </li>
            <li>
              <strong>Recognition:</strong> Certificates for all participants.
            </li>
            <li>
              <strong>Exciting Perks:</strong> Goodies, swag, free meals, and
              more.
            </li>
          </ul>
        </div>
        <img
         
          src=""
          alt=""
          className="highlights-image"
        />
      </div>
    </div>
  );
};

export default EventHighlights;
