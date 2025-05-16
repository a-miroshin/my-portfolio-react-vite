import ButtonsDownloadContainer from "@components/buttons-download/ButtonsContainer";
import SocialLinks from "@components/social-links/SocialLinks";
import AboutModalButton from "@components/about/AboutButton";

// import "./info.css";

const Info = () => {
  return (
    <section className="info">
      {/* <About /> */}
      <h1>Alexander Miroshin</h1>
      <div className="footer">
        <ButtonsDownloadContainer />
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
