// import React from "react";

// import telegramIcon from "./icons/telegram.svg";
// import instagramIcon from "./icons/instagram.svg";
// import linkedinIcon from "./icons/linkedin.svg";

import ButtonDownloadContainer from "./buttons-download/container";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ButtonDownloadContainer />
      <ul className="socials">
        <li>
          <a href="https://t.me/a_miroshin" title="Telegram">
            {/* <img src={telegramIcon} alt="Telegram" title="Telegram" /> */}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dra.www.me/" title="Instagram">
            {/* <img src={instagramIcon} alt="Instagram" title="Instagram" /> */}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexander-miroshin/"
            title="LinkedIn"
          >
            {/* <img src={linkedinIcon} alt="LinkedIn" title="LinkedIn" /> */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
