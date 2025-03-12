import ButtonsDownloadContainer from "@components/buttons-download/ButtonsContainer";
import SocialLinks from "@components/social-links/SocialLinks";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ButtonsDownloadContainer />
      <SocialLinks />
    </div>
  );
};

export default Footer;
