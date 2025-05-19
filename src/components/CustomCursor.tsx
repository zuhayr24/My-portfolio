
import React, { useEffect, useState, useRef } from 'react';
import './CustomCursorStyles.css';
import './CursorFix.css'; // Import the cursor fix stylesheet

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        // Add a subtle lag to main cursor for smooth effect
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        // Dot follows precisely
        cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };    // Add listeners for all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .magnetic-element, input, textarea, select, [role="button"], .filter-btn, .filter-button, .tech-badge, .project-card, .coming-soon-card'
    );
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    document.addEventListener('mousemove', handleMouseMove);    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Re-query elements to ensure we get the current set
      const elementsToCleanup = document.querySelectorAll(
        'a, button, .magnetic-element, input, textarea, select, [role="button"], .filter-btn, .filter-button, .tech-badge, .project-card, .coming-soon-card'
      );
      
      elementsToCleanup.forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  // Adjust cursor size based on hovering state
  useEffect(() => {
    if (cursorRef.current) {
      if (isHovering) {
        cursorRef.current.style.width = '45px';
        cursorRef.current.style.height = '45px';
        cursorRef.current.style.backgroundColor = 'rgba(149, 97, 255, 0.2)';
      } else {
        cursorRef.current.style.width = '20px';
        cursorRef.current.style.height = '20px';
        cursorRef.current.style.backgroundColor = 'rgba(149, 97, 255, 0.7)';
      }
    }
  }, [isHovering]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="cursor-dot"></div>
    </>
  );
};

export default CustomCursor;
