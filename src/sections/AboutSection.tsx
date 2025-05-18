import React, { useState, useEffect, useRef } from 'react';
import DownloadButton from '../components/DownloadButton';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

// Custom CSS for animations
const animationStyles = `
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes skillBarFill {
    from { width: 0; }
    to { width: 100%; }
  }
  
  .skill-item {
    animation: slideIn 0.5s ease forwards;
    opacity: 0;
  }
  
  .about-item {
    animation: slideIn 0.5s ease forwards;
    opacity: 0;
  }
  
  .skill-bar {
    transition: width 1.5s cubic-bezier(0.1, 0.5, 0.2, 1);
  }
`;

const AboutSection: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  // Add animation effect for skills when slide changes
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'GraphQL', level: 75 },
    { name: 'Three.js', level: 70 },
    { name: 'React', level: 88 },
    { name: 'Vue.js', level: 65 },
    { name: 'Python', level: 72 },
    { name: 'MongoDB', level: 78 },
    { name: 'PostgreSQL', level: 76 },
    { name: 'Docker', level: 68 },
    { name: 'AWS', level: 65 },
  ];
  
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    
    return () => {
      api?.off('select', onSelect);
    };
  }, [api]);
  
  // Animation effect when showing skills
  useEffect(() => {
    if (current === 1 && skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
      const skillItems = skillsRef.current.querySelectorAll('.skill-item');
      
      skillItems.forEach((item, index) => {
        (item as HTMLElement).style.animationDelay = `${index * 100}ms`;
      });
      
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          (bar as HTMLElement).style.width = `${skills[index]?.level}%`;
        }, index * 150);
      });
    } else if (current === 0 && aboutRef.current) {
      const aboutItems = aboutRef.current.querySelectorAll('.about-item');
      aboutItems.forEach((item, index) => {
        (item as HTMLElement).style.animationDelay = `${index * 100}ms`;
      });
    }
  }, [current, skills]);

  return (
    <section className="py-20 relative z-10" id="about">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <Carousel 
          setApi={setApi}
          className="w-full relative"
          opts={{
            align: "start",
            loop: true,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="h-auto">
            {/* About Me Slide */}
            <CarouselItem className="md:basis-full">
              <div className="p-1">
                <div ref={aboutRef} className="flex flex-col justify-between">
                  <div className="text-lg space-y-4">
                    <div className="flex items-start gap-3 about-item" style={{ animationDelay: '0ms' }}>
                      <span className="text-xl flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">💻</span>
                      <p><span className="font-medium">Code Magician:</span> Turning brainwaves into Java, React, and OracleDB magic tricks since... well, not that long ago.</p>
                    </div>
                    
                    <div className="flex items-start gap-3 about-item" style={{ animationDelay: '100ms' }}>
                      <span className="text-xl flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">🍔</span>
                      <p><span className="font-medium">Foodwatcher Extraordinaire:</span> Currently serving up spicy code at Mint Solutions DMCC. No fries included.</p>
                    </div>
                    
                    <div className="flex items-start gap-3 about-item" style={{ animationDelay: '200ms' }}>
                      <span className="text-xl flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">🧙‍♂️</span>
                      <p><span className="font-medium">SAP Sorcerer:</span> Graduated from the SAP ABAP wizardry school at Hyundai Autoever — survived, barely.</p>
                    </div>
                    
                    <div className="flex items-start gap-3 about-item" style={{ animationDelay: '300ms' }}>
                      <span className="text-xl flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">🚴‍♂️</span>
                      <p><span className="font-medium">Pedal Pusher:</span> If coding was a sport, I'd be in the Tour de France. But it's not, so I just cycle... a lot.</p>
                    </div>
                    
                    <div className="flex items-start gap-3 about-item" style={{ animationDelay: '400ms' }}>
                      <span className="text-xl flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">⚽</span>
                      <p><span className="font-medium">Footy Frenzy:</span> First-place finisher in the Anna University Football Match. My legs did the talking.</p>
                    </div>
                    
                    <div className="flex items-start gap-3 about-item" style={{ animationDelay: '500ms' }}>
                      <span className="text-xl flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">🎮</span>
                      <p><span className="font-medium">Button Masher:</span> Crushed a FIFA tournament at IIM Indore. Yes, my thumbs are insured.</p>
                    </div>
                    
                    <div className="flex items-start gap-3 about-item" style={{ animationDelay: '600ms' }}>
                      <span className="text-xl flex-shrink-0 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">🏃</span>
                      <p><span className="font-medium">Bug Buster:</span> Ran 50 km in a cyclothon and 24 km in the HCL Cyclothon. Also sprinting away from bugs daily.</p>
                    </div>
                  </div>
                
                  <DownloadButton 
                    url="https://drive.google.com/drive/folders/1kLflMn9XL2MhNOm2znEMnFAYscPaaG2T"
                    className="mt-6"
                  />
                </div>
              </div>
            </CarouselItem>
            
            {/* Technical Skills Slide */}
            <CarouselItem className="md:basis-full">
              <div className="p-1">
                <div ref={skillsRef} className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center skill-item" style={{ animationDelay: '0ms' }}>
                    <span className="text-xl mr-2 bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">🚀</span>
                    Technical Skills
                  </h3>
                  
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2 skill-item" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full skill-bar transition-all duration-1000 ease-out"
                          style={{ width: current === 1 ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          <div className="mt-4 flex justify-center gap-2">
            <CarouselPrevious className="relative static left-0 translate-y-0 mx-2" />
            <div className="flex gap-2">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === idx ? "bg-primary scale-125" : "bg-secondary"
                  }`}
                  onClick={() => api?.scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative static right-0 translate-y-0 mx-2" />
          </div>
          
          {/* Swipe indicator */}
          <div className="mt-4 text-center text-sm text-muted-foreground hidden md:block">
            <span>Swipe or use arrows to navigate</span>
          </div>
          
          {/* Mobile swipe indicator */}
          <div className="mt-4 text-center text-sm text-muted-foreground md:hidden">
            <span>Swipe left/right to see {current === 0 ? "Technical Skills" : "About Me"}</span>
          </div>
        </Carousel>
      </div>
    </section>
  );
  
  // Add useEffect to adjust height after render
  useEffect(() => {
    const adjustHeight = () => {
      if (!aboutRef.current || !skillsRef.current) return;
      
      // Reset height first to get accurate measurements
      skillsRef.current.style.minHeight = 'auto';
      
      // Get height of the about content
      const aboutHeight = aboutRef.current.getBoundingClientRect().height;
      
      // Set skills height to match about content height
      skillsRef.current.style.minHeight = `${aboutHeight}px`;
    };
    
    // Run on mount and whenever current slide changes
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, [current]);
};

export default AboutSection;
