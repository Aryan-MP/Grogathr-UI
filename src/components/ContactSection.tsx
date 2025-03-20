
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 -z-10 noise-subtle opacity-20"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center premium-blur rounded-full px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-brand-accent/90 mb-6">
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
            Let's Create <span className="accent-gradient-text">Together</span>
          </h2>
          
          <p className="text-foreground/70 text-lg font-light">
            Ready to transform your brand? Reach out and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          <div className="luxury-card premium-glow from-brand-primary/30">
            <div className="p-8 h-full flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full premium-blur flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Email Us</h3>
              <p className="text-foreground/70 mb-6 font-light">We'll respond within 24 hours</p>
              <a href="mailto:hello@grogathr.com" className="text-brand-primary hover:text-brand-primary/80 transition-colors mt-auto font-display">
                hello@grogathr.com
              </a>
            </div>
          </div>

          <div className="luxury-card premium-glow from-brand-secondary/30">
            <div className="p-8 h-full flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full premium-blur flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Call Us</h3>
              <p className="text-foreground/70 mb-6 font-light">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+1234567890" className="text-brand-secondary hover:text-brand-secondary/80 transition-colors mt-auto font-display">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="luxury-card premium-glow from-brand-accent/30">
            <div className="p-8 h-full flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full premium-blur flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Visit Us</h3>
              <p className="text-foreground/70 mb-6 font-light">Our creative studio</p>
              <address className="text-brand-accent hover:text-brand-accent/80 transition-colors mt-auto not-italic font-display">
                123 Creative Ave, Design District
              </address>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="luxury-card premium-glow from-brand-primary/20">
            <div className="p-8 md:p-10 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="rounded-xl bg-white/5 border-white/10 focus-visible:ring-brand-primary/20 focus-visible:border-brand-primary/50 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="rounded-xl bg-white/5 border-white/10 focus-visible:ring-brand-primary/20 focus-visible:border-brand-primary/50 h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="rounded-xl bg-white/5 border-white/10 focus-visible:ring-brand-primary/20 focus-visible:border-brand-primary/50"
                  />
                </div>
                <Button type="submit" className="w-full rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white font-display h-12">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
