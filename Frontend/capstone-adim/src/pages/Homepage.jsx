// ------------------------------------------[Imports]-----------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import CatSlides from "../components/CatSlides";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="home-section">
        <h1>Welcome to Our Cat Cafe!</h1>
        <h2>About Us</h2>{" "}
        <p>
          Our cat cafe is a place where cat lovers can come together to enjoy
          the company of furry friends while sipping on their favorite
          beverages. We offer a variety of coffee, tea, and snacks, all served
          with a side of purrs and cuddles.
        </p>
      </div>
      <div className="homepage-section1">
        <div className="about-section">
          <p>
            Enjoy a cozy atmosphere with adorable cats and delicious drinks.
          </p>
          <Link to="/menu" className="btn btn-secondary">
            {" "}
            {/*/menu*/}
            View Menu
          </Link>
          <br></br>
          <p> Check our cats you can play with in the link below.</p>
          <Link to="/gallery" className="btn btn-primary">
            {" "}
            {/*/gallery*/}
            View Gallery
          </Link>
        </div>

        <div className="carousel-section">
          {" "}
          {/*/gallery*/}
          <CatSlides />
        </div>
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
