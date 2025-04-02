import React from "react";
import Card from "./Card";
import blog from "../Image/blog.png";
import clone from "../Image/clone.png";
import portfolio from "../Image/portfolio.png";

const Projects = () => {
  const projects = [
    {
      image: blog,
      tags: ["HTML", "CSS", "JavaScript", "Python"],
      title: "Youtube Channel Website",
      desc: "This project was developed for my YouTube channel to catalog and display all uploaded videos using a database.",
      link: "https://github.com/shourya2006/YTweb",
    },
    {
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      title: "Portfolio Website",
      desc: "A modern portfolio website showcasing creative work with smooth animations and responsive design.",
      link: "",
    },
    {
      image: clone,
      tags: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      title: "Youtube Clone",
      desc: "A fully functional YouTube replica featuring core functionalities comparable to the official YouTube platform.",
      link: "https://showtube-1.web.app/",
    },
  ];
  return (
    <section id="projects">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>
      <div className="projects-container">
        {projects.map((ele, index) => (
          <Card key={index} props={ele} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
