import React from "react";

const Card = ({ props }) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={props.image} alt="img" style={{width: "100%"}}/>
      </div>
      <div className="project-content">
        <div className="project-tags">
          {props.tags.map((ele, index) => (
            <span className="project-tag" key={index}>
              {ele}
            </span>
          ))}
        </div>
        <h3 className="project-title">{props.title}</h3>
        <p className="project-desc">{props.desc}</p>
        <a
          target="_blank"
          href={props.link !== "" ? props.link : "#"}
          className="project-link"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
