// ------------------------------------------[Imports]-----------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";

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
      </div>{" "}
      {/* end of home-section */}
      <div className="homepage-section-one">
        <div className="about-section">
          <p>
            Enjoy a cozy atmosphere with adorable cats and delicious drinks.
          </p>
          <Link to="/menu" className="link">
            {" "}
            {/*/menu*/}
            View Menu
          </Link>
          <br></br>
          <p> Check our cats you can play with in the link below.</p>
          <Link to="/gallery" className="link">
            {" "}
            {/*/gallery*/}
            View Gallery
          </Link>
        </div>

        <div className="cat-img-section">
          <h2>Pictures of our cafe</h2>

          <img className="cat-image" src="/cats1.jpg" alt="Cats" />
          <img className="cat-image" src="/cats2.jpg" alt="Cats" />
          <img className="cat-image" src="/cats3.jpg" alt="Cats" />
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
