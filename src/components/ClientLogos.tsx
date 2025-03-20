
import React from "react";
import { cn } from "@/lib/utils";

const brands = [
  { id: 1, name: "Acme Corp", logo: "A" },
  { id: 2, name: "Globex", logo: "G" },
  { id: 3, name: "Soylent", logo: "S" },
  { id: 4, name: "Initech", logo: "I" },
  { id: 5, name: "Umbrella", logo: "U" },
  { id: 6, name: "Stark Industries", logo: "SI" },
  { id: 7, name: "Wayne Enterprises", logo: "W" },
  { id: 8, name: "Oscorp", logo: "O" },
  { id: 9, name: "Cyberdyne", logo: "C" },
  { id: 10, name: "Tyrell Corp", logo: "T" },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-background/90 via-black/95 to-background/90 backdrop-blur-md border-y border-white/5 dark:border-white/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-primary/80 uppercase tracking-wider font-medium mb-10">
          Trusted by industry leaders
        </p>
        
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-background/90 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-background/90 after:to-transparent">
          <div className="animate-scroll flex items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 mx-10 flex items-center justify-center h-16 w-32"
              >
                <div className="flex items-center justify-center w-full h-full rounded-md text-xl font-bold bg-gradient-to-br from-white/10 to-transparent p-4 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg text-gray-300 dark:text-gray-200 hover:text-white">
                  {brand.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
