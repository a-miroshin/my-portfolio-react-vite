import { useState, useEffect } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Предзагрузка всех изображений
  useEffect(() => {
    if (!Array.isArray(images) || images.length === 0) return;

    const preloadImages = () => {
      images.forEach((src, index) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]));
        };
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
        style={{
          opacity: loadedImages.has(currentIndex) ? 1 : 0.7,
          transition: 'opacity 0.2s ease-in-out'
        }}
      />
      {/* Индикатор количества изображений */}
      {images.length > 1 && (
        <div className="image-indicator">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
