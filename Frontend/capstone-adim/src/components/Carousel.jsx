import React, { useState } from 'react';


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={prevImage}>
        {'<'}
      </button>
      <img
        src={images[currentIndex]}
        alt=""
        className="carousel-image"
      />
      <button className="next-button" onClick={nextImage}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
