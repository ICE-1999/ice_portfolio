import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alte} />
      </div>
      <div className="s-b-text">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <a href={props.link} className="cv-btn" target="_blank">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;
