import React, { useState, useEffect, useRef, forwardRef } from 'react';
import SimpleWrapper from '../components/SimpleWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import '../components/SleekContactStyles.css';

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
  
  // Generate ambient dots for background
  const ambientDots = Array.from({ length: 50 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.4 + 0.1,
    animationDuration: `${Math.random() * 10 + 5}s`,
    animationDelay: `${Math.random() * 5}s`,
    size: Math.max(1, Math.random() * 3)
  }));
  
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
    }
  };
    
  return (
    <section 
      ref={ref}
      className={`py-20 relative dark-contact-bg overflow-hidden ${className}`} 
      id="contact"
    >
      {/* Ambient background dots */}
      {ambientDots.map((dot, index) => (
        <div 
          key={`dot-${index}`}
          className="ambient-dots"
          style={{
            top: dot.top,
            left: dot.left,
            opacity: dot.opacity,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `pulse ${dot.animationDuration} infinite alternate ease-in-out`,
            animationDelay: dot.animationDelay
          }}
        />
      ))}
        <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Wanna Chat? 🚀
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're vibing with my projects, dreaming of turning ideas into real-world magic, or just feel like geeking out over tech (or tacos 🌮), my inbox is always open. Let's build, banter, or brainstorm — your call!
          </p>
          <div className="sleek-divider mt-6 max-w-xs mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Contact Info Column - 2 columns on md screens */}
          <div className="md:col-span-2">            <div className="h-full gradient-border shadow-card p-8 backdrop-blur-md bg-opacity-20 bg-black">
              <h3 className="text-2xl font-bold mb-6 neon-text-intense">Find Me Online</h3>
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-black/40 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1EAEDB]">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">GitHub</h4>
                    <SimpleWrapper>
                      <a 
                        href="https://github.com/zuhayr24" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#1EAEDB] transition-colors"
                      >
                        github.com/zuhayr24
                      </a>
                    </SimpleWrapper>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-black/40 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1EAEDB]">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">LinkedIn</h4>
                    <SimpleWrapper>
                      <a 
                        href=" https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#1EAEDB] transition-colors"
                      >
                        linkedin.com/in/zuhayr
                      </a>
                    </SimpleWrapper>                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-800">
                <div className="flex justify-center">
                  <p className="text-gray-400 text-sm">
                    <span className="text-[#1EAEDB]">&lt;/&gt;</span> with 💙 by Mohammed Zuhayr Hussain
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Message Form Column - 3 columns on md screens */}
          <div className="md:col-span-3">
            <div className="gradient-border shadow-card p-8 backdrop-blur-md bg-opacity-20 bg-black">
              <h3 className="text-2xl font-bold mb-6 neon-text-intense">Send Me a Message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      name="from_name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe" 
                      required 
                      className="dark-input w-full px-4 py-3 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      name="from_email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                      required 
                      className="dark-input w-full px-4 py-3 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Let me know how I can help you..." 
                    rows={6} 
                    required 
                    className="dark-input w-full px-4 py-3 rounded-md resize-none"
                  />
                </div>
                
                <div className="flex justify-start">
                  <Button 
                    type="submit" 
                    className="submit-btn px-8 py-3 rounded-md font-medium text-base transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin w-5 h-5 border-2 border-t-transparent border-white rounded-full"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>  );
});

export default ContactSection;