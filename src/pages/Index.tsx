
import React, { useEffect, useState, useRef, useCallback } from 'react';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';
import './IndexStyles.css';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  // Track scroll progress
  const handleScroll = useCallback(() => {
    // Calculate scroll progress percentage
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    
    // Check which section is currently in view
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      // If section is in viewport (with some offset)
      if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
        setActiveSectionIndex(index);
      }
    });
  }, []);
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
    window.addEventListener('scroll', handleScroll);
      // Hide welcome overlay after 8 seconds (increased to allow displacement text to fully show)
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 8000);
    
    // Setup intersection observer for sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section-fade-in').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [handleScroll]);
  return (
    <div className="relative min-h-screen">
      {/* Tech progress bar */}
      <div className="tech-progress-container">
        <div 
          className="tech-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Tech circuit decorations */}
      <div className="circuit-decoration circuit-top-right">
        <div className="circuit-line circuit-line-1"></div>
        <div className="circuit-line circuit-line-2"></div>
        <div className="circuit-dot circuit-dot-1"></div>
        <div className="circuit-dot circuit-dot-2"></div>
      </div>
      <div className="circuit-decoration circuit-bottom-left">
        <div className="circuit-line circuit-line-3"></div>
        <div className="circuit-dot circuit-dot-3"></div>
      </div>
        {showWelcome && (
        <div className="welcome-overlay">
          <h1 className="welcome-text">INITIALIZING</h1>
            {/* Loading progress bar */}
          <div className="loading-container">
            <div className="loading-bar">
              <div className="loading-percent">100%</div>
            </div>
          </div>
          
          {/* Status updates - tech initialization sequence */}
          <ul className="status-updates">
            <li className="status-item status-item-1 status-item-success">
              <span className="text-gray-400">[00:01]</span> Initializing core modules...
            </li>
            <li className="status-item status-item-2 status-item-success">
              <span className="text-gray-400">[00:02]</span> Loading project data...
            </li>
            <li className="status-item status-item-3 status-item-success">
              <span className="text-gray-400">[00:03]</span> Configuring interface...
            </li>
            <li className="status-item status-item-4 status-item-success">
              <span className="text-gray-400">[00:04]</span> Optimizing animations...
            </li>
            <li className="status-item status-item-5 status-item-loading">
              <span className="text-gray-400">[00:05]</span> Launching experience
            </li>
          </ul>
          
          <div className="welcome-quote-container">
            <div className="welcome-quote">
              <div className="displacement-text">&gt; DISPLACEMENT IS BETTER THAN DISTANCE</div>
            </div>
          </div>
          
          {/* Terminal-like counters */}
          <div className="mt-8 font-mono text-sm text-cyan-400 flex space-x-8">
            <div>SYSTEM: <span className="text-green-400">ONLINE</span></div>
            <div>MODULES: <span className="text-green-400">LOADED</span></div>
            <div>STATUS: <span className="text-green-400">READY</span></div>
          </div>
        </div>
      )}
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection ref={(el) => (sectionsRef.current[0] = el)} className="section-fade-in" />
        <AboutSection ref={(el) => (sectionsRef.current[1] = el)} className="section-fade-in" />
        <ProjectsSection ref={(el) => (sectionsRef.current[2] = el)} className="section-fade-in" />
        <ContactSection ref={(el) => (sectionsRef.current[3] = el)} className="section-fade-in" />
      </main>
        {/* Tech navigation indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center space-y-4 z-50">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSectionIndex === index 
                ? 'bg-primary w-4 h-4' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            style={{ cursor: 'none' }}
            onClick={() => {
              if (!sectionsRef.current[index]) return;
              window.scrollTo({
                top: sectionsRef.current[index]!.offsetTop - 80,
                behavior: 'smooth'
              });
            }}
            aria-label={`Navigate to section ${index + 1}`}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
