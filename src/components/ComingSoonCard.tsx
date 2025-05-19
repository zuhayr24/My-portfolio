import React, { useState, useEffect, useRef } from 'react';
import MagneticElement from './MagneticElement';

const ComingSoonCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <MagneticElement strength={10}>
      <div 
        ref={cardRef}
        className={`coming-soon-card h-full project-fade-in ${isVisible ? 'visible' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="coming-soon-plus">+</div>
        <h3 className={`coming-soon-text ${isHovered ? 'glitching' : ''}`}>
          More Projects Coming Soon
        </h3>
        <p className="mt-3 text-muted-foreground">
          I'm always working on new and exciting projects.
          <br />Check back soon for updates!
        </p>
        
        <div className="tech-grid mt-6">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="tech-dot" 
              style={{ 
                animationDelay: `${i * 0.2}s`,
                backgroundColor: `rgba(var(--primary-rgb), ${0.3 + (i * 0.1)})`
              }}
            ></div>
          ))}
        </div>
        
        {/* Add a small terminal-like animation */}
        <div className="mt-6 p-3 bg-black/30 rounded-md w-full max-w-xs mx-auto overflow-hidden">
          <div className="typing-text font-mono text-xs">
            <span className="text-green-400">$</span> <span className="text-blue-400">git commit</span> <span className="text-gray-400">-m</span> <span className="text-amber-400">"Adding exciting new projects..."</span>
          </div>
        </div>
      </div>
    </MagneticElement>
  );
};

export default ComingSoonCard;
