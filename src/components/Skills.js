import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skill = [
    {
      icon: "</>",
      title: "Web Development",
      desc: "Creating responsive, accessible, and performant websites using modern HTML, CSS, and JavaScript.",
    },
    {
      icon: "JS",
      title: "ReactJS",
      desc: "Designing and implementing scalable, interactive user interfaces using React.",
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      title: "Python",
      desc: "Exemplifying strong logical reasoning and advanced problem-solving skills through Python programming.",
    },
    {
      icon: "🎨",
      title: "Bootstrap",
      desc: "Developing responsive and visually appealing web interfaces using Bootstrap's powerful front-end framework.",
    },
  ];
  return (
    <section id="skills">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">What I bring to the table</p>
      </div>
      <div className="skills-container">
        {skill.map((ele, index) => (
          <SkillCard key={index} props={ele} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
