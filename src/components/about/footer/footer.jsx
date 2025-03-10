import ButtonsDownloadContainer from "./buttons-download/ButtonsContainer";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ButtonsDownloadContainer />
      <ul className="socials">
        <li>
          <a href="https://t.me/a_miroshin" title="Telegram"></a>
        </li>
        <li>
          <a href="https://www.instagram.com/dra.www.me/" title="Instagram"></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexander-miroshin/"
            title="LinkedIn"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
