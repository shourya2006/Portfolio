import React from "react";
import CodingScreenSVG from "./SVG/CodingScreenSVG";
import TypedText from "./TypedText";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-intro">
          <h1>
            Shourya <span className="highlight">Bafna</span>
          </h1>
          <div className="typewriter">
            <h2>
              I'm a <TypedText />
            </h2>
          </div>
        </div>
        <p className="hero-description">
          Passionate Front-End Developer with multiple industry projects and
          1200+ rating on CodeForces along with over 200+ solved LeetCode
          problems.
        </p>
        <div className="hero-actions">
          <a href="mailto:shourya.2024@nst.rishihood.edu.in" className="primary-btn">
            Let's Talk
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="btn-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#projects" className="secondary-btn">
            See My Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="btn-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <SocialIcons />
      </div>
      <div className="hero-image">
        <div className="floating-animation">
          <CodingScreenSVG />
        </div>
        {/* <div className="hero-background-shape"></div> */}
      </div>
    </section>
  );
};

export default Hero;
