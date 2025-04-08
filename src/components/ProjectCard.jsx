import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image, techStack, demoLink, codeLink } = project;
  
  return (
    <div className="project-card-modern">
      <div className="project-card-image">
        <img src={image} alt={title} />
        <div className="project-card-overlay"></div>
        <div className="project-card-hover-actions">
          <a href={codeLink} className="project-hover-button code">Code</a>
          <a href={demoLink} className="project-hover-button demo">Live Demo</a>
        </div>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span className="tech-stack-item" key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 