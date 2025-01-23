
import { useEffect, useRef } from "react";
import "../Styles/Contact.css";

const Contact = () => {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (leftSectionRef.current) observer.observe(leftSectionRef.current);
        if (rightSectionRef.current) observer.observe(rightSectionRef.current);

        return () => {
            if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
            if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
        };
    }, []);

    return (
        <div id="Contact" className="Main1 flex flex-col  items-center justify-center md:space-y-8  md:space-x-12 p-4 min-h-screen">
            <h1 className="text-5xl md:mb-4">Embark on Your Tech Journey</h1>
            <h5 className="text-2xl md:mb-44">Using below Links</h5>
            <div className="button-container-contact sm:mb-0 ">
      {/* Devfolio Button */}
      <a
        href="https://dorahacks.io/hackathon/826/buidl"
        target="_blank"
        rel="noopener noreferrer"
        className="button devfolio-btn"
      >
        <i className="fas fa-external-link-alt"></i> Register Here
      </a>

      {/* Discord Button */}
      <a
        href="https://discord.com/channels/1331501278571794463/1331502007068135545"
        target="_blank"
        rel="noopener noreferrer"
        className="button discord-btn"
      >
        <i className="fab fa-discord"></i> Discord Server
      </a>
    </div>
            
        </div>
    );
};

export default Contact;
