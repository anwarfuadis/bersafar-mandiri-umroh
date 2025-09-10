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
    <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ backgroundColor: '#f8fffe' }}>
      {/* Map Illustration Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-20"
          style={{
            transform: `translateX(${scrollY * 0.1}px) translateY(${scrollY * 0.05}px)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007275' fill-opacity='0.1'%3E%3Cpath d='M100 50 Q150 100 200 50 T300 50 L350 100 Q300 150 250 100 T150 100 Z'/%3E%3Cpath d='M50 150 Q100 200 150 150 T250 150 L300 200 Q250 250 200 200 T100 200 Z'/%3E%3Cpath d='M150 250 Q200 300 250 250 T350 250 L350 300 Q300 350 250 300 T150 300 Z'/%3E%3Ccircle cx='80' cy='80' r='8'/%3E%3Ccircle cx='180' cy='120' r='6'/%3E%3Ccircle cx='280' cy='180' r='10'/%3E%3Ccircle cx='120' cy='280' r='7'/%3E%3Ccircle cx='320' cy='320' r='9'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            backgroundRepeat: 'repeat'
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
                  src="/lovable-uploads/bersafar-logo-new.png" 
                  alt="Bersafar Logo"
                  className="h-16 w-16 brightness-0 invert"
                />
              </div>
              <h1 id="hero-brand" className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-bersafar-primary mb-4 leading-tight">
                 Perjalanan{" "}
                <span className="text-bersafar-primary transition-all duration-500">{switchingTexts[currentText]}</span>
                , Bersama Bersafar
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
