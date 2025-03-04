import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./MainPage.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainPage />
    {/* <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    /> */}
  </StrictMode>
);
