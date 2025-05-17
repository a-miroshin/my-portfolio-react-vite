import ButtonDownload from "@components/buttons-download/ButtonDownload";
import SocialLinks from "@components/social-links/SocialLinks";
import AboutModalButton from "@components/about/AboutButton";

// import "./info.css";

const Info = () => {
  return (
    <section className="info">
      {/* <About /> */}
      <h1>Alexander Miroshin</h1>
      <div className="footer">
        {/* <ButtonsDownloadContainer /> */}
        <div className="buttons-download-container">
          <hr />
          <ButtonDownload url={cvUrl} title="CV" />
          <hr />
          <ButtonDownload url={PortfolioUrl} title="Portfolio" />
          <hr />
        </div>
        <div className="footer__buttons">
          <SocialLinks />
          <AboutModalButton />
        </div>
        <p className="footnote">This website is built by its owner</p>
      </div>{" "}
    </section>
  );
};

export default Info;
