
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-lg font-bold font-heading tracking-wider primary-gradient-text">GROGATHR</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-white/10 backdrop-blur-md hover:bg-white/15 border border-white/10 rounded-full font-display text-xs tracking-wide px-6">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 mt-4">
          <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
            <a href="#services" className="nav-link text-lg" onClick={toggleMenu}>Services</a>
            <a href="#about" className="nav-link text-lg" onClick={toggleMenu}>About</a>
            <a href="#work" className="nav-link text-lg" onClick={toggleMenu}>Work</a>
            <a href="#contact" className="nav-link text-lg" onClick={toggleMenu}>Contact</a>
            <Button className="mt-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full font-display text-xs tracking-wide">
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
