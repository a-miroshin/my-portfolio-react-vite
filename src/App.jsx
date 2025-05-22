import React, { useEffect, forwardRef, useRef } from "react";

import AboutModal from "@components/about/AboutModal";
import TextWithTooltip from "@components/tooltip/Tooltip";
import ButtonDownload from "@components/buttons-download/ButtonDownload";
import cvUrl from "@assets/downloads/Alexander_Miroshin_CV.pdf";
import PortfolioUrl from "@assets/downloads/Alexander_Miroshin_Portfolio.pdf";
// import Info from "@components/info/Info";
import Gallery from "@components/gallery/Gallery";
// import Footer from "@components/footer/Footer";
// import AboutButton from "@components/about/AboutButton";

import "./App.css";
// import AboutModalButton from "@components/about/AboutModalButton";

const App = () => {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preferences;
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  // const AboutModalButton = () => {
  //   const openDialog = () => {
  //     if (dialogRef.current) {
  //       dialogRef.current.showModal();
  //       document.body.style.overflow = "hidden";
  //     }
  //   };

  //   return (
  //     <>
  //       <button onClick={openDialog} id="about-open">
  //         About
  //       </button>
  //     </>
  //   );
  // };

  // const AboutModal = forwardRef((props, ref) => {
  //   const email = "miroshin.architect@gmail.com";

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
  //       document.body.style.overflow = "";
  //     }
  //   };

  //   return (
  //     <>
  //       <dialog ref={ref} id="about-dialog">
  //         <header>
  //           <div className="header-content">
  //             <h1>About</h1>
  //             <button onClick={closeDialog} id="about-close">
  //               back
  //             </button>
  //           </div>
  //         </header>
  //         <main className="narrow">
  //           <article>
  //             <section className="message">
  //               <p>
  //                 Hello! My name is Alexander Miroshin. I'm an architect and
  //                 concept artist who strives for clean, functional, and
  //                 attractive designs.
  //               </p>
  //               <p>
  //                 My location is Nizhniy Novgorod, Russia, and I'm ready to work
  //                 all over the world.
  //               </p>
  //             </section>
  //             <section className="contact-me">
  //               <h3>Contact me</h3>
  //               <div className="email">
  //                 <TextWithTooltip text="Copied to clipboard!">
  //                   <span onClick={copyEmailToClipboard}>{email}</span>
  //                 </TextWithTooltip>
  //               </div>
  //               <h3>Socials</h3>
  //               <ul className="socials">
  //                 <li>
  //                   <a
  //                     href="https://www.instagram.com/a__miroshin/"
  //                     title="Instagram"
  //                   >
  //                     Instagram
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a href="https://t.me/a_miroshin" title="Telegram">
  //                     Telegram
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     href="https://www.linkedin.com/in/alexander-miroshin/"
  //                     title="LinkedIn"
  //                   >
  //                     LinkedIn
  //                   </a>
  //                 </li>
  //               </ul>
  //               <ul className="downloads">
  //                 <li>
  //                   <ButtonDownload url={cvUrl} title="CV" />
  //                 </li>
  //                 <li>
  //                   <ButtonDownload url={PortfolioUrl} title="Portfolio" />
  //                 </li>
  //               </ul>
  //             </section>
  //           </article>
  //         </main>
  //         <footer>
  //           <small>The website is built by its owner</small>
  //         </footer>
  //       </dialog>
  //     </>
  //   );
  // });

  return (
    <>
      <div className="portfolio">
        <header>
          <div className="header-content">
            <h1>Alexander Miroshin</h1>
            <button onClick={openDialog} id="about-open">
              About
            </button>
          </div>
        </header>
        <main>
          {/* <Info /> */}
          <Gallery />
          {/* <Footer /> */}
        </main>
        <footer>
          <small>The website is built by its owner</small>
        </footer>
      </div>
      <AboutModal ref={dialogRef} />
    </>
  );
};

export default App;
