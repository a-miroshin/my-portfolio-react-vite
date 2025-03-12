import Info from "@components/info/Info";
import Gallery from "@components/gallery/Gallery";

import "./App.css";

const App = () => {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = preferences;

  return (
    <div className="main__page" data-theme={isDark ? "dark" : "light"}>
      <Info />
      <Gallery />
    </div>
  );
};

export default App;
