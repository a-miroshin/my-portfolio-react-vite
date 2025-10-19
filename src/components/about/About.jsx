import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

// import Footer from "@components/footer/Footer";
// import TextWithTooltip from "@components/tooltip/Tooltip";
import ButtonDownload from "@components/buttons-download/ButtonDownload";
import cvUrl from "@assets/downloads/Alexander_Miroshin_CV.pdf";
import PortfolioUrl from "@assets/downloads/Alexander_Miroshin_Portfolio.pdf";

import "./about.css";

const About = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const email = "miroshin.architect@gmail.com"; //email

  //   const copyEmailToClipboard = async () => {
  //     try {
  //       await navigator.clipboard.writeText(email);
  //       console.log("Email copied to clipboard");
  //     } catch (err) {
  //       alert("Failed to copy email to clipboard. Please try again.");
  //     }
  //   };

  //   const closeDialog = () => {
  //     if (ref.current) {
  //       ref.current.close();
  //       document.body.style.overflow = "initial";
  //     }
  //   };

  return (
    <>
      <section id="about">
        {/* <div className="about-content"> */}
        {/* <header> */}
        {/* <div className="header-content"> */}
        {/* <button onClick={closeDialog} id="about-close">
                back
                </button> */}
        {/* </div> */}
        {/* </header> */}
        <div>
          <article>
            <h1>{t("about")}</h1>
            <section className="message">
              <p>{t("intro_paragraph_1")}</p>
              <p>{t("intro_paragraph_2")}</p>
            </section>
            <section className="contact-me">
              <h3>{t("contact_me")}</h3>
              {/* <TextWithTooltip text="Copied to clipboard!">
                  <span onClick={copyEmailToClipboard} id="email">
                    {email}
                  </span>
                </TextWithTooltip> */}
              {/* <span id="email">{email}</span> */}
              <a id="email" href={`mailto:${email}`}>
                {email}
              </a>
              <h3>{t("socials")}</h3>
              <ul className="socials">
                <li>
                  <a
                    href="https://www.instagram.com/a__miroshin/"
                    title="Instagram"
                  >
                    {t("instagram")}
                  </a>
                </li>
                <li>
                  <a href="https://t.me/a_miroshin" title="Telegram">
                    {t("telegram")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alexander-miroshin/"
                    title="LinkedIn"
                  >
                    {t("linkedin")}
                  </a>
                </li>
              </ul>
              <ul className="downloads">
                <li>
                  <ButtonDownload url={cvUrl} title={t("download cv")} />
                </li>
                <li>
                  <ButtonDownload
                    url={PortfolioUrl}
                    title={t("download portfolio")}
                  />
                </li>
              </ul>
            </section>
          </article>
        </div>
        {/* <footer>
            <small>The website is built by its owner</small>
          </footer> */}
        {/* </div> */}
      </section>
    </>
  );
});

export default About;
