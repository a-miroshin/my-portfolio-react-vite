import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(images) || images.length === 0) {
    return <div className="image-container">No images to display.</div>;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const entry = images[currentIndex];
  // Поддержка string или { src, lowSrc }
  const src = typeof entry === "string" ? entry : entry?.src || "";
  const lowSrc = typeof entry === "string" ? entry : entry?.lowSrc || ""; // <= placeholder

  return (
    <div className="image-container" onClick={nextImage}>
      {/* <img src={src} alt={`Slide ${currentIndex + 1}`} loading="lazy" /> */}
      <LazyLoadImage
        src={src}
        placeholderSrc={lowSrc}
        wrapperClassName="img-wrapper"
        // style={{ width: "100%" }}
        alt={`Slide ${currentIndex + 1}`}
        // effect="blur" // Эффект отключил, потому что подгружается пиксельная картинка локально
      />
    </div>
  );
};

export default ImageCarousel;
