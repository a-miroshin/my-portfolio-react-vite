import React, { useEffect } from "react";

// import Info from "@components/info/Info";
import Gallery from "@components/gallery/Gallery";
// import Footer from "@components/footer/Footer";
import AboutButton from "@components/about/AboutButton";

import "./App.css";
// import AboutModalButton from "@components/about/AboutModalButton";

const App = () => {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preferences;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <header>
        <h1>Alexander Miroshin</h1>
        <AboutButton />
      </header>
      {/* <Info /> */}
      <Gallery />
      {/* <Footer /> */}
      <footer>
        <small>The website is built by its owner</small>
      </footer>
    </>
  );
};

export default App;
