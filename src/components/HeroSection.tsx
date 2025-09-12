import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";
import IslamicGeometricBackground from "@/components/IslamicGeometricBackground";

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
    <section className="relative min-h-screen flex items-center overflow-hidden islamic-geometric-bg pt-20">
      {/* Islamic Geometric Background */}
      <IslamicGeometricBackground />
      
      {/* Content */}
      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-start">
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            <div className="animate-fade-in">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/ff926b80-f947-409f-9bb1-b0ad45ba1c17.png" 
                  alt="bersafar Logo"
                  className="h-16 w-16"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-bersafar-primary mb-6 leading-tight">
                Perjalanan Bermakna,
                <br />
                <span className="transition-all duration-500">{switchingTexts[currentText]}</span>
              </h1>
              <p className="text-lg text-bersafar-primary/80 mb-8 font-poppins">
                Temukan pengalaman perjalanan spiritual yang tak terlupakan
              </p>
              <div>
                <Button 
                  variant="bersafar"
                  size="lg"
                  className="px-12 py-6 font-poppins font-bold text-xl"
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
