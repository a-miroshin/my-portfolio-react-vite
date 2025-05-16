import React, { useState } from "react";

// import "./tooltip.css";

const TextWithTooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  //   const isVisible = true;
  return (
    <span
      className="tooltip__wrapper"
      onClick={() => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }}
    >
      {children}
      {isVisible && <div className="tooltip">{text}</div>}
    </span>
  );
};

export default TextWithTooltip;
