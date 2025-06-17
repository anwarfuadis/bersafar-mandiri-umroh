
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
      {/* Parallax Geometric Shapes */}
      <div className="parallax-shapes">
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <source src="https://player.vimeo.com/external/418113258.sd.mp4?s=4b3b4e3a4d7c5f7e9f1a2b3c4d5e6f7g8h9i0j1k&profile_id=165" type="video/mp4" />
          {/* Fallback to animated background if video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-sand-300 via-sand-400 to-sand-600 animate-desert-wind" />
        </video>
        
        {/* Fallback animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand-300 via-sand-400 to-sand-600 animate-desert-wind opacity-0" />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-spiritual-600/40 via-spiritual-700/50 to-spiritual-800/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png" 
              alt="Bersafar" 
              className="h-16 md:h-20 mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sf font-bold text-white mb-6">
              Bersafar
            </h1>
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
