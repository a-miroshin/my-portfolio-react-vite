import About from "@components/about/About";
import Gallery from "@components/gallery/Gallery";

import "./App.css";
// import "./touch-devices.css";

const App = () => {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preferences;

  return (
    <div className="main__page" data-theme={isDark ? "dark" : "light"}>
      <About />
      <Gallery />
    </div>
  );
};

export default App;
