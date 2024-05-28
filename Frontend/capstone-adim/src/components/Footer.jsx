// ------------------------------------------[Imports]-----------------------------------------------------------
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>Learn more about our company and mission.</p>
            <a href="https://chaisrobinson.github.io/Portfolio/">
              Read More
            </a>{" "}
            {/* anchor tag to go to my portfolio, instead of a "about our company" */}
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Get in touch with us for more information.</p>
            <a href="mailto:chais5robinson@gmail.com">Contact Us</a>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank">
                {" "}
                {/* anchor tag to Facebook, target="_blank" will open the link in a new tab */}
                <FaFacebook /> {/* Facebook icon */}
              </a>
              <a href="https://twitter.com" target="_blank">
                {" "}
                {/* anchor tag to Twitter, target="_blank" will open the link in a new tab */}
                <FaTwitter /> {/* Twitter icon */}
              </a>
              <a href="https://www.instagram.com" target="_blank">
                {" "}
                {/* anchor tag to Instagram, target="_blank" will open the link in a new tab */}
                <FaInstagram /> {/* Instagram icon */}
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                {" "}
                {/* anchor tag to LinkedIn, target="_blank" will open the link in a new tab */}
                <FaLinkedin /> {/* LinkedIn icon */}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Chais' Enterprise. All rights
            reserved.
          </p>{" "}
          {/* copyright year using new Date().getFullYear() functions which returns the current year */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
