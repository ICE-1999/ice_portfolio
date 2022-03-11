import React from "react";
import "font-awesome/css/font-awesome.min.css";

function contact() {
  return (
    <div id="contact">
      <h3>Let's Connect</h3>
      <div className="contact-input">
        <p>
          <a href="mailto:cihedimbu@yahoo.com ?subject=Let's Connect!">
            <i className="fa fa-envelope fa-lg fa-fw " aria-hidden="true"></i> :
            cihedimbu@yahoo.com{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/chukwuka-ihedimbu/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square fa-lg fa-fw "></i> : LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default contact;
