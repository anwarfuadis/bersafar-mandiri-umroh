
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
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ihram-video.mp4" type="video/mp4" />
          {/* Fallback to image if video fails */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png')`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Rain Video Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/rain-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Logo - Positioned above the second 'r' */}
          <div className="mb-8" id="hero-brand">
            <div className="relative mb-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-sf font-bold text-white relative inline-block" id="hero-title">
                Bersafa
                <span className="relative inline-block">
                  r
                  <img 
                    src="/lovable-uploads/c763f5f3-1693-45ce-8d6c-1d107368526d.png" 
                    alt="Bersafar Logo"
                    className="absolute -top-20 md:-top-28 lg:-top-36 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" 
                    id="hero-logo" 
                  />
                </span>
              </h1>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-sf font-semibold text-white">
            Platform Umroh Mandiri Pertama Di Indonesia
          </p>

          <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Pilih Layanan Sesuai Kebutuhan Umroh Mandiri Kamu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-10 py-6 text-lg font-sf font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gold-400/30 animate-fade-in"
              onClick={() => setDialogOpen(true)}
              id="hero-cta-button"
            >
              Mulai Perjalananmu
            </Button>
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
