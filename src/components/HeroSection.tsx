
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full blur-[100px] opacity-70"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 border border-brand-primary/10 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 border border-brand-accent/10 rounded-full animate-pulse-glow [animation-delay:1.5s]"></div>
      
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 diagonal-lines opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-block mb-2 px-4 py-1 rounded-full glassmorphism text-sm font-mono uppercase tracking-widest text-brand-accent/90">
            Next-Gen Design Agency
          </div>
          
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold font-serif mb-6 animate-fade-in [animation-delay:200ms] leading-tight">
            Transform Your Digital <br />
            <span className="gradient-text">Presence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms] font-display">
            End-to-end branding solutions that captivate audiences and drive business growth. From logo design to marketing campaigns, we bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="gap-2 bg-brand-primary text-white font-mono uppercase tracking-widest hover:bg-brand-primary/90 transition-all text-xs py-6">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 transition-all font-mono uppercase tracking-widest text-xs py-6">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
