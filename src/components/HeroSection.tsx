import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const menuItems = ["Umroh", "Eropa", "USA", "Asia", "Private Trip"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cappadocia Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />
      </div>

      {/* Auto-play Video Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
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
                  src="/lovable-uploads/5c10e529-f63f-4a40-91fd-f6569ec1bee1.png" 
                  alt="Bersafar Logo"
                  className="h-8 w-8"
                />
                <span className="text-xl font-sf font-bold text-white">
                  Bersafar
                </span>
              </div>

              {/* Menu Items */}
              <div className="hidden md:flex items-center space-x-6">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className="text-white hover:text-gold-300 font-sf font-medium px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-6 py-3 font-sf font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
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
              <h1 id="hero-brand" className="text-6xl md:text-7xl lg:text-8xl font-sf font-bold text-white mb-6 leading-tight">
                <span className="text-gold-400">Bersafar</span>
                <br />
                Perjalanan Bermakna,
                <br />
                <span className="text-gold-400">Bersama-sama</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
