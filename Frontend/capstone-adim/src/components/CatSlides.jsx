// ------------------------------------------[Imports]-----------------------------------------------------------
import React from 'react';
import Carousel from './Carousel'; 

const CatSlides = () => {
  const images = [
    '/cats1.jpg',
    '/cats2.jpg',
    '/cats3.jpg',
  ];

  return (
    <div>
      <h1>Pictures from our Cafe</h1>
      <Carousel images={images} />
    </div>
  );
};

export default CatSlides;
