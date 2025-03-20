
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 backdrop-blur-md border-t border-white/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold font-serif gradient-text mb-6">GROGATHR</h3>
            <p className="text-white/70 max-w-md mb-8">
              Transforming brands through creative excellence. End-to-end branding solutions that captivate audiences and drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Logo & Identity</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Photography</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Video Production</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-white/70 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Grogathr. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
