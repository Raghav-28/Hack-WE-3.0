// import React from "react";
import "../Styles/Team.css"; // Custom styles
import Logo from "../assets/Logo/Linked.png"



// Team data
const teamMembers = [
    { name: "John Doe", role: " Coordinator", photo:"" , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kartik-chaudhari-0b1b3b1b7" },
];

const Team = () => {
    return (
        <section id="Team" className="team-section Team">
            <h2 className="team-title font-[Ghr4] text-white">Meet Our Team</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <h3 className="team-name text-black font-[Ghr4]">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedin-link"
                            >
                                <img src={Logo} alt="" className="w-6 items-center LinkedIn"  />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
