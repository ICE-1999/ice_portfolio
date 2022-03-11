import React from "react";
import Box from "./Box";
import image1 from "../images/s1.png";
import image2 from "../images/s2.png";
import image3 from "../images/s3.jpeg";
import image4 from "../images/img2.jpeg";

function Projects() {
  return (
    <div id="projects">
      <div className="s-heading">
        <h1>Projects </h1>
        <p>Here are some projects I have worked on</p>
      </div>
      <div className="b-container">
        <Box
          image={image1}
          alte="image1"
          button="Github"
          title="Simulation model of a Autonomous Snowblower"
          desc="Created a snowblower using CoppeliaSim Edu robot simulation program."
          link="https://github.com/ICE-1999/SYSC4805-Design-Project"
        />
        <Box
          image={image2}
          alte="image2"
          button="Github"
          title="Determinant Computation"
          desc="Created a concurrent program with three processes that compute the determinant of a 3x3 matrix of integers using Linux shared memory."
          link="https://github.com/ICE-1999/Determinant-Computation.git"
        />
        <Box
          image={image3}
          alte="image3"
          button="Github"
          title="Client-Server Calculator"
          desc="implemented a calculator system in C using linux which stores and performs operations on number using the client-server paradigm"
          link=""
        />
        <Box
          image={image4}
          alte="image3"
          button="Github"
          title="Swall Project-Carleton Eye"
          desc="This project is designed to build an autonomous surveillance camera system with remote control feature and live feed available on the SWall."
          link="https://github.com/ICE-1999/Final-Project"
        />
      </div>
    </div>
  );
}

export default Projects;
