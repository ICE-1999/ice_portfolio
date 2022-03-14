import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>IHEDIMBU CHUKWUKA</span>
        </h1>
        <p className="details">
          Hello 👋🏾 !! <br />
          Welcome to my portfolio, I'm a computer engineering graduate from
          Carleton University who is passionate about technology
        </p>
        <div className="header-btns">
          <a
            href="https://drive.google.com/drive/folders/1fwfKvFkyDgFyTUA-TUJhmgd-7ZZGsME0"
            target="_blank"
            className="cv-btn"
          >
            Resume
          </a>
          <a
            href="https://github.com/ICE-1999"
            target="_blank"
            className="cv-btn1"
          >
            Github
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default Header;
