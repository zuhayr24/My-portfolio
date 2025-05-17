
import React, { useEffect, useRef } from 'react';
import MagneticElement from '../components/MagneticElement';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        innerWidth,
        innerHeight
      } = window;

      // Calculate cursor position as a percentage of viewport
      const xPercent = clientX / innerWidth;
      const yPercent = clientY / innerHeight;

      // Calculate the offset for parallax effect (reduced strength)
      const offsetX = (xPercent - 0.5) * 15; // Reduced from 20
      const offsetY = (yPercent - 0.5) * 15; // Reduced from 20

      // Apply parallax transformation to background elements
      const elements = parallaxRef.current.querySelectorAll('.parallax-element');
      elements.forEach((element: Element, index) => {
        const depth = index * 0.1 + 0.3; // Reduced depth factor
        const translateX = offsetX * depth;
        const translateY = offsetY * depth;
        (element as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden hero-gradient" id="home">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={parallaxRef} className="text-center">
          <p className="text-primary font-medium mb-2 animate-in animate-delay-100">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-in animate-delay-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0]">Mohammed Zuhayr Hussain</span>
          </h1>
          
          <div className="flex justify-center mb-6 animate-in animate-delay-250">
            <Avatar className="w-32 h-32 border-2 border-primary">
              <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Mohammed Zuhayr Hussain" />
              <AvatarFallback className="bg-primary/10 text-2xl">MZH</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="parallax-element">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in animate-delay-300">
              Software Engineer specializing in building innovative web experiences with cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center animate-in animate-delay-400">
            <MagneticElement>
              <Button size="lg" asChild className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white">
                <a href="#projects">View Projects</a>
              </Button>
            </MagneticElement>
            
            <MagneticElement>
              <Button variant="outline" size="lg" asChild className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/10">
                
              </Button>
            </MagneticElement>
          </div>
        </div>
      </div>
      
      {/* Electricity-themed abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1EAEDB]/5 rounded-full blur-3xl parallax-element"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#33C3F0]/5 rounded-full blur-3xl parallax-element"></div>
      
      {/* Electricity lines */}
      <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#1EAEDB]/50 to-transparent top-1/3 animate-pulse-slow"></div>
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#1EAEDB]/30 to-transparent bottom-1/4 animate-pulse-slow" style={{
      animationDelay: '1s'
    }}></div>
    </section>;
};
export default HeroSection;
