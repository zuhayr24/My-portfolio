
import React from 'react';
import MagneticElement from '../components/MagneticElement';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'GraphQL', level: 75 },
    { name: 'Three.js', level: 70 },
  ];

  return (
    <section className="py-20 relative z-10" id="about">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              I'm a passionate software engineer with over 5 years of experience creating modern web applications. 
              My expertise lies in building intuitive user interfaces with a focus on performance optimization and 
              cutting-edge interactive experiences.
            </p>
            
            <p className="text-lg mb-6">
              I enjoy solving complex problems through elegant code solutions and staying updated with the latest 
              industry trends. My background in computer science combined with continuous learning has enabled me 
              to deliver high-quality software products for various industries.
            </p>
            
            <MagneticElement>
              <Button variant="outline" className="mt-4">
                Download Resume
              </Button>
            </MagneticElement>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
