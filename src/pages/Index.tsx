
import React, { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  // Smooth scroll function for navigation links
  useEffect(() => {
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar height
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    
    // Hide welcome overlay after 4.5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4500);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {showWelcome && (
        <div className="welcome-overlay">
          <h1 className="welcome-text">WELCOME</h1>
          <div className="welcome-quote-container">
            <div className="welcome-quote">
              <h2 className="displacement-text">DISPLACEMENT IS BETTER THAN DISTANCE</h2>
            </div>
          </div>
        </div>
      )}
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
