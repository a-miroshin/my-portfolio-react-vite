import React, { forwardRef } from "react";

// import Footer from "@components/footer/Footer";
import TextWithTooltip from "@components/tooltip/Tooltip";
import ButtonDownload from "@components/buttons-download/ButtonDownload";
import cvUrl from "@assets/downloads/Alexander_Miroshin_CV.pdf";
import PortfolioUrl from "@assets/downloads/Alexander_Miroshin_Portfolio.pdf";

import "./about.css";

// email

const AboutModal = forwardRef((props, ref) => {
  const email = "miroshin.architect@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      console.log("Email copied to clipboard");
    } catch (err) {
      alert("Failed to copy email to clipboard. Please try again.");
    }
  };

  const closeDialog = () => {
    if (ref.current) {
      ref.current.close();
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <dialog ref={ref} id="about-dialog">
        <header>
          <div className="header-content">
            <h1>About</h1>
            <button onClick={closeDialog} id="about-close">
              back
            </button>
          </div>
        </header>
        <main className="narrow">
          <article>
            <section className="message">
              <p>
                Hello! My name is Alexander Miroshin. I'm an architect and
                concept artist who strives for clean, functional, and attractive
                designs.
              </p>
              <p>
                My location is Nizhniy Novgorod, Russia, and I'm ready to work
                all over the world.
              </p>
            </section>
            <section className="contact-me">
              <h3>Contact me</h3>
              <TextWithTooltip text="Copied to clipboard!">
                <span onClick={copyEmailToClipboard} id="email">
                  {email}
                </span>
              </TextWithTooltip>
              <h3>Socials</h3>
              <ul className="socials">
                <li>
                  <a
                    href="https://www.instagram.com/a__miroshin/"
                    title="Instagram"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://t.me/a_miroshin" title="Telegram">
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alexander-miroshin/"
                    title="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <ul className="downloads">
                <li>
                  <ButtonDownload url={cvUrl} title="CV" />
                </li>
                <li>
                  <ButtonDownload url={PortfolioUrl} title="Portfolio" />
                </li>
              </ul>
            </section>
          </article>
        </main>
        <footer>
          <small>The website is built by its owner</small>
        </footer>
      </dialog>
    </>
  );
});

export default AboutModal;
