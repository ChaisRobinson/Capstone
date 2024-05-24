import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap"; 
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to Our Cat Cafe!</h1>
        <p>Enjoy a cozy atmosphere with adorable cats and delicious drinks.</p>
        <Link to="/gallery" className="btn btn-primary">
          View Gallery
        </Link>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Our cat cafe is a place where cat lovers can come together to enjoy
          the company of furry friends while sipping on their favorite
          beverages. We offer a variety of coffee, tea, and snacks, all served
          with a side of purrs and cuddles.
        </p>
        <Link to="/menu" className="btn btn-secondary">
          View Menu
        </Link>
      </div>

      <div className="carousel-section">
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
  {/* Add more Carousel.Items as needed */}
</Carousel>

      </div>

      <div className="location-section">
        <h2>Visit Us</h2>
        <p>We're located in the heart of the city, at:</p>
        <p>123 Catnip Lane</p>
        <p>Cityville, PA 12345</p>
        <p>Come by and say hello!</p>
      </div>
    </div>
  );
};

export default Homepage;
