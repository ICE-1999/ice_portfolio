import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo1.png";

function Navbar() {
  return (
    <div>
      <nav>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="main" className="active" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="subscribe" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
