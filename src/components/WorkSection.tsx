
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Ethereal Cosmetics",
    category: "Brand Identity & Packaging",
    color: "from-brand-primary/20 to-transparent",
    delay: 100,
  },
  {
    id: 2,
    title: "Vanguard Finance",
    category: "Digital Experience & Marketing",
    color: "from-brand-secondary/20 to-transparent",
    delay: 200,
  },
  {
    id: 3,
    title: "Luminary Wellness",
    category: "Brand Strategy & Identity",
    color: "from-brand-accent/20 to-transparent",
    delay: 300,
  },
  {
    id: 4,
    title: "Horizon Technology",
    category: "Web Design & Content Creation",
    color: "from-brand-primary/20 via-brand-accent/10 to-transparent",
    delay: 400,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="absolute inset-0 noise-subtle opacity-20 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center premium-blur rounded-full px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-brand-primary/90 mb-6">
              Our Work
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
              Featured <span className="primary-gradient-text">Projects</span>
            </h2>
            
            <p className="text-foreground/70 max-w-2xl font-light">
              Discover our portfolio of transformative brand experiences that have 
              helped businesses achieve their goals and connect with their audiences.
            </p>
          </div>
          
          <Button variant="outline" className="mt-8 md:mt-0 rounded-full bg-transparent hover:bg-white/5 border border-white/10 px-6 font-display text-sm">
            <span>All Projects</span>
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="luxury-card h-[500px] flex flex-col justify-end group overflow-hidden premium-border animate-slide-up"
              style={{animationDelay: `${project.delay}ms`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 p-8 md:p-10">
                <div className="premium-blur rounded-full px-4 py-1 text-xs inline-block mb-3 font-mono tracking-widest uppercase">{project.category}</div>
                <h3 className="text-3xl font-display font-medium mb-8 group-hover:text-brand-primary transition-colors duration-300">{project.title}</h3>
                <Button variant="outline" className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-6 font-display text-sm group-hover:bg-brand-primary/20 transition-all duration-300">
                  View Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
