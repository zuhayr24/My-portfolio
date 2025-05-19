
import React, { useRef, useState, useEffect } from 'react';

interface MagneticElementProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const MagneticElement: React.FC<MagneticElementProps> = ({ 
  children, 
  strength = 20, // Further reduced default strength from 30 to 20
  className = ""
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;
      
      const { left, top, width, height } = elementRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance between cursor and element center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Calculate distance from cursor to element center
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Further reduced maximum range for magnetic effect
      const maxRange = 100;
      
      if (distance < maxRange) {
        // Calculate movement strength based on distance
        const power = 1 - (distance / maxRange);
        
        // Further reduced movement strength with increased divisor
        const x = (distanceX * power * strength) / 25;
        const y = (distanceY * power * strength) / 25;
        
        setPosition({ x, y });
      } else {
        // Reset position when cursor is far
        setPosition({ x: 0, y: 0 });
      }
    };
    
    const handleMouseLeave = () => {
      // Return to original position with a spring effect
      setPosition({ x: 0, y: 0 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength]);

  return (
    <div 
      ref={elementRef}
      className={`magnetic-element ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transformStyle: 'preserve-3d'
      }}
      onMouseLeave={(): void => setPosition({ x: 0, y: 0 })}
    >
      {children}
    </div>
  );
};

export default MagneticElement;
