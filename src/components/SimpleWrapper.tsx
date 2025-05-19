import React, { useState } from 'react';

interface SimpleWrapperProps {
  children: React.ReactNode;
  className?: string;
}

// This component provides hover effects similar to MagneticElement
// but doesn't interfere with button clicks
const SimpleWrapper: React.FC<SimpleWrapperProps> = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`simple-wrapper relative transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 0 10px rgba(30, 174, 219, 0.3)' : 'none',
        transition: 'all 0.3s ease',
        pointerEvents: 'none' // This ensures the wrapper doesn't block clicks
      }}
    >
      <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default SimpleWrapper;
