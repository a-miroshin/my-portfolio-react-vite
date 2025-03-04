import React from "react";

import ButtonDownload from "./button";
import cvUrl from "../../../../assets/downloads/Alexander_Miroshin_CV.pdf";
import PortfolioUrl from "../../../../assets/downloads/Alexander_Miroshin_Portfolio.pdf";

import "./buttons-download.css";

const ButtonsDownloadContainer = () => {
  console.log("CV URL:", cvUrl);
  console.log("Portfolio URL:", PortfolioUrl);

  return (
    <div className="buttons-download-container">
      <ButtonDownload url={cvUrl} title="CV" />
      <ButtonDownload url={PortfolioUrl} title="Portfolio" />
    </div>
  );
};

export default ButtonsDownloadContainer;
