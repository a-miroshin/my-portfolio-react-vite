import cvUrl from "@assets/downloads/Alexander_Miroshin_CV.pdf";
import PortfolioUrl from "@assets/downloads/Alexander_Miroshin_Portfolio.pdf";

import ButtonDownload from "./Button";

// import "./buttons-download.css";

const ButtonsDownloadContainer = () => {
  return (
    <div className="buttons-download-container">
      <hr />
      <ButtonDownload url={cvUrl} title="CV" />
      <hr />
      <ButtonDownload url={PortfolioUrl} title="Portfolio" />
      <hr />
    </div>
  );
};

export default ButtonsDownloadContainer;
