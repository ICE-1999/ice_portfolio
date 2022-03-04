import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          Welcome to my <span>Portfolio</span> page
        </h1>
        <div className="header-btns">
          <a href="#" className="cv-btn">
            Resume
          </a>
          <a href="#" className="cv-btn1">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
