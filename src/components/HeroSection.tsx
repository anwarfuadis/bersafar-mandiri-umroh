import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";
import IslamicGeometricBackground from "@/components/IslamicGeometricBackground";
import heroSpiritual from "@/assets/hero-spiritual-background.jpg";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const switchingTexts = ["Berpahala", "Berkah"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % switchingTexts.length);
    }, 5000);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Parallax Spiritual Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: `url(${heroSpiritual})`,
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />
      
      {/* Islamic Geometric Background with parallax */}
      <div style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <IslamicGeometricBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-start">
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            <div className="animate-fade-in">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/bersafar-logo.png" 
                  alt="bersafar Logo"
                  className="h-16 w-16"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-gray-800 mb-6 leading-tight">
                Perjalanan Bermakna, <span className="text-bersafar-primary/60 transition-all duration-500">{switchingTexts[currentText]}</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-poppins">
                Temukan pengalaman perjalanan spiritual yang tak terlupakan
              </p>
              <div>
                <Button 
                  variant="bersafar"
                  size="lg"
                  className="px-16 py-8 font-poppins font-bold text-2xl"
                  onClick={() => setDialogOpen(true)}
                >
                  Mulai bersafar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
