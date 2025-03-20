
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-32">
      {/* Ambient background elements */}
      <div className="absolute inset-0 -z-10 noise-subtle opacity-30"></div>
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-primary/5 blur-[120px] opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-brand-accent/20 to-brand-accent/5 blur-[100px] opacity-60"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-40 right-10 w-24 h-24 border border-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-white/5 rounded-full animate-float [animation-delay:2s]"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 premium-blur rounded-full animate-float [animation-delay:3s]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 premium-blur rounded-full px-6 py-2 text-xs font-mono tracking-widest uppercase text-brand-accent animate-fade-in [animation-delay:300ms]">
            Redefining Brand Experiences
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight animate-fade-in [animation-delay:500ms]">
            We craft<br />
            <span className="primary-gradient-text">exceptional</span> brands
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in [animation-delay:700ms] font-light">
            Elevating businesses through strategic design and innovative brand experiences that captivate audiences and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in [animation-delay:900ms]">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 font-display font-medium text-sm tracking-wide h-14 group">
              <span>Explore Our Work</span>
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 bg-white/5 hover:bg-white/10 h-14 font-display font-medium text-sm tracking-wide">
              Our Process
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-20 left-0 w-full h-[400px]">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute -top-10 left-0 w-full">
            <div className="flex gap-10 animate-scroll">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex-none py-1">
                  <div className="text-[180px] font-heading opacity-5">GROGATHR</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
