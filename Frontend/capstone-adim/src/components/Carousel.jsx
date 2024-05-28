// ------------------------------------------[Imports]-----------------------------------------------------------
import React, { useState } from 'react';


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // state to keep track of the current image index

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }; // function to move to the next image

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }; // function to move to the previous image

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={prevImage}>
        {'<'}
      </button> {/* button to move to the previous image */}
      <img
        src={images[currentIndex]}
        alt=""
        className="carousel-image"
      /> {/* image displayed in the carousel */}
      <button className="next-button" onClick={nextImage}>
        {'>'}
      </button> {/* button to move to the next image */}
    </div>
  );
};

export default Carousel;
