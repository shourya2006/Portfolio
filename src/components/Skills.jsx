import React from 'react';
import SkillIcon from './SkillIcon';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage:75 },
    { name: 'ReactJS', percentage: 80 },
    { name: 'NodeJS', percentage: 54 },
    { name: 'Python', percentage: 95 },
    { name: 'Django', percentage: 60 },
    { name: 'UI/UX', percentage: 80 }
  ];

  return (
    <section className="skills-section" id="skills">
      {/* Decorative elements */}
      <div className="skills-decoration skills-decoration-1"></div>
      <div className="skills-decoration skills-decoration-2"></div>
      <div className="skills-decoration skills-decoration-3"></div>
      <div className="skills-decoration skills-decoration-4"></div>
      
      <div className="portfolio-container">
        <SectionHeader 
          title="My Skills"
          subtitle="Technologies I've been working with"
        />
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skills-card" key={index}>
              <SkillIcon name={skill.name} percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 