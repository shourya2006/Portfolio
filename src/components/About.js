import React from 'react';
import image from '../Image/pfp.JPG';

const About = () => {
  return (
    <section id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me and my background</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a passionate frontend developer and UI/UX designer with a love for creating beautiful, functional digital experiences. With a background in both design and development, I bring a unique perspective to every project.
          </p>
          <br />
          <p>
            I specialize in creating responsive websites that are not only visually appealing but also provide an excellent user experience. My approach combines creative design thinking with technical expertise to deliver solutions that meet both user needs and business goals.
          </p>
          <br />
          <p>
            When I'm not coding or designing, you can find me exploring new technologies, contributing to open source projects, or seeking inspiration in art and nature.
          </p>
        </div>
        <div className="about-image">
          <div className="about-img-container">
            <div className="about-img-placeholder"><img src={image} alt='pfp' /></div>
          </div>
          <div className="shape-1"></div>
          <div className="shape-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
