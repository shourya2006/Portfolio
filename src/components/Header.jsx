import ThemeToggle from './ThemeToggle';
import React from 'react';


const Header = () => {

  return (
    <header>
      <nav>
        <div className="logo">Portfolio</div>
        <div className={`nav-links`}>
          <a href="#">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header; 