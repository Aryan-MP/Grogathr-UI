
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Zenith Apparel",
    category: "Branding & Web Design",
    bgClass: "from-brand-primary/20 to-transparent",
    delay: 100,
  },
  {
    id: 2,
    title: "Nourish Kitchen",
    category: "Identity & Packaging",
    bgClass: "from-brand-accent/20 to-transparent",
    delay: 200,
  },
  {
    id: 3,
    title: "Elevate Fitness",
    category: "Marketing Campaign",
    bgClass: "from-brand-secondary/20 to-transparent",
    delay: 300,
  },
  {
    id: 4,
    title: "Urban Retreat",
    category: "Photography & Video",
    bgClass: "from-brand-primary/20 via-brand-accent/10 to-transparent",
    delay: 400,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10 pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <Badge variant="outline" className="font-mono uppercase tracking-widest mb-4 py-2 px-4 bg-white/5 backdrop-blur-sm border-brand-primary/20">
              <span>Portfolio</span>
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
              Our <span className="gradient-text">Latest Work</span>
            </h2>
            
            <p className="text-foreground/70 max-w-2xl font-display">
              Explore our portfolio of successful projects where creativity meets strategy
              to deliver exceptional brand experiences and business results.
            </p>
          </div>
          
          <Button variant="outline" className="mt-8 md:mt-0 glassmorphism hover:bg-white/10 font-mono uppercase tracking-widest text-xs">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="neo-card h-80 flex flex-col justify-end animate-slide-up glowing-border overflow-hidden"
              style={{animationDelay: `${project.delay}ms`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgClass} opacity-40`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 p-8">
                <span className="text-xs text-foreground/60 block mb-2 font-mono uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-bold font-serif mb-6">{project.title}</h3>
                <Button variant="ghost" className="p-0 flex items-center text-foreground hover:text-brand-accent font-mono uppercase tracking-widest text-xs">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
