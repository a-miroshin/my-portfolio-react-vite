import React, { useState } from "react";

export const Tooltip = ({ children, text }) => {
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
      {isVisible && <span className="tooltip">{text}</span>}
    </span>
  );
};
