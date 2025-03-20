
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
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/90 backdrop-blur-lg border-b border-white/5' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold font-serif gradient-text">GROGATHR</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-glow hover:shadow-brand-primary/30">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="bg-white/5 backdrop-blur-sm border border-white/10">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/5">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-5">
            <a href="#services" className="nav-link text-lg" onClick={toggleMenu}>Services</a>
            <a href="#about" className="nav-link text-lg" onClick={toggleMenu}>About</a>
            <a href="#work" className="nav-link text-lg" onClick={toggleMenu}>Work</a>
            <a href="#contact" className="nav-link text-lg" onClick={toggleMenu}>Contact</a>
            <Button className="mt-2 w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-glow hover:shadow-brand-primary/30">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
