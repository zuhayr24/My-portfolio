import React, { useState } from 'react';
import MagneticElement from '../components/MagneticElement';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Replace these values with your EmailJS service, template, and user ID
      const serviceId = "YOUR_EMAILJS_SERVICE_ID";
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
      const userId = "YOUR_EMAILJS_USER_ID";
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              I'm always open to discussing new projects, opportunities in software development, 
              or just having a chat about technology. Feel free to reach out using the form or 
              my social links.
            </p>
            
            <div className="mb-8">
              
              
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              <div className="flex space-x-4">
                <MagneticElement strength={30}>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-all">
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                </MagneticElement>
                
                <MagneticElement strength={30}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-all">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                </MagneticElement>
                
                <MagneticElement strength={30}>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-all">
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  </a>
                </MagneticElement>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={5} required />
            </div>
            
            <MagneticElement>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </MagneticElement>
          </form>
        </div>
      </div>
    </section>;
};
export default ContactSection;