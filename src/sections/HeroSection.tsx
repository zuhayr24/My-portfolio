
import React, { useEffect, useRef, useState, forwardRef } from 'react';
import MagneticElement from '../components/MagneticElement';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import '../components/HeroStyles.css';
import '../components/TechProfileStyles.css';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ className = '' }, ref) => {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);  const [isVisible, setIsVisible] = useState(false);
  const circuitRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Binary numbers for tech effect
  const binaryElements = Array.from({ length: 50 }, () => ({
    value: Math.random().toString(2).substring(2, 10),
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    size: Math.random() * 0.8 + 0.6,
    speed: Math.random() * 40 + 20
  }));
    // Terminal typing effect text
  const terminalLines = [
    "Initializing system...",
    "Loading profile: Mohammed Zuhayr Hussain",
    "Specialization: Full Stack Developer",
    "Status: Ready to collaborate",
    "> Welcome to my portfolio"
  ];
  
  // Profile data for tech display
  const profileData = {
    name: "",
    role: "",
    status: "Active",
    experience: "",
    location: "",
    skills: [],
    availability: "Open to opportunities"
  };
  
  // Typing effect
  useEffect(() => {
    setIsVisible(true);
    
    const typeText = () => {
      if (currentLine < terminalLines.length) {
        const line = terminalLines[currentLine];
        
        if (currentChar < line.length) {
          setTypedText(prev => prev + line[currentChar]);
          setCurrentChar(currentChar + 1);
        } else {
          setTypedText(prev => prev + '\n');
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }
      }
    };
    
    const typingInterval = setInterval(typeText, 50);
    
    return () => clearInterval(typingInterval);
  }, [currentLine, currentChar]);
    // Interactive SVG circuit paths
  useEffect(() => {
    if (circuitRef.current) {
      const circuit = circuitRef.current;
      const paths = circuit.querySelectorAll('path');
      
      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        
        // Set up the starting position
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
        
        // Define the animation
        setTimeout(() => {
          path.style.transition = 'stroke-dashoffset 2s ease-in-out';
          path.style.strokeDashoffset = '0';
        }, index * 200);
      });
    }

    // Initialize tech profile circuit animation
    const techCircuitPaths = document.querySelectorAll('.tech-profile-circuit path');
    techCircuitPaths.forEach((path, index) => {
      if (path instanceof SVGPathElement) {
        const length = path.getTotalLength();
        
        // Set up the starting position
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
        
        // Define the animation
        setTimeout(() => {
          path.style.transition = 'stroke-dashoffset 2s ease-in-out';
          path.style.strokeDashoffset = '0';
        }, index * 150);
      }
    });
  }, []);
  
  // Mouse move effect for particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate relative position in the container
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Move particles slightly in mouse direction
      const particles = containerRef.current.querySelectorAll('.tech-particle');
      particles.forEach((particle) => {
        const speed = parseFloat((particle as HTMLElement).dataset.speed || '1');
        const offsetX = (x - 0.5) * 40 * speed;
        const offsetY = (y - 0.5) * 40 * speed;
        
        (particle as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={ref} 
      className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black ${className}`} 
      id="home"
    >
      {/* Background circuit pattern */}
      <div className="fixed inset-0 circuit-pattern opacity-20"></div>
      
      {/* Binary code floating elements */}
      {binaryElements.map((element, index) => (
        <div 
          key={index}
          className="absolute text-[0.6rem] font-mono text-primary/70 tech-particle"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            opacity: element.opacity,
            transform: `scale(${element.size})`,
            animation: `float ${element.speed}s linear infinite`,
            zIndex: 1
          }}
          data-speed={element.size.toFixed(1)}
        >
          {element.value}
        </div>
      ))}
      
      {/* Geometric tech shapes */}
      <div className="absolute w-60 h-60 border-2 border-primary/20 rounded-full top-1/4 -left-20 rotate-slow"></div>
      <div className="absolute w-40 h-40 border border-primary/40 top-1/3 right-10 rotate-medium" 
        style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
      <div className="absolute w-32 h-32 border border-primary/30 bottom-20 left-1/4 rotate-fast"
        style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}></div>
      
      {/* Animated data flow lines */}
      <div className="absolute h-[1px] data-flow w-3/4 top-[15%]"></div>
      <div className="absolute h-[1px] data-flow w-1/2 top-[85%]" style={{animationDelay: '1s'}}></div>
      <div className="absolute w-[1px] data-flow h-3/4 left-[15%]" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute w-[1px] data-flow h-1/2 right-[10%]" style={{animationDelay: '1.5s'}}></div>
      
      {/* Circuit SVG */}
      <svg ref={circuitRef} className="absolute top-0 left-0 w-full h-full opacity-30 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="circuit-line" d="M0,20 L30,20 L30,50 L70,50 L70,80 L100,80" 
          fill="none" stroke="#1EAEDB" strokeWidth="0.2" />
        <path className="circuit-line" d="M0,80 L20,80 L20,30 L50,30 L50,60 L100,60" 
          fill="none" stroke="#1EAEDB" strokeWidth="0.2" style={{animationDelay: '0.3s'}} />
        <path className="circuit-line" d="M100,30 L60,30 L60,70 L40,70 L40,10 L0,10" 
          fill="none" stroke="#1EAEDB" strokeWidth="0.2" style={{animationDelay: '0.6s'}} />
        <path className="circuit-line" d="M50,0 L50,40 L20,40 L20,60 L80,60 L80,100" 
          fill="none" stroke="#1EAEDB" strokeWidth="0.2" style={{animationDelay: '0.9s'}} />
        <path className="circuit-line" d="M0,40 L10,40 L10,90 L30,90 L30,50 L100,50" 
          fill="none" stroke="#1EAEDB" strokeWidth="0.2" style={{animationDelay: '1.2s'}} />
      </svg>      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column: Advanced Tech-savvy image display */}
        <div className={`relative transition-all duration-1000 h-[450px] md:h-[650px] flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 circuit-pattern opacity-30 z-0"></div>
          
          {/* Enhanced tech profile container */}
          <div className="tech-profile-container">            {/* Main hexagon frame - without loading animations */}
            <div className="tech-profile-hex absolute inset-0">
              {/* Simple border without animation */}
              <div className="absolute inset-3" style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                border: '1px solid rgba(30, 174, 219, 0.3)'
              }}></div>
                {/* Inner image container - simplified without overlays */}
              <div className="tech-profile-inner absolute inset-5">
                {/* Profile Image - clean without overlays */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1581092795360-fd1ca04f0952)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
                {/* Corner nodes at each hexagon vertex - simplified, fewer animations */}
              <div className="tech-profile-node" style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
              <div className="tech-profile-node" style={{ top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
              <div className="tech-profile-node" style={{ top: '25%', left: '0%', transform: 'translate(-50%, -50%)' }}></div>
              
              {/* Simplified circuit SVG overlay - just the outline */}
              <svg className="tech-profile-circuit" viewBox="0 0 100 100">
                {/* Hexagon outline */}
                <path d="M50,0 L87.5,25 L87.5,75 L50,100 L12.5,75 L12.5,25 Z" stroke="#1EAEDB" strokeWidth="0.5" fill="none" />
              </svg>
                {/* Simplified tech info overlay */}
              <div className="tech-profile-info" style={{ transform: 'translateY(0)', opacity: '0.8' }}>
                <div className="tech-profile-info-row">
                  <span>{profileData.name}</span>
                </div>
                <div className="tech-profile-info-row">
                  <span>{profileData.role}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Terminal window with typed text */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 right-4 md:right-auto md:w-3/4 bg-black/90 border border-primary/30 rounded-md p-2 shadow-lg">
            <div className="flex items-center gap-2 mb-1 border-b border-primary/20 pb-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-primary/70 ml-1 font-mono">scan.sh</span>
            </div>
            <pre className="text-primary font-mono text-xs whitespace-pre-line">
              <div className="matrix-text">
                {typedText}
                <span className="typing-cursor inline-block w-1 h-4 bg-primary ml-1 animate-blink"></span>
              </div>
            </pre>
          </div>
          
          {/* Tech skill indicators */}
          <div className="absolute top-2 right-2 md:top-6 md:right-8 flex flex-col gap-2">
            {profileData.skills.map((skill, index) => (
              <div key={`skill-${index}`} className="bg-black/50 backdrop-blur-sm border border-primary/30 rounded px-2 py-1 text-xs text-primary flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
          
          {/* Status indicator */}
          <div className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-black/50 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 text-xs text-primary flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>{profileData.availability}</span>
          </div>
        </div>
        
        {/* Right column: Profile */}
        <div className={`flex flex-col items-center md:items-start transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-3d">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0]">
              Mohammed Zuhayr Hussain
            </span>
          </h1>
          
          <div className="space-y-5 mb-8">
            <p className="text-xl text-muted-foreground max-w-md">
              <span className="text-primary font-medium">Software Engineer [Full Stack Developer]</span> Specializing in building,
              Creating innovative digital experiences with cutting-edge tech — ready to build impactful products across any domain!
            </p>
          </div>          <div className="flex gap-4">
            <MagneticElement>
              <Button 
                className="px-6 py-6 bg-primary hover:bg-primary/90 relative overflow-hidden group"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-[#33C3F0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </MagneticElement>
            
            <MagneticElement>
              <Button 
                variant="outline" 
                className="px-6 py-6 border-primary/50 relative overflow-hidden group"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </MagneticElement>
          </div>
        </div>
      </div>
      
      {/* Additional circuit connector at bottom */}
      <svg className="absolute bottom-0 w-full" height="2" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#circuit-gradient)" strokeWidth="2" />
        <defs>
          <linearGradient id="circuit-gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0" />
            <stop offset="50%" stopColor="#1EAEDB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1EAEDB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Add CSS animation for orbit effect */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0; }
          10% { opacity: var(--opacity); }
          90% { opacity: var(--opacity); }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
      `}</style>    </section>
  );
});

export default HeroSection;
