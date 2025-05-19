import React, { useState, useEffect, forwardRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DownloadButton from '../components/DownloadButton';
import './AboutStyles.css';

interface AboutSectionProps {
  className?: string;
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(({ className = '' }, ref) => {
  const [activeTab, setActiveTab] = useState('education');  // Technical skills with categories
  const technicalSkills = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'HTML/CSS', icon: '🎨' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Tailwind', icon: '🌊' },
    ],
    backend: [
      { name: 'Java', icon: '☕' },
      { name: 'Spring', icon: '🍃' },
      { name: 'C++', icon: '⚙️' },
      { name: 'REST API', icon: '🔄' },
    ],
    toolsDb: [
      { name: 'Oracle DB', icon: '🛢️' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'SAP ABAP', icon: '💼' },
      { name: 'IntelliJ IDEA', icon: '🧠' },
    ],
    ai: [
      { name: 'ChatGPT', icon: '🤖' },
      { name: 'GitHub Copilot', icon: '👨‍💻' },
    ]
  };
  
  // Certifications
  const certifications = [
    {
      title: 'SAP Certified Associate - Back-End Developer - ABAP Cloud',
      issuer: 'SAP',
      date: 'Issued Jul 2024 • Expires Jul 2025',
      credentialId: 'See credential',
      credentialUrl: '#',
      logo: '💼'
    },
    {
      title: 'ChatGPT',
      issuer: 'GUVI Support',
      date: 'Issued Aug 2023',
      credentialId: 't8M2688111090aBy31',
      credentialUrl: '#',
      logo: '🤖'
    },
    {
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: 'Issued May 2023',
      credentialId: '',
      credentialUrl: '',
      logo: '🌐'
    },
    {
      title: 'Python Bootcamp: Go from zero to hero in python 3',
      issuer: 'Udemy',
      date: 'Issued May 2020',
      credentialId: 'UC-f99e0168-e5b6-4955-906-081605246db9',
      credentialUrl: '#',
      logo: '🐍'
    }
  ];// Education and certifications
  const credentials = [
    { 
      title: 'B.Tech Information Technology', 
      institution: 'Madras Institute of Technology', 
      year: '2020-2024',
      highlights: [
        'Participated in Caterpillar Hackathon, working on real-time gear pulley problem solutions',
        'Participated in annual football year match',
        'Focused on software development and data structures'
      ]
    },
    { 
      title: '12th Grade',      institution: 'SBOA School and Junior College',
      year: 'Computer Science Major',
      highlights: [
        'Higher secondary education with Computer Science specialization'
      ]
    },
    { 
      title: '10th Grade', 
      institution: 'Velammal Bodhi Campus', 
      year: 'Science Major',
      highlights: [
        'Secondary education with focus on Science'
      ]
    },
  ];
    // Work experience with tech stack
  const experience = [
    {
      position: 'Software Engineer',
      company: 'Mint Solutions DMCC',
      period: 'April 2025 - Present',
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'REST API', 'Postman'],
      accomplishments: [
        'Contributing to Foodwatch, a digital platform for food safety and nutrition for Dubai Municipality',
        'Developing full-stack solutions for a trusted digital network connecting stakeholders, products, and processes',
        'Building frontend interfaces and backend services for a platform that facilitates trust and reduces transaction costs'
      ]
    },
    {
      position: 'SAP ABAP Intern',
      company: 'Hyundai Autoever',
      period: 'February 2024 - August 2024',
      technologies: ['SAP ABAP', 'SAP SD', 'SAP FI', 'ALV Grid'],
      accomplishments: [
        'Developed an editable ALV grid with split-screen layout for enhanced usability in SAP SD module',
        'Built a solution to maintain dealer credit scores and records for efficient financial tracking in SAP FI',
        'Implemented solutions across multiple SAP modules with focus on performance and user experience'
      ]
    }
  ];  return (
    <section 
      ref={ref}
      className={`py-20 relative z-10 ${className}`} 
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2 glitch-text" data-text="About Me">
            <span className="text-primary">&lt;</span>
            About Me
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-primary mb-6 tech-card"></div>
          <p className="text-lg max-w-2xl text-center">
            Software engineer with expertise in building scalable, performant web applications.
            Passionate about clean code, seamless user experiences, and cutting-edge technologies.
          </p>
        </div>
        
        <Tabs defaultValue="education" className="w-full" 
          onValueChange={(value) => setActiveTab(value)}>          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-xl tech-card">
              <TabsTrigger value="education" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tech-badge">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                  Education
                </span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tech-badge">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                  Skills
                </span>
              </TabsTrigger>
              <TabsTrigger value="certifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tech-badge">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
                    <path d="M19 8a7 7 0 1 0-13.6 2.39"></path>
                  </svg>
                  Certificates
                </span>
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground tech-badge">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tech-icon">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  Experience
                </span>
              </TabsTrigger>
            </TabsList>
          </div>
            <TabsContent value="education" className="mt-6">
            <div className="space-y-6">
              {credentials.map((item, index) => (
                <Card 
                  key={index} 
                  className="tech-card overflow-hidden border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="w-full">
                        <h3 className="text-xl font-semibold">
                          <span className="glitch-text" data-text={item.title}>{item.title}</span>
                        </h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">[</span> 
                          {item.institution} | {item.year}
                          <span className="text-primary">]</span>
                        </p>
                        <ul className="list-none space-y-2 mt-3 text-sm md:text-base">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2 fade-in" style={{ animationDelay: `${(index * 0.1) + (i * 0.1)}s` }}>
                              <span className="text-primary mt-1">{'>'}</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>            <TabsContent value="skills" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([category, skills], catIndex) => (
                <Card 
                  key={category} 
                  className="tech-card matrix-bg overflow-hidden border-primary/20 hover:border-primary/80 transition-colors duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${catIndex * 0.15}s` }}
                >
                  <div className="tech-card-header bg-primary/10 p-4 border-b border-primary/20">
                    <h3 className="text-xl font-semibold capitalize counter-effect">
                      <span className="text-primary opacity-70">{'<'}</span>
                      {category === 'frontend' ? 'Frontend' : 
                       category === 'backend' ? 'Backend' : 
                       category === 'toolsDb' ? 'Tools & Database' :
                       'AI & Tools'}
                      <span className="text-primary opacity-70">{'/>'}</span>
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {skills.map((skill, i) => (
                        <Badge 
                          key={skill.name} 
                          variant="outline" 
                          className="tech-badge py-2 text-sm flex items-center gap-2 justify-center bg-primary/5"
                          style={{ animationDelay: `${(catIndex * 0.1) + (i * 0.05)}s` }}
                        >
                          <span className="tech-icon inline-block w-6 text-center">{skill.icon}</span>
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>          <TabsContent value="experience" className="mt-6">
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card 
                  key={index} 
                  className="tech-card overflow-hidden border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="w-full">
                        <h3 className="text-xl font-semibold terminal-effect">{job.position}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary opacity-70">$</span> 
                          {job.company} | {job.period}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 my-3">
                          {job.technologies.map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="tech-badge bg-primary/10 hover:bg-primary/20"
                              style={{ animationDelay: `${(index * 0.1) + (i * 0.05)}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <ul className="list-none space-y-2 mt-3 text-sm md:text-base">
                          {job.accomplishments.map((item, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2 fade-in" style={{ animationDelay: `${(index * 0.1) + (i * 0.1)}s` }}>
                              <span className="text-primary mt-1">$_</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications" className="mt-6">
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="tech-card overflow-hidden border-primary/20 hover:border-primary/80 transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-3xl">
                        {cert.logo}
                      </div>
                      <div className="w-full">
                        <h3 className="text-xl font-semibold glitch-text" data-text={cert.title}>
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary opacity-70">@</span> 
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.date}
                        </p>
                        {cert.credentialId && (
                          <p className="text-sm mt-2 flex items-center gap-2">
                            <span className="text-primary font-mono">ID:</span> 
                            {cert.credentialId}
                            {cert.credentialUrl && (
                              <a 
                                href={cert.credentialUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary underline hover:no-underline ml-2 tech-badge inline-flex px-2 py-1 text-xs"
                              >
                                View Credential
                              </a>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>        </Tabs>
        
        <div className="flex justify-center mt-16">
          <div className="download-resume-container">
            <div className="download-resume-text">
              <span className="text-primary font-mono text-sm opacity-70">&lt;resume&gt;</span>
              <h3 className="text-xl font-bold mb-1">Get My Full Resume</h3>
              <p className="text-sm text-muted-foreground mb-3">Complete details of my experience and qualifications</p>
              <span className="text-primary font-mono text-sm opacity-70">&lt;/resume&gt;</span>
            </div>
            <DownloadButton 
              url="/path-to-your-resume.pdf" 
              text="Download CV" 
              className="cyber-button"
              magneticStrength={50}
            />
          </div>
        </div>
      </div>    </section>
  );
});

export default AboutSection;
