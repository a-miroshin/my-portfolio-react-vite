import React, { useEffect, forwardRef, useRef } from "react";
import "./i18n"; // initialize i18next
import Header from "@components/Header";
import Gallery from "@components/gallery/Gallery";
import About from "@components/about/About";
import Footer from "@components/Footer";

import "./App.css";

const App = () => {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preferences;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <div className="portfolio">
        <Header />
        <main>
          <Gallery />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
