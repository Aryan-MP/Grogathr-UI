
import { CheckCircle } from "lucide-react";

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
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              We Are <span className="gradient-text">GROGATHR</span>
            </h2>
            <p className="text-foreground/70 mb-6">
              At Grogathr, we believe that exceptional branding is the cornerstone of business success. 
              Our team of creative professionals is passionate about crafting unique visual identities 
              that resonate with audiences and drive meaningful results.
            </p>
            <p className="text-foreground/70 mb-8">
              With years of industry experience, we've mastered the art of blending creativity with strategy. 
              Our comprehensive approach ensures that every element of your brand works together 
              harmoniously to tell your story and connect with your customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="h-full w-full rounded-lg bg-secondary/10 flex items-center justify-center">
                <div className="text-6xl font-bold font-display gradient-text">G</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
