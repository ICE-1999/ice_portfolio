import React from "react";
import featureimage from "../images/think.jpeg";

function About() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h2>Who am I?</h2>
        <h3>
          Passionate about <span>technology</span>
        </h3>
        <p>
          I am a proactive computer engineering graduate who is enthusiastic
          about innovation and aspires to use technology to have a positive
          effect on the planet. Profoundly cultivated and brisk learner.
          Committed to working as a collaborative and positive team member,
          striving to utilize my knowledge and expertise for optimal engineering
          results. Viewed by companions and mentors as an overachiever who is
          focused on greatness in this field as exhibited by my exceptional
          scholastic record.
        </p>
      </div>
    </div>
  );
}

export default About;
