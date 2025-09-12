import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";
import MapIllustration from "@/components/MapIllustration";

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#e6f7ff] to-[#cff7ee] pt-20">
      {/* Content */}
      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="animate-fade-in">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/ff926b80-f947-409f-9bb1-b0ad45ba1c17.png" 
                  alt="Bersafar Logo"
                  className="h-16 w-16"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-[#007275] mb-6 leading-tight">
                Perjalanan Bermakna,
                <br />
                <span className="transition-all duration-500">{switchingTexts[currentText]}</span>
              </h1>
              <p className="text-lg text-[#007275]/80 mb-8 font-poppins">
                Temukan pengalaman perjalanan spiritual yang tak terlupakan
              </p>
              <div>
                <Button 
                  className="bg-[#007275] hover:bg-[#005c5f] text-white px-12 py-6 font-poppins font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => setDialogOpen(true)}
                >
                  Mulai Bersafar
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Map Illustration */}
          <div className="relative h-96 lg:h-[500px]">
            <MapIllustration />
          </div>
        </div>
      </div>

      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
