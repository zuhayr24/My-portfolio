import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

// Mock project data
const projectsData = [{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'A modern e-commerce platform with React, Node.js and GraphQL. Features include product filtering, cart functionality, and payment processing.',
  technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
  imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/project'
}, {
  id: 2,
  title: 'Interactive Dashboard',
  description: 'Data visualization dashboard with realtime updates using WebSockets. Includes customizable widgets and user permissions.',
  technologies: ['React', 'D3.js', 'WebSockets', 'Express'],
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/project'
}, {
  id: 3,
  title: '3D Product Configurator',
  description: 'Web-based 3D product configuration tool with Three.js. Allows users to customize products in real-time with high-quality rendering.',
  technologies: ['Three.js', 'React', 'WebGL', 'GSAP'],
  imageUrl: 'https://images.unsplash.com/photo-1544380904-c686aad2fc40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  githubUrl: 'https://github.com/example/project'
}, {
  id: 4,
  title: 'AI Content Generator',
  description: 'Web application that uses machine learning APIs to generate various types of content including text, images, and code snippets.',
  technologies: ['React', 'TypeScript', 'GPT API', 'TailwindCSS'],
  imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/project'
}];
const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const filterButtons = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'react',
    label: 'React'
  }, {
    id: 'threejs',
    label: 'Three.js'
  }, {
    id: 'backend',
    label: 'Backend'
  }];
  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase())));
  return <section className="py-20 bg-secondary/30" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {filterButtons.map(button => {})}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <ProjectCard key={project.id} title={project.title} description={project.description} technologies={project.technologies} imageUrl={project.imageUrl} liveUrl={project.liveUrl} githubUrl={project.githubUrl} />)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;