import About from "@components/about/about";
import Gallery from "@components/gallery/gallery";

import "./MainPage.css";
// import "./touch-devices.css";

const MainPage = () => {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preferences;

  return (
    <div className="main__page" data-theme={isDark ? "dark" : "light"}>
      <About />
      <Gallery />
    </div>
  );
};

export default MainPage;
