import React from "react";
import githubIcon from "../assets/github.svg";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";
import steamIcon from "../assets/steam.svg";
import discordIcon from "../assets/discord.svg";


const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/tadcouq" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/tadcouq._/" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/tdcq.me/" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://steamcommunity.com/id/ChaoticBraindead" target="_blank" rel="noopener noreferrer">
        <img src={steamIcon} alt="Steam" />
      </a>
      <a href="https://discord.gg/E6FKTPQxBd" target="_blank" rel="noopener noreferrer">
        <img src={discordIcon} alt="Discord" />
      </a>
    </div>
  );
};

export default SocialLinks;
