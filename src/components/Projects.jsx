import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import codeclash from '../assets/codeclash_renamed.png'
import youtubeclone from '../assets/youtube.png'
import blog from '../assets/blog.png'
const Projects = () => {
  const projects = [
    {
      title: "CodeClash",
      description: "A real-time competitive coding platform where programmers can challenge each other to solve Codeforces problems in a head-to-head battle",
      image: codeclash,
      techStack: ["React", "NodeJS", "API", "JavaScript", "ExpressJS", 'Socket.io'],
      codeLink: "https://github.com/shourya2006/CodeClash",
      demoLink: "https://codeclash-1-bq57.onrender.com/"
    },
    {
      title: "Youtube Clone",
      description: "A modern youtube clone with a sleek design, shopping cart functionality, and checkout process.",
      image: youtubeclone,
      techStack: ['SCSS',"React", "Redux", "Firebase Auth", 'Youtube-API'],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Blog Website",
      description: "A blog website with a sleek design, content management capabilities, and SEO optimization.",
      image: blog,
      techStack: ["JavaScript", "HTML", "CSS","Python", "Django"],
      codeLink: "https://github.com/shourya2006/YTweb",
      demoLink: "https://cyberprogrammer.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="portfolio-container">
        <SectionHeader
          title="My Projects"
        />
        
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 