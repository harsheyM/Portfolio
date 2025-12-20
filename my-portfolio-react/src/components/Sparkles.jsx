import React, { useEffect } from 'react';
import './Sparkles.css';

function Sparkles() {
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);

      // Remove sparkle after animation
      setTimeout(() => {
        sparkle.remove();
      }, 500); // matches animation duration
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // no visible component, just renders sparkles
}

export default Sparkles;
