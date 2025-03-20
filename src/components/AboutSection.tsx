
import { CheckCircle2 } from "lucide-react";

const features = [
  "Strategic brand development",
  "Creative excellence across all touchpoints",
  "Data-driven design decisions",
  "Industry-leading expertise",
  "Collaborative client partnerships",
  "Results-focused approach",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 -z-10 noise-subtle opacity-20"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center premium-blur rounded-full px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-brand-accent/90 mb-6">
              About Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">
              The <span className="accent-gradient-text">Visionaries</span> Behind Exceptional Brands
            </h2>
            
            <p className="text-foreground/70 mb-6 text-lg font-light">
              At Grogathr, we blend strategic thinking with creative excellence to build 
              brands that stand out and connect with audiences on a deeper level.
            </p>
            
            <p className="text-foreground/70 mb-10 font-light">
              With a team of industry veterans and fresh creative minds, we bring diverse 
              perspectives to every project, ensuring innovative solutions that drive real results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] w-full lg:w-[90%] ml-auto">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 right-0 bottom-0 premium-blur rounded-3xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-accent/10 to-transparent"></div>
                <div className="absolute w-full h-full grid-pattern opacity-30"></div>
                
                <div className="absolute top-10 right-10 h-20 w-20 premium-blur rounded-full border border-white/10 animate-float"></div>
                <div className="absolute bottom-10 left-10 h-14 w-14 premium-blur rounded-full border border-white/10 animate-float [animation-delay:2s]"></div>
                
                {/* Logo symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent opacity-20 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 premium-blur rounded-full border border-white/20"></div>
                    <div className="absolute inset-10 flex items-center justify-center">
                      <span className="text-8xl font-heading primary-gradient-text">G</span>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-rotate">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 bg-brand-primary rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-3 bg-brand-accent rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 animate-rotate [animation-delay:2s] [animation-duration:15s]">
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-3 w-3 bg-brand-secondary rounded-full"></div>
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-3 w-3 bg-brand-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-brand-primary/20 rounded-3xl blur-3xl -z-10 opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
