
import React from 'react';
import MagneticElement from './MagneticElement';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl
}) => {
  return (
    <MagneticElement strength={10} className="project-card h-full flex flex-col">
      <div 
        className="project-image h-48 rounded-lg mb-4 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {liveUrl && (
          <Button variant="default" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </MagneticElement>
  );
};

export default ProjectCard;
