import React, { useState, useEffect, useRef, forwardRef } from 'react';
import MagneticElement from '../components/MagneticElement';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import '../components/TechContactStyles.css';

interface ContactSectionProps {
  className?: string;
}

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ className = '' }, ref) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
    // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("JjFCd-SoOBMZmUfwt"); // EmailJS Public Key
  }, []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map the field names from EmailJS to the state properties
    const fieldMapping: Record<string, string> = {
      from_name: 'name',
      from_email: 'email',
      message: 'message'
    };
    
    const stateKey = fieldMapping[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = "Zuhayr_portfolio";
      const templateId = "Zuhayr_template";
      
      if (form.current) {
        await emailjs.sendForm(
          serviceId, 
          templateId, 
          form.current
        );
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }  };
    return (
    <section 
      ref={ref}
      className={`py-20 relative bg-black/90 overflow-hidden ${className}`} 
      id="contact"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      {/* Animated data flow lines */}
      <div className="absolute h-[1px] data-flow w-3/4 top-[15%]"></div>
      <div className="absolute h-[1px] data-flow w-1/2 bottom-[15%]" style={{animationDelay: '1s'}}></div>
      <div className="absolute w-[1px] data-flow h-3/4 left-[15%]" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute w-[1px] data-flow h-1/2 right-[15%]" style={{animationDelay: '1.5s'}}></div>
      
      {/* Binary code floating elements - enhanced with randomized animation */}
      {[...Array(15)].map((_, index) => (
        <div 
          key={`binary-${index}`}
          className="absolute text-[0.6rem] font-mono text-primary/30 binary-rain"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 30 + 20}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        >
          {Math.random().toString(2).substring(2, 10)}
        </div>
      ))}
      
      {/* Add data nodes at connection points */}
      {[...Array(6)].map((_, index) => (
        <div 
          key={`node-${index}`}
          className="data-node"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-3d bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0]">
            INITIALIZE COMMUNICATION
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto"></div>        </div>
        
        <div className="grid md:grid-cols-2 gap-10 relative">
          {/* Left column: Terminal-like info section */}
          <div className="bg-black/50 p-6 rounded-lg border border-primary/30 backdrop-blur-md relative tech-corner">
            <span></span> {/* Required for tech-corner */}
            
            {/* Scan line effect */}
            <div className="scan-line"></div>
            
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-primary/70 ml-2 font-mono">contact_info.sh</span>
            </div>
            
            {/* Terminal content with typing effect */}
            <div className="font-mono text-sm text-primary/90 mb-6 space-y-2 tech-scroll" style={{maxHeight: "300px", overflowY: "auto"}}>
              <p className="flex">
                <span className="text-green-400 mr-2">$</span>
                <span className="typing-effect" style={{animationDelay: "0s"}}>whoami</span>
              </p>
              <p className="pl-4 terminal-text">Mohammed Zuhayr Hussain - Full Stack Developer</p>
              
              <p className="flex mt-4">
                <span className="text-green-400 mr-2">$</span>
                <span className="typing-effect" style={{animationDelay: "1s"}}>cat mission.txt</span>
              </p>
              <p className="pl-4 leading-relaxed">
                Got a wild idea in AI, blockchain, or some tech I haven't googled yet? I'm all ears (and code). Whether it's building cool stuff, talking shop, or just sharing nerdy memes — let's collaborate and make some tech magic happen!
              </p>
                <p className="flex mt-4">
                <span className="text-green-400 mr-2">$</span>
                <span className="typing-effect" style={{animationDelay: "2s"}}>ls -la contact_methods/</span>
              </p>
              <p className="pl-4 text-xs text-primary/70 mb-2">total 2 items, last updated: {new Date().toLocaleDateString()}</p></div>
            
            {/* Tech-styled social icons with enhanced hover effects */}
            <div className="space-y-3">
              <div className="group flex items-center gap-3 p-2 hover:bg-primary/10 rounded-md transition-all cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center border border-primary/30 group-hover:border-primary/60 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-md animate-ping" style={{animationDuration: "1.5s"}}></div>
                </div>
                <div className="flex-1">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:text-primary/80 transition-colors flex items-center">
                    <span className="mr-2 terminal-prompt">github.com/zuhayr</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                  </a>
                </div>
              </div>
                <div className="group flex items-center gap-3 p-2 hover:bg-primary/10 rounded-md transition-all cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center border border-primary/30 group-hover:border-primary/60 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-md animate-ping" style={{animationDuration: "1.5s"}}></div>
                </div>
                <div className="flex-1">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:text-primary/80 transition-colors flex items-center">
                    <span className="mr-2 terminal-prompt">linkedin.com/in/zuhayr</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Circuit decorations */}
            <svg className="absolute bottom-0 left-0 w-full h-24 opacity-40" viewBox="0 0 100 24" preserveAspectRatio="none">
              <path d="M0,12 H10 L15,6 L25,18 L40,8 L50,12 L65,16 L80,10 L100,12" fill="none" stroke="#1EAEDB" strokeWidth="0.5" />
              <circle cx="10" cy="12" r="1" fill="#1EAEDB" />
              <circle cx="40" cy="8" r="1" fill="#1EAEDB" />
              <circle cx="65" cy="16" r="1.5" fill="#1EAEDB">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="10" r="1" fill="#1EAEDB" />
              <animate attributeName="opacity" values="0.4;0.6;0.4" dur="5s" repeatCount="indefinite" />
            </svg>
            
            {/* Digital circuit paths with animation */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              {/* Horizontal data paths */}
              <div className="absolute h-[1px] w-1/3 left-0 top-1/4 bg-primary/40">
                <div className="absolute top-0 left-0 h-full w-5 bg-primary/80 animate-pulse"></div>
              </div>
              <div className="absolute h-[1px] w-1/4 right-0 top-3/4 bg-primary/40">
                <div className="absolute top-0 right-0 h-full w-5 bg-primary/80 animate-pulse"></div>
              </div>
              
              {/* Vertical data paths */}
              <div className="absolute w-[1px] h-1/3 left-1/5 top-0 bg-primary/40">
                <div className="absolute left-0 top-0 w-full h-5 bg-primary/80 animate-pulse"></div>
              </div>
              <div className="absolute w-[1px] h-1/4 right-1/4 bottom-0 bg-primary/40">
                <div className="absolute left-0 bottom-0 w-full h-5 bg-primary/80 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Right column: Tech-styled form with enhanced effects */}
          <div className="relative">
            {/* Circuit board background */}
            <div className="absolute inset-0 circuit-pattern opacity-10 z-0"></div>
            
            {/* Tech interface frame with enhanced corners */}
            <div className="bg-black/50 rounded-lg border border-primary/30 backdrop-blur-md p-6 relative tech-corner">
              <span></span> {/* Required for tech-corner */}
              
              {/* Data verification grid overlay */}
              <div className="absolute inset-0 data-verification-grid rounded-lg opacity-30 pointer-events-none"></div>
              
              {/* Scan line effect */}
              <div className="scan-line"></div>
              
              {/* Interface header with enhanced styling */}
              <div className="flex items-center justify-between mb-6 border-b border-primary/20 pb-2">
                <div className="font-mono text-primary/80 text-sm terminal-text">message_protocol_v1.0</div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs text-primary/70 font-mono">Connection secure</span>
                </div>
              </div>
              
              {/* Form with tech styling and enhanced effects */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 relative">
                  <label htmlFor="name" className="block text-xs font-mono text-primary/80">
                    <span className="flex items-center">
                      <span className="text-green-400 mr-1">&gt;</span> IDENTITY
                    </span>
                  </label>
                  <Input 
                    id="name" 
                    name="from_name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name" 
                    required 
                    className="bg-black/30 border-primary/20 focus:border-primary/60 text-primary placeholder:text-primary/40 font-mono text-sm tech-input-glow"
                  />
                  {/* Data node decoration */}
                  <div className="w-2 h-2 absolute right-0 top-1/2 bg-primary/50 rounded-full" style={{boxShadow: "0 0 5px rgba(30, 174, 219, 0.7)"}}></div>
                </div>
                
                <div className="space-y-1 relative">
                  <label htmlFor="email" className="block text-xs font-mono text-primary/80">
                    <span className="flex items-center">
                      <span className="text-green-400 mr-1">&gt;</span> COMMUNICATION_CHANNEL
                    </span>
                  </label>
                  <Input 
                    id="email" 
                    name="from_email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="your@email.com" 
                    required 
                    className="bg-black/30 border-primary/20 focus:border-primary/60 text-primary placeholder:text-primary/40 font-mono text-sm tech-input-glow"
                  />
                  {/* Data node decoration */}
                  <div className="w-2 h-2 absolute right-0 top-1/2 bg-primary/50 rounded-full" style={{boxShadow: "0 0 5px rgba(30, 174, 219, 0.7)"}}></div>
                </div>
                
                <div className="space-y-1 relative">
                  <label htmlFor="message" className="block text-xs font-mono text-primary/80">
                    <span className="flex items-center">
                      <span className="text-green-400 mr-1">&gt;</span> MESSAGE_PAYLOAD
                    </span>
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Type your message here..." 
                    rows={5} 
                    required 
                    className="bg-black/30 border-primary/20 focus:border-primary/60 text-primary placeholder:text-primary/40 font-mono text-sm resize-none tech-input-glow tech-scroll"
                  />
                  {/* Data nodes decoration for textarea */}
                  <div className="w-2 h-2 absolute right-0 top-12 bg-primary/50 rounded-full" style={{boxShadow: "0 0 5px rgba(30, 174, 219, 0.7)"}}></div>
                  <div className="w-2 h-2 absolute right-0 bottom-4 bg-primary/50 rounded-full" style={{boxShadow: "0 0 5px rgba(30, 174, 219, 0.7)"}}></div>
                </div>
                
                <div className="pt-2">
                  <MagneticElement>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary/90 hover:bg-primary font-mono text-sm group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      {/* Security verification animation on hover */}
                      <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 pointer-events-none">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full border-2 border-primary/30 animate-ping"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full border border-primary/40" style={{animation: "spin 10s linear infinite"}}></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border border-primary/50" style={{animation: "spin 5s linear infinite reverse"}}></div>
                        </div>
                      </div>
                      
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}</span>
                        {isSubmitting ? (
                          <div className="animate-spin w-4 h-4 border-2 border-t-transparent border-primary/90 rounded-full"></div>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-[#33C3F0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </Button>
                  </MagneticElement>
                </div>              </form>
              
              {/* Enhanced decorative tech elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50"></div>
              
              {/* Circuit line decorations */}
              <svg className="absolute bottom-0 left-0 w-full h-24 opacity-40" viewBox="0 0 100 24" preserveAspectRatio="none">
                <path d="M0,12 H20 L25,6 L35,18 L45,12 L55,16 L65,8 L75,14 L100,12" fill="none" stroke="#1EAEDB" strokeWidth="0.5" />
                <circle cx="20" cy="12" r="1" fill="#1EAEDB" />
                <circle cx="45" cy="12" r="1" fill="#1EAEDB" />
                <circle cx="65" cy="8" r="1" fill="#1EAEDB" />
                <circle cx="75" cy="14" r="1" fill="#1EAEDB" />
                <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
              </svg>
              
              {/* Enhanced data transmission line */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-2 h-24">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-transparent"></div>
                <div className="absolute top-0 w-full h-3 bg-primary/80 animate-pulse"></div>
                <div className="absolute top-8 w-full h-2 bg-primary/60 animate-pulse" style={{animationDelay: "0.3s"}}></div>
                <div className="absolute top-16 w-full h-1 bg-primary/40 animate-pulse" style={{animationDelay: "0.6s"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom circuit connector */}
      <svg className="relative w-full mt-20" height="4" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#contact-circuit-gradient)" strokeWidth="4" />
        <line x1="0" y1="2" x2="100%" y2="2" stroke="url(#contact-circuit-gradient-alt)" strokeWidth="1" strokeDasharray="5,5" />
        <defs>
          <linearGradient id="contact-circuit-gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0" />
            <stop offset="50%" stopColor="#1EAEDB" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1EAEDB" stopOpacity="0" />
            <animate attributeName="x1" values="0%;25%;0%" dur="5s" repeatCount="indefinite" />
          </linearGradient>
          <linearGradient id="contact-circuit-gradient-alt">
            <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#1EAEDB" stopOpacity="1" />
            <stop offset="100%" stopColor="#1EAEDB" stopOpacity="0.2" />
            <animate attributeName="x1" values="0%;100%;0%" dur="10s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Data nodes at strategic positions */}
      <div className="data-node absolute bottom-10 left-1/4" style={{animationDelay: "0.2s"}}></div>
      <div className="data-node absolute bottom-10 right-1/4" style={{animationDelay: "0.7s"}}></div>
      
      {/* Float animation definition with improved styling */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0; }
          10% { opacity: var(--opacity); }
          90% { opacity: var(--opacity); }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        
        .circuit-pattern {
          background-blend-mode: overlay;
        }      `}</style>
    </section>
  );
});

export default ContactSection;