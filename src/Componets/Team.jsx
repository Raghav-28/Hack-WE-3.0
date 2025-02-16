// import React from "react";
import "../Styles/Team.css"; // Custom styles
import Logo from "../assets/Logo/Linked.png"
import Raghav from "../assets/Team/Raghav_new.jpg"
import kunal_dev from "../assets/Team/kunal_dev.jpg"
import Inder from "../assets/Team/Inder.jpg"
import Ishika from "../assets/Team/ishika.jpg";
import Deepak from "../assets/Team/Deepak.jpg";

// Team data
const teamMembers = [
    { name: "Deepak", role: "Chief Organizer", photo:Deepak , Logo: Logo ,linkedin: "https://tinyurl.com/34xpzeaf" },
    { name: "Ishika", role: " Chief Organizer", photo:Ishika , Logo: Logo ,linkedin: "https://www.linkedin.com/in/ishigarg767?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Raghav Gupta", role: "Event Head", photo: Raghav , Logo: Logo ,linkedin: "https://www.linkedin.com/in/raghav-gupta-623764267/" },
    { name: "Inder Sharma", role: "Event Head", photo:Inder , Logo: Logo ,linkedin: "https://www.linkedin.com/in/inder-sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Kunal Vashisht", role: " Coordinator", photo:kunal_dev , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kunal-vashisht-352nk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    
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
