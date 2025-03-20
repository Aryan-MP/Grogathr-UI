
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  "Creative excellence in every project",
  "End-to-end brand consistency",
  "Strategic marketing approach",
  "Data-driven decision making",
  "Tailored solutions for your audience",
  "Continual optimization and improvement",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <Badge variant="outline" className="font-mono uppercase tracking-widest mb-4 py-2 px-4 bg-white/5 backdrop-blur-sm border-brand-primary/20">
              <span>About Us</span>
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8">
              We Are <span className="gradient-text">GROGATHR</span>
            </h2>
            
            <p className="text-foreground/70 mb-6 text-lg font-display">
              At Grogathr, we believe that exceptional branding is the cornerstone of business success. 
              Our team of creative professionals is passionate about crafting unique visual identities 
              that resonate with audiences and drive meaningful results.
            </p>
            
            <p className="text-foreground/70 mb-10">
              With years of industry experience, we've mastered the art of blending creativity with strategy. 
              Our comprehensive approach ensures that every element of your brand works together 
              harmoniously to tell your story and connect with your customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start glassmorphism p-3 rounded-lg border border-white/5 hover:border-brand-accent/20 transition-colors">
                  <CheckCircle className="h-5 w-5 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative mx-auto w-4/5 aspect-square animate-float">
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/10 rounded-full animate-pulse-glow"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-white/10 rounded-full animate-pulse-glow [animation-delay:1s]"></div>
              
              {/* Main logo element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent opacity-20 rounded-xl blur-xl"></div>
                  <div className="relative z-10 glassmorphism rounded-xl w-full h-full flex items-center justify-center border border-white/10 glowing-border">
                    <span className="text-8xl font-bold font-serif gradient-text">G</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-20 h-20 glassmorphism rounded-lg blur-sm animate-pulse-glow opacity-40"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 glassmorphism rounded-full blur-sm animate-pulse-glow [animation-delay:2s] opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
