import React from "react";

const ButtonDownload = ({ url, title }) => {
  const handleClick = () => {
    console.log(`Downloading: ${title}`);
  };

  return (
    <a
      href={url}
      download
      className="button-download" // Стили для кнопки
      onClick={handleClick}
      aria-label={title} // Доступность
    >
      {title} &#8595;
    </a>
  );
};

export default ButtonDownload;
