
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
    <section className="py-8 bg-black/80 dark:bg-black/90 border-y border-border/30">
      <div className="container mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Trusted by industry leaders
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="animate-scroll flex items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-12 w-28"
              >
                <div className="flex items-center justify-center w-full h-full rounded-md text-xl font-bold text-gray-300 dark:text-gray-400">
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
