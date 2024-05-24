import React from 'react';
import { Carousel } from 'react-bootstrap';

const CatSlides = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="img2" src="/cats1.jpg" alt="First slide" />
        <Carousel.Caption>
          <p>Kittens looking at the window!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img2" src="/cats2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <p>Maxwell chilling on the display!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img2" src="/cats3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <p>Sleeping cats!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CatSlides;