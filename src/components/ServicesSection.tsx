
import { 
  Palette, 
  Layout, 
  Camera, 
  Video, 
  Globe, 
  Megaphone, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Logo & Identity",
    description: "Distinctive logo design and visual identity systems that embody your brand essence.",
    icon: Palette,
    delay: 100,
  },
  {
    title: "Web Design",
    description: "Stunning, functional websites that engage visitors and drive conversions.",
    icon: Layout,
    delay: 200,
  },
  {
    title: "Photography",
    description: "Professional product and lifestyle photography that showcases your offerings.",
    icon: Camera,
    delay: 300,
  },
  {
    title: "Video Production",
    description: "Captivating video content from commercials to social media reels.",
    icon: Video,
    delay: 400,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that increase visibility and engagement.",
    icon: Globe,
    delay: 500,
  },
  {
    title: "Social Media",
    description: "Strategic social presence that builds community and drives brand awareness.",
    icon: Megaphone,
    delay: 600,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none -z-10"></div>
      <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Badge variant="outline" className="font-mono uppercase tracking-widest mb-4 py-2 px-4 bg-white/5 backdrop-blur-sm border-brand-accent/20">
            <Sparkles className="h-4 w-4 mr-2 text-brand-accent" />
            <span>Our Services</span>
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            End-to-End <span className="gradient-text">Branding Solutions</span>
          </h2>
          
          <p className="text-foreground/70 text-lg font-display">
            We offer comprehensive branding services to help you stand out in a competitive market. 
            From initial concept to full market presence, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="neo-card animate-slide-up glowing-border" style={{animationDelay: `${service.delay}ms`}}>
              <div className="relative z-10 p-8">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 glassmorphism flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <Button variant="ghost" className="p-0 flex items-center text-brand-accent font-mono text-xs uppercase tracking-widest hover:text-brand-accent/80">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
