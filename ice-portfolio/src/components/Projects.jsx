import React from "react";
import Box from "./Box";
import image1 from "../images/s1.png";
import image2 from "../images/s2.png";
import image3 from "../images/s3.jpeg";

function Projects() {
  return (
    <div id="services">
      <div className="s-heading">
        <h1>Projects </h1>
        <p>Here are some projects I have worked on</p>
      </div>
      <div className="b-container">
        <Box image={image1} alte="image1" button="Github" />
        <Box image={image2} alte="image2" button="Github" />
        <Box image={image3} alte="image3" button="Github" />
      </div>
    </div>
  );
}

export default Projects;
