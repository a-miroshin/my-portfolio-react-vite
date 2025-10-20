import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import ButtonDownload from "@components/buttons-download/ButtonDownload";
import cvUrl from "@assets/downloads/Alexander_Miroshin_CV.pdf";
import PortfolioUrl from "@assets/downloads/Alexander_Miroshin_Portfolio.pdf";

import "./about.css";

const About = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const email = "miroshin.architect@gmail.com"; //email

  return (
    <>
      <section id="about">
        <div>
          <article>
            <h1>{t("about")}</h1>
            <section className="message">
              <p>{t("intro_paragraph_1")}</p>
              <p>{t("intro_paragraph_2")}</p>
            </section>
            <section className="contact-me">
              <h3>{t("contact_me")}</h3>
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
                    instagram
                  </a>
                </li>
                <li>
                  <a href="https://t.me/a_miroshin" title="Telegram">
                    telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alexander-miroshin/"
                    title="LinkedIn"
                  >
                    linkedin
                  </a>
                </li>
              </ul>
            </section>
            <section className="downloads">
              <ul>
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
      </section>
    </>
  );
});

export default About;
