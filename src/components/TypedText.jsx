import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Frontend <span class="highlight">Developer</span>',
        'UI/UX <span class="highlight">Designer</span>',
        'React <span class="highlight">Engineer</span>',
        'JavaScript <span class="highlight">Expert</span>'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    };

    // Initialize Typed
    typed.current = new Typed(el.current, options);

    // Cleanup on component unmount
    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} className="typed-text"></span>;
};

export default TypedText; 