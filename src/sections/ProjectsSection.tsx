import React, { useState, useEffect, useRef, forwardRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import ComingSoonCard from '../components/ComingSoonCard';
import './ProjectStyles.css';

interface ProjectsSectionProps {
  className?: string;
}

// Project data
const projectsData = [  {
    id: 1,
    title: 'Foodwatch',
    description: 'A digital platform for food safety and nutrition for Dubai Municipality. A comprehensive solution connecting stakeholders and facilitating food safety compliance.',
    technologies: ['React', 'Java', 'Spring', 'Tailwind', 'Vite', 'REST API', 'Oracle DB', 'Postman'],
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Hostel Outpass & Grievance System',
    description: 'A comprehensive system for managing hostel outpass requests and student grievances, streamlining administrative processes and improving communication.',
    technologies: ['Java', 'Spring', 'MySQL', 'Tailwind', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/zuhayr24/Hostel-outpass-system'
  }, 
  {
    id: 3,
    title: 'Smart Pet Feeder',
    description: 'An IoT-based automatic pet feeding system that allows scheduling, portion control, and remote monitoring for pet owners.',
    technologies: ['C++', 'Arduino'],
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    githubUrl: 'https://github.com/zuhayr24/pet-feeder'
  }, 
  {
    id: 4,
    title: 'Spam Mail Detection',
    description: 'Machine learning-based email classification system that identifies and filters spam emails with high accuracy using NLP techniques.',
    technologies: ['Python', 'Google Colab', 'Kaggle'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/zuhayr24/Spam-mail-Detection'
  }
];

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(({ className = '' }, ref) => {  const [animate, setAnimate] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);  return (
    <section 
      ref={ref}
      className={`pt-8 pb-20 bg-secondary/5 projects-container ${className}`} 
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className={`project-heading ${isVisible ? 'animate-in' : ''}`}>          <h2 className="glitch-text" data-text="Projects">Projects</h2>
          <p className="project-subheading">
            A showcase of my recent work, featuring web applications and interactive experiences.
            Each project represents different aspects of my technical skills and creative approach.
          </p>
        </div>
        
        <div 
          className={`projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${animate ? 'fade-in' : 'fade-out'}`}
          style={{ opacity: animate ? 1 : 0 }}
        >
          {projectsData.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 0.15}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
            {/* Coming Soon Card - always visible */}
          <div style={{ animationDelay: `${projectsData.length * 0.15}s` }}>
            <ComingSoonCard />
          </div></div>
      </div>
    </section>
  );
});

export default ProjectsSection;