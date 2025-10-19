import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Sandbox from "./Sandbox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Sandbox /> */}
  </StrictMode>
);
