
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Zenith Apparel",
    category: "Branding & Web Design",
    bgColor: "bg-primary/10",
    delay: 100,
  },
  {
    id: 2,
    title: "Nourish Kitchen",
    category: "Identity & Packaging",
    bgColor: "bg-accent/10",
    delay: 200,
  },
  {
    id: 3,
    title: "Elevate Fitness",
    category: "Marketing Campaign",
    bgColor: "bg-brand-purple/10",
    delay: 300,
  },
  {
    id: 4,
    title: "Urban Retreat",
    category: "Photography & Video",
    bgColor: "bg-brand-teal/10",
    delay: 400,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Latest Work</h2>
            <p className="text-foreground/70 max-w-2xl">
              Explore our portfolio of successful projects where creativity meets strategy
              to deliver exceptional brand experiences and business results.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.bgColor} rounded-xl p-6 aspect-video flex flex-col justify-end card-hover animate-slide-up`}
              style={{animationDelay: `${project.delay}ms`}}
            >
              <div className="mt-auto">
                <span className="text-sm text-foreground/60 block mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold font-display mb-4">{project.title}</h3>
                <Button variant="ghost" className="p-0 flex items-center text-foreground hover:text-primary">
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
