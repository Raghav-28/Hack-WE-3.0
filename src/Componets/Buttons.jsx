// import React from "react";
import "../Styles/Buttons.css"; // Add the CSS styles

const Buttons = () => {
  return (
    <div className="button-container md:ml-84">
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
  );
};

export default Buttons;
