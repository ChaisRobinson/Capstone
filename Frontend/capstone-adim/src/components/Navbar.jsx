// ------------------------------------------[Imports]-----------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="marquee">
            <span className="marquee-element">Chais' Cat Cafe</span>  {/* Chais' Cat Cafe scolls left */}
          </div>
        </div>
        
        <div  id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"> {/* Home */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery"> {/* Gallery */}
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog"> {/* Blog */}
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu"> {/* Menu */}
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/api"> {/* API */}
                Random Cat Pictures 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
