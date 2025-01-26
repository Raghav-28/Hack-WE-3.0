// import React from "react";
import "../Styles/Team.css"; // Custom styles
import Logo from "../assets/Logo/Linked.png"
import Raghav from "../assets/Team/Raghav_new.jpg"
import kunal_dev from "../assets/Team/kunal_dev.jpg"
import Inder from "../assets/Team/Inder.jpg"


// Team data
const teamMembers = [
    { name: "Raghav Gupta", role: " Coordinator", photo: Raghav , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kartik-chaudhari-0b1b3b1b7" },
    { name: "Kunal Vashisht", role: " Coordinator", photo:kunal_dev , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kartik-chaudhari-0b1b3b1b7" },
    { name: "Kunal Pandey", role: " Coordinator", photo:Inder , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kartik-chaudhari-0b1b3b1b7" },
    // { name: "John Doe", role: " Coordinator", photo:"" , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kartik-chaudhari-0b1b3b1b7" },
];

const Team = () => {
    return (
        <section id="Team" className="team-section Team bg-[#247448]">
            <h2 className="team-title font-[Ghr4] text-white">Meet Our Team</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <h3 className="team-name text-black font-[Ghr4]">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        {/* {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedin-link"
                            >
                                <img src={Logo} alt="" className="w-6 items-center LinkedIn"  />
                            </a>
                        )} */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
