import React from 'react';
import MagneticElement from './MagneticElement';
import { Button } from '@/components/ui/button';

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
  return (
    <MagneticElement strength={magneticStrength}>
      <Button 
        variant="default" 
        className={`rounded-full group px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 ${className}`}
        asChild
      >
        <a 
          href={url}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
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
            className="transition-transform duration-300 group-hover:-translate-y-1"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          {text}
        </a>
      </Button>
    </MagneticElement>
  );
};

export default DownloadButton;
