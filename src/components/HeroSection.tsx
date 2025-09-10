import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const switchingTexts = ["Bermakna", "Berpahala", "Berkah"];

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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-bersafar-light">
      {/* Islamic Geometric Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 hero-bersafar-pattern opacity-30" 
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute inset-0 hero-bersafar-overlay opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <div className="animate-fade-in">
              {/* Logo in hero section */}
              <div className="mb-6 flex justify-center">
                <img 
                  src="/lovable-uploads/01cfa612-00a1-432c-8b1f-bd3f4f650ae9.png" 
                  alt="Bersafar Logo"
                  className="h-16 w-16"
                />
              </div>
              <h1 id="hero-brand" className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-bersafar-primary mb-4 leading-tight">
                Perjalanan 
                <span className="text-bersafar-primary transition-all duration-500 block">{switchingTexts[currentText]}</span>
                Bersama Bersafar
              </h1>
              <p className="text-lg text-bersafar-primary/80 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan jamaah dalam perjalanan spiritual yang berkesan
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  className="bg-bersafar-primary hover:bg-bersafar-primary/90 text-white px-8 py-3 font-poppins font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setDialogOpen(true)}
                >
                  Mulai Bersafar
                </Button>
                <Button 
                  variant="outline"
                  className="border-bersafar-primary text-bersafar-primary hover:bg-bersafar-primary hover:text-white px-8 py-3 font-poppins font-semibold rounded-lg transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
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
