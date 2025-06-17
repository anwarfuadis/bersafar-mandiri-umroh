
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "@/components/RegistrationDialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Attach scroll event
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Desert Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-sand-300 via-sand-400 to-sand-600"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        {/* Animated sand dunes */}
        <div className="absolute inset-0">
          <div 
            className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-sand-500 to-transparent rounded-full blur-3xl animate-pulse-gentle"
            style={{
              transform: `translateX(${Math.sin(Date.now() * 0.001) * 20}px)`,
            }}
          />
          <div 
            className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-t from-sand-600 to-transparent rounded-full blur-2xl opacity-70"
            style={{
              transform: `translateX(${Math.sin(Date.now() * 0.0008) * -30}px)`,
            }}
          />
          <div 
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-gold-400/30 to-sand-500/30 rounded-full blur-3xl animate-pulse-gentle"
            style={{
              transform: `translateY(${Math.sin(Date.now() * 0.0012) * 15}px)`,
            }}
          />
        </div>
        
        {/* Wind effect particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-sand-200 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-spiritual-600/40 via-spiritual-700/50 to-spiritual-800/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png" 
              alt="Bersafar" 
              className="h-20 md:h-24 mx-auto mb-6"
            />
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-sf font-semibold text-white">
            Platform Umroh Mandiri Pertama Di Indonesia
          </p>

          <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Pilih Layanan Sesuai Kebutuhan Umroh Mandiri Kamu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-10 py-6 text-lg font-sf font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gold-400/30"
              onClick={() => setDialogOpen(true)}
            >
              Mulai Perjalananmu
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm font-sf uppercase tracking-wider mb-4 text-gray-100 drop-shadow-lg">
              IN PARTNERSHIP WITH
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              {/* Add logos if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 animate-bounce opacity-80 z-20"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`
        }}
      >
        {/* Optionally add a down arrow SVG */}
      </div>
      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
