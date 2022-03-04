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
            <Link to="main" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="project">Projects</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
