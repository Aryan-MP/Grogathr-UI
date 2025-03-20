
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 px-3 mb-4 border rounded-full glassmorphism">
            <span className="text-sm font-medium">Contact Us</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
          <p className="text-foreground/70 text-lg">
            Ready to transform your brand? Get in touch with our team and let's create something incredible together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="neo-card">
            <div className="p-8 relative z-10 h-full flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full glassmorphism flex items-center justify-center mb-6">
                <Mail className="h-7 w-7 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-foreground/70 mb-6">We'll respond within 24 hours</p>
              <a href="mailto:hello@grogathr.com" className="text-brand-accent hover:underline mt-auto">
                hello@grogathr.com
              </a>
            </div>
          </div>

          <div className="neo-card">
            <div className="p-8 relative z-10 h-full flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full glassmorphism flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-foreground/70 mb-6">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+1234567890" className="text-brand-accent hover:underline mt-auto">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="neo-card">
            <div className="p-8 relative z-10 h-full flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full glassmorphism flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-foreground/70 mb-6">Our creative studio</p>
              <address className="text-brand-accent not-italic mt-auto">
                123 Creative Ave, Design District
              </address>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="neo-card">
            <div className="p-8 relative z-10">
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
                      className="bg-white/5 border-white/10 focus:border-brand-accent/50 placeholder:text-white/30"
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
                      className="bg-white/5 border-white/10 focus:border-brand-accent/50 placeholder:text-white/30"
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
                    className="bg-white/5 border-white/10 focus:border-brand-accent/50 placeholder:text-white/30"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-glow hover:shadow-brand-primary/30">
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
