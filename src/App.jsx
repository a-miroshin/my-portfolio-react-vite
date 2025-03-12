import React, { useEffect } from "react";

import Info from "@components/info/Info";
import Gallery from "@components/gallery/Gallery";

import "./App.css";

const App = () => {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preferences;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="main__page">
      <Info />
      <Gallery />
    </div>
  );
};

export default App;
