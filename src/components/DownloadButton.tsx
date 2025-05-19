import React, { useState, useEffect } from 'react';
import MagneticElement from './MagneticElement';
import { Button } from '@/components/ui/button';
import './DownloadButtonStyles.css';

interface DownloadButtonProps {
  url: string;
  text?: string;
  className?: string;
  magneticStrength?: number;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  url, 
  text = "Download Resume", 
  className = "", 
  magneticStrength = 40 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev < 100) return prev + 1;
          clearInterval(interval);
          return 100;
        });
      }, 5);
      
      return () => {
        clearInterval(interval);
        setDownloadProgress(0);
      };
    }
  }, [isHovered]);

  return (
    <MagneticElement strength={magneticStrength}>
      <div 
        className="download-button-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button 
          variant="default" 
          className={`cyber-button group px-6 py-3 transition-all duration-300 ${className}`}
          asChild
        >
          <a 
            href={url}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 relative z-10"
          >
            <div className="cyber-icon">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:animate-pulse"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </div>
            <span className="cyber-text">{text}</span>
            <div 
              className="download-progress-overlay" 
              style={{ width: `${downloadProgress}%` }}
            ></div>
          </a>
        </Button>
        <div className="cyber-glitch-1"></div>
        <div className="cyber-glitch-2"></div>
      </div>
    </MagneticElement>
  );
};

export default DownloadButton;
