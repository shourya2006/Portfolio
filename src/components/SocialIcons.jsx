import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SocialIcons = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className="social-icons">
      <a href="https://github.com/shourya2006" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.781 9.492 20.156 9.488 19.291C6.727 19.918 6.14 17.968 6.14 17.968C5.684 16.812 5.026 16.51 5.026 16.51C4.132 15.848 5.097 15.861 5.097 15.861C6.094 15.929 6.626 16.926 6.626 16.926C7.521 18.447 8.97 18.017 9.52 17.764C9.61 17.133 9.866 16.703 10.15 16.458C7.93 16.208 5.604 15.341 5.604 11.525C5.604 10.41 6.009 9.495 6.647 8.778C6.544 8.525 6.189 7.557 6.749 6.172C6.749 6.172 7.585 5.905 9.476 7.24C10.295 7.021 11.15 6.909 12 6.905C12.85 6.909 13.705 7.02 14.526 7.24C16.416 5.906 17.25 6.172 17.25 6.172C17.812 7.558 17.457 8.526 17.353 8.778C17.993 9.495 18.394 10.41 18.394 11.525C18.394 15.35 16.065 16.206 13.838 16.452C14.192 16.754 14.508 17.345 14.508 18.252C14.508 19.55 14.497 20.686 14.497 21.016C14.497 21.279 14.655 21.585 15.163 21.488C19.135 20.164 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
        </svg>
      </a>
      
      <a href="https://www.linkedin.com/in/shourya-bafna-80a670215/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.447 11.082 20.447 14.166V20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.4 4.23 7.4 5.368C7.4 6.507 6.476 7.433 5.337 7.433ZM7.117 20.452H3.555V9H7.117V20.452Z" />
        </svg>
      </a>
      
      
      <a href="mailto:shourya.2024@nst.rishihood.edu.in" className="social-icon email" aria-label="Email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
        </svg>
      </a>

      <style jsx>{`
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${darkMode ? '#e2e8f0' : '#4a5568'};
          background-color: ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 50%;
          transition: transform 0.3s, background-color 0.3s, color 0.3s;
          box-shadow: ${darkMode ? '0 4px 6px rgba(0, 0, 0, 0.4)' : '0 4px 6px rgba(0, 0, 0, 0.1)'};
        }
        
        .social-icon:hover {
          transform: translateY(-5px);
          background-color: var(--accent-color);
          color: white;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }
        
        .social-icon svg {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </div>
  );
};

export default SocialIcons; 