
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 px-3 mb-4 border rounded-full bg-primary/10 border-primary/20">
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            End-to-End Branding Solutions
          </h2>
          <p className="text-foreground/70 text-lg">
            We offer comprehensive branding services to help you stand out in a competitive market. 
            From initial concept to full market presence, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover animate-slide-up" style={{animationDelay: `${service.delay}ms`}}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="p-0 flex items-center text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
