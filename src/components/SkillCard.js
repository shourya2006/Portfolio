import React from "react";

const SkillCard = ({ props }) => {
  return (
    <div className="skill-card" style={{cursor: 'pointer'}}>
      <div className="skill-icon">{props.icon.includes('https:')? <img src={props.icon} alt="python" style={{width: '50%'}}/> :props.icon}</div>
      <h3 className="skill-title">{props.title}</h3>
      <p className="skill-desc">{props.desc}</p>
    </div>
  );
};

export default SkillCard;
