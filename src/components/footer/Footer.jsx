import ButtonsDownloadContainer from "@components/buttons-download/ButtonsContainer";
import SocialLinks from "@components/social-links/SocialLinks";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__buttons">
        <ButtonsDownloadContainer />
        <SocialLinks />
      </div>
      <p className="footnote">This website is built by its owner</p>
    </div>
  );
};

export default Footer;
