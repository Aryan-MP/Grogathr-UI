
import { 
  Wand2, 
  Globe, 
  Compass, 
  Camera, 
  Megaphone, 
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Brand Strategy",
    description: "Strategic positioning and narrative development that sets you apart from competitors.",
    icon: Compass,
    color: "from-brand-primary/20 to-brand-primary/5",
    delay: 100,
  },
  {
    title: "Identity Design",
    description: "Distinctive visual identities that embody your brand's essence and values.",
    icon: PenTool,
    color: "from-brand-secondary/20 to-brand-secondary/5",
    delay: 200,
  },
  {
    title: "Digital Experience",
    description: "Immersive websites and digital platforms that engage and convert.",
    icon: Globe,
    color: "from-brand-accent/20 to-brand-accent/5",
    delay: 300,
  },
  {
    title: "Creative Direction",
    description: "Cohesive visual storytelling across all brand touchpoints.",
    icon: Wand2,
    color: "from-brand-primary/20 to-brand-primary/5",
    delay: 400,
  },
  {
    title: "Content Creation",
    description: "Compelling photography, video, and graphics that elevate your narrative.",
    icon: Camera,
    color: "from-brand-secondary/20 to-brand-secondary/5",
    delay: 500,
  },
  {
    title: "Marketing Strategy",
    description: "Data-driven campaigns that increase visibility and drive engagement.",
    icon: Megaphone,
    color: "from-brand-accent/20 to-brand-accent/5",
    delay: 600,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 noise-subtle opacity-20"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-20">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center premium-blur rounded-full px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-brand-primary/90 mb-6">
                Our Expertise
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
                Comprehensive <span className="primary-gradient-text">Brand Solutions</span>
              </h2>
              
              <p className="text-foreground/70 mb-8 font-light">
                We offer end-to-end branding services, crafting memorable experiences that resonate with your audience and drive business growth.
              </p>
              
              <Button className="rounded-full bg-transparent hover:bg-white/5 border border-white/10 text-foreground flex items-center gap-2 px-6 font-display text-sm">
                <span>All Services</span>
                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="luxury-card hover:shadow-ambient transition-all duration-500 group"
                  style={{animationDelay: `${service.delay}ms`}}
                >
                  <div className="relative z-10 p-8">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} premium-blur flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-medium mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                    <p className="text-foreground/70 font-light">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
