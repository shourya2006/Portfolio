import React from 'react';

const CodingScreenSVG = () => {
  return (
    <svg
      width="500"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="coding-screen-svg"
    >
      <defs>
        <linearGradient id="purpleBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Minimal code editor */}
      <g className="editor-container">
        {/* Editor frame */}
        <rect 
          x="100" 
          y="80" 
          width="300" 
          height="240" 
          rx="8" 
          fill="rgba(15, 23, 42, 0.5)" 
          className="editor-frame" 
        />
        
        {/* Editor header */}
        <rect 
          x="100" 
          y="80" 
          width="300" 
          height="32" 
          rx="8 8 0 0" 
          fill="rgba(30, 41, 59, 0.7)" 
          className="editor-header" 
        />
        
        {/* Window controls */}
        <circle cx="116" cy="96" r="5" fill="#EF4444" className="window-control" />
        <circle cx="136" cy="96" r="5" fill="#F59E0B" className="window-control" />
        <circle cx="156" cy="96" r="5" fill="#10B981" className="window-control" />
        
        {/* Code lines - minimal */}
        <rect x="120" y="130" width="260" height="3" rx="1.5" fill="url(#purpleBlue)" className="code-line line1" />
        <rect x="120" y="150" width="200" height="3" rx="1.5" fill="url(#purpleBlue)" className="code-line line2" />
        <rect x="140" y="170" width="220" height="3" rx="1.5" fill="url(#accentGlow)" className="code-line line3" />
        <rect x="140" y="190" width="180" height="3" rx="1.5" fill="url(#accentGlow)" className="code-line line4" />
        <rect x="120" y="210" width="240" height="3" rx="1.5" fill="url(#purpleBlue)" className="code-line line5" />
        <rect x="120" y="230" width="140" height="3" rx="1.5" fill="url(#purpleBlue)" className="code-line line6" />
        <rect x="140" y="250" width="180" height="3" rx="1.5" fill="url(#accentGlow)" className="code-line line7" />
        
        {/* Cursor */}
        <rect x="220" y="164" width="2" height="12" fill="#EC4899" className="cursor-blink" />
      </g>

      {/* Floating elements - simple and minimal */}
      <circle cx="400" cy="120" r="15" fill="rgba(59, 130, 246, 0.3)" className="floating-circle circle1" />
      <circle cx="70" cy="200" r="12" fill="rgba(139, 92, 246, 0.3)" className="floating-circle circle2" />
      <circle cx="420" cy="280" r="10" fill="rgba(236, 72, 153, 0.3)" className="floating-circle circle3" />
      <circle cx="90" cy="320" r="8" fill="rgba(59, 130, 246, 0.3)" className="floating-circle circle4" />
      
      {/* Bracket elements */}
      <path 
        d="M70,100 C50,140 50,180 70,220" 
        stroke="rgba(59, 130, 246, 0.4)" 
        strokeWidth="2" 
        fill="none" 
        className="bracket bracket1" 
      />
      
      <path 
        d="M430,100 C450,140 450,180 430,220" 
        stroke="rgba(236, 72, 153, 0.4)" 
        strokeWidth="2" 
        fill="none" 
        className="bracket bracket2" 
      />
      
      {/* Simple decorative dots */}
      <circle cx="250" cy="40" r="4" fill="rgba(59, 130, 246, 0.5)" className="dot dot1" />
      <circle cx="270" cy="40" r="4" fill="rgba(139, 92, 246, 0.5)" className="dot dot2" />
      <circle cx="290" cy="40" r="4" fill="rgba(236, 72, 153, 0.5)" className="dot dot3" />
      
      <circle cx="250" cy="360" r="4" fill="rgba(59, 130, 246, 0.5)" className="dot dot4" />
      <circle cx="270" cy="360" r="4" fill="rgba(139, 92, 246, 0.5)" className="dot dot5" />
      <circle cx="290" cy="360" r="4" fill="rgba(236, 72, 153, 0.5)" className="dot dot6" />
    </svg>
  );
};

export default CodingScreenSVG; 