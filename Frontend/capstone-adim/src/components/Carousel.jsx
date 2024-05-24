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
    <div style={{ position: 'relative', width: '300px', margin: 'auto' }}>
      <button onClick={prevImage} style={{ position: 'absolute', top: '50%', left: '10px' }}>
        {'<'}
      </button>
      <img
        src={images[currentIndex]}
        alt=""
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <button onClick={nextImage} style={{ position: 'absolute', top: '50%', right: '10px' }}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
