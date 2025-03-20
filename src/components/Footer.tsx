
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 noise-subtle opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-secondary/20 to-background"></div>
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-heading primary-gradient-text mb-6">GROGATHR</h3>
            <p className="text-foreground/70 max-w-md mb-8 font-light">
              We craft exceptional brand experiences that captivate audiences and drive business growth through strategic design and creative excellence.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="h-10 w-10 rounded-full premium-blur flex items-center justify-center text-foreground/60 hover:text-brand-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full premium-blur flex items-center justify-center text-foreground/60 hover:text-brand-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full premium-blur flex items-center justify-center text-foreground/60 hover:text-brand-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full premium-blur flex items-center justify-center text-foreground/60 hover:text-brand-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-display font-medium mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Brand Strategy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Identity Design</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Digital Experience</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Creative Direction</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Content Creation</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-display font-medium mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">About</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Work</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Process</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Team</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-brand-primary transition-colors text-sm font-light">Careers</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-sm font-display font-medium mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="text-foreground/70 text-sm font-light">
                <strong className="font-medium text-foreground">Email:</strong> hello@grogathr.com
              </li>
              <li className="text-foreground/70 text-sm font-light">
                <strong className="font-medium text-foreground">Phone:</strong> +1 (234) 567-890
              </li>
              <li className="text-foreground/70 text-sm font-light">
                <strong className="font-medium text-foreground">Address:</strong> 123 Creative Ave,<br />Design District, NY 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-foreground/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs font-light">&copy; {currentYear} Grogathr. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs font-light hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-light hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
