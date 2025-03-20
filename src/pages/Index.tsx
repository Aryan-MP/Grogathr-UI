
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set default dark theme on first load
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Subtle noise texture */}
      <div className="fixed inset-0 noise-bg opacity-20 pointer-events-none z-0"></div>
      
      {/* Grid pattern */}
      <div className="fixed inset-0 diagonal-lines opacity-10 pointer-events-none z-0"></div>
      
      <Navbar />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
