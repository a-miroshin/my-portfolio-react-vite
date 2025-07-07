import { useState, useEffect } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Предзагрузка всех изображений
  useEffect(() => {
    if (!Array.isArray(images) || images.length === 0) return;

    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, [images]);

  if (!Array.isArray(images) || images.length === 0) {
    return <div className="image-container">No images to display.</div>;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-container" onClick={nextImage}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="image"
      />
    </div>
  );
};

export default ImageCarousel;
