
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 backdrop-blur-md border-t border-white/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-mono uppercase tracking-widest gradient-text mb-6">GROGATHR</h3>
            <p className="text-white/70 max-w-md mb-8 font-display">
              Transforming brands through creative excellence. End-to-end branding solutions that captivate audiences and drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors group">
                <Facebook className="h-5 w-5 group-hover:text-brand-accent transition-colors" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors group">
                <Instagram className="h-5 w-5 group-hover:text-brand-accent transition-colors" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors group">
                <Twitter className="h-5 w-5 group-hover:text-brand-accent transition-colors" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors group">
                <Linkedin className="h-5 w-5 group-hover:text-brand-accent transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-mono uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Logo & Identity</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Web Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Photography</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Video Production</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white font-mono uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Our Work</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-brand-accent transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-white/70 flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-xs">&copy; {currentYear} Grogathr. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-accent transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
