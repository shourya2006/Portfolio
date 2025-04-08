import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];
  
  return (
    <footer className="footer">
      <p className="copyright">© {currentYear} Shourya Bafna. All rights reserved.</p>
      <div className="footer-links">
        {footerLinks.map((link, index) => (
          <a href={link.url} key={index}>{link.name}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer; 