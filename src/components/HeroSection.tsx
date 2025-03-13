
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 animate-fade-in [animation-delay:200ms]">
            Transform Your Brand With <span className="gradient-text">Creative Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            End-to-end branding solutions that captivate audiences and drive business growth. From logo design to marketing campaigns, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="gap-2">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default HeroSection;
