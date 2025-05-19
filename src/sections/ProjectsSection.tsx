import React, { useState, useEffect, useRef, forwardRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import ComingSoonCard from '../components/ComingSoonCard';
import './ProjectStyles.css';

interface ProjectsSectionProps {
  className?: string;
}

// Project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with React, Node.js and GraphQL. Features include product filtering, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  }, 
  {
    id: 2,
    title: 'Interactive Dashboard',
    description: 'Data visualization dashboard with realtime updates using WebSockets. Includes customizable widgets and user permissions.',
    technologies: ['React', 'D3.js', 'WebSockets', 'Express'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  }, 
  {
    id: 3,
    title: '3D Product Configurator',
    description: 'Web-based 3D product configuration tool with Three.js. Allows users to customize products in real-time with high-quality rendering.',
    technologies: ['Three.js', 'React', 'WebGL', 'GSAP'],
    imageUrl: 'https://images.unsplash.com/photo-1544380904-c686aad2fc40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    githubUrl: 'https://github.com/example/project'
  }, 
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'Web application that uses machine learning APIs to generate various types of content including text, images, and code snippets.',
    technologies: ['React', 'TypeScript', 'GPT API', 'TailwindCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project'
  }
];

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(({ className = '' }, ref) => {
  const [filter, setFilter] = useState<string>('all');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add animation class after initial render
    setAnimate(true);
    
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
  }, []);
  
  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React' },
    { id: 'three', label: 'Three.js' },
    { id: 'backend', label: 'Backend' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );
      
  const handleFilterChange = (newFilter: string) => {
    setAnimate(false);
    
    // Small delay to allow animation to reset
    setTimeout(() => {
      setFilter(newFilter);
      setAnimate(true);
    }, 300);
  };
  return (
    <section 
      ref={ref}
      className={`py-20 bg-secondary/5 projects-container ${className}`} 
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className={`project-heading ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="glitch-text" data-text="Projects">Projects</h2>
          <p className="project-subheading">
            A showcase of my recent work, featuring web applications and interactive experiences.
            Each project represents different aspects of my technical skills and creative approach.
          </p>
          
          {/* Terminal-like element */}
          <div className="mx-auto mt-4 max-w-lg p-3 bg-black/30 rounded-md border border-primary/20 text-left">
            <div className="flex items-center mb-2">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-xs text-gray-400">projects.tsx</span>
            </div>            <code className="text-sm font-mono">
              <span className="text-blue-400">const</span> <span className="text-green-400">showcaseProjects</span> <span className="text-white">=</span> <span className="text-orange-400">myWork</span><span className="text-white">.filter(</span>project <span className="text-purple-400">{'=>'}</span> project<span className="text-white">.isAwesome);</span>
            </code>
          </div>
        </div>
        
        <div className={`flex flex-wrap gap-2 mb-10 justify-center ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          {filterButtons.map((button, idx) => (
            <button
              key={button.id}
              onClick={() => handleFilterChange(button.id)}
              className={`filter-btn ${filter === button.id ? 'active' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {button.label}
            </button>
          ))}
        </div>
        
        <div 
          className={`projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${animate ? 'fade-in' : 'fade-out'}`}
          style={{ opacity: animate ? 1 : 0 }}
        >
          {filteredProjects.map((project, index) => (
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
          <div style={{ animationDelay: `${filteredProjects.length * 0.15}s` }}>
            <ComingSoonCard />
          </div>        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;