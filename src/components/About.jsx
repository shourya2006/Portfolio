import React from 'react';
import SectionHeader from './SectionHeader';
import profile from '../assets/profile.jpg'
const About = () => {
  const tags = ['Frontend', 'UI/UX', 'Web Design', 'React', 'JavaScript'];

  return (
    <section id="about" className="portfolio-container">
      <div className="about-section">
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <img src={profile} alt="My Profile" className="about-image" />
            <div className="about-image-overlay"></div>
            <div className="about-image-shape"></div>
          </div>
          <div className="about-image-decoration">
            <span className="decoration-dot"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-dot"></span>
          </div>
        </div>
        <div className="about-content">
          <SectionHeader
            title="About Me"
            subtitle="My introduction"
          />
          
          <div className="about-text">
            <p>I am a passionate <span className="highlight">Frontend Developer</span> with a strong focus on creating intuitive and responsive user interfaces. I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>
            
            <p>I'm dedicated to building applications with a focus on <span className="highlight">usability</span> and <span className="highlight">performance</span>. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.</p>
          </div>
          
          <div className="about-tags">
            {tags.map((tag, index) => (
              <span className="about-tag" key={index}>{tag}</span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About; 