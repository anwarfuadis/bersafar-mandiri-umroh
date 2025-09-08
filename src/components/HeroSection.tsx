import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const switchingTexts = ["Bersama", "Berpahala", "Bertaqwa"];

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Islamic Geometric Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/islamic-geometric-bg.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div 
          className="absolute inset-0 hero-islamic-pattern opacity-60" 
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute inset-0 hero-islamic-overlay opacity-40"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-spiritual-900/70 via-spiritual-800/50 to-spiritual-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
        {/* Hero Menu - Moved up 2.5x */}
        <div className="absolute -top-20 left-0 right-0 flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/272925e1-b602-43c2-b45f-ca66db286237.png" 
                  alt="Bersafar Logo"
                  className="h-8 w-8 brightness-0 invert"
                />
                <span className="text-xl font-inter font-bold text-white">
                  Bersafar
                </span>
              </div>

              {/* CTA Button */}
              <Button 
                className="bg-gradient-to-r from-islamic-primary to-islamic-secondary hover:from-islamic-secondary hover:to-islamic-dark text-white px-6 py-3 font-inter font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-islamic-light/30"
                onClick={() => setDialogOpen(true)}
              >
                Mulai Bersafar
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-24">
          <div className="text-center">
            <div className="animate-fade-in">
              {/* Logo in hero section */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/lovable-uploads/272925e1-b602-43c2-b45f-ca66db286237.png" 
                  alt="Bersafar Logo"
                  className="h-20 w-20 brightness-0 invert"
                />
              </div>
              <h1 id="hero-brand" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-white mb-6 leading-tight">
                <span className="text-islamic-primary">Bersafar</span>
                <br />
                Perjalanan Bermakna,
                <br />
                <span className="text-islamic-primary transition-all duration-500">{switchingTexts[currentText]}</span>
              </h1>
              <div className="mt-8">
                <Button 
                  className="bg-gradient-to-r from-islamic-primary to-islamic-secondary hover:from-islamic-secondary hover:to-islamic-dark text-white px-8 py-4 font-inter font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-islamic-light/30"
                  onClick={() => setDialogOpen(true)}
                >
                  Mulai Bersafar
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
