
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// --- Background image ---
const HERO_BG =
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&q=80";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `url(${HERO_BG}) center center / cover no-repeat`
      }}
    >
      {/* 1. Realistic background overlay for color harmony */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        aria-hidden="true"
        style={{
          background: "linear-gradient(180deg, rgba(81,166,211,0.35) 0%, rgba(255,249,227,0.62) 55%, rgba(245,193,113,0.7) 94%)",
        }}
      ></div>
      {/* 2. Animated "desert" sand at the BOTTOM */}
      <div
        className="absolute left-0 w-full h-48 md:h-60 bottom-0 z-20 pointer-events-none"
        aria-hidden="true"
        style={{
          // The shape and color of the animated "desert"
          background:
            "radial-gradient(ellipse at 50% 94%, #EDDDA1 90%, #DAC34A 100%)",
          opacity: 1,
          filter: "blur(0.5px)"
        }}
      >
        <div
          className="w-full h-full"
          style={{
            animation: "desertWave 4s linear infinite alternate"
          }}
        />
        <style>
          {`
          @keyframes desertWave {
            0% { transform: translateY(8px) scaleX(1); }
            50% { transform: translateY(0px) scaleX(1.02);}
            100% { transform: translateY(12px) scaleX(0.98);}
          }
          `}
        </style>
      </div>

      {/* 3. Overlay gradient directly under content for darker sand under text */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 w-full max-w-5xl h-96 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 20%, rgba(234,198,92, 0.35) 98%)"
        }}
      />

      {/* 4. Hero Content */}
      <div className="relative z-40 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sf text-white mb-2 leading-tight tracking-tight font-bold drop-shadow-2xl">
              Bersafar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-sf font-semibold text-white drop-shadow-none">
            Platform Umroh Mandiri Pertama Di Indonesia
          </p>

          <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Pilih Layanan Sesuai Kebutuhan Umroh Mandiri Kamu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-10 py-6 text-lg font-sf font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gold-400/30">
              Mulai Perjalananmu
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm font-sf uppercase tracking-wider mb-4 text-gray-100 drop-shadow-lg">
              IN PARTERSHIP WITH
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              {/* Add logos if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 animate-bounce opacity-80 z-40"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`
        }}
      >
        {/* Optionally add a down arrow SVG */}
      </div>
    </section>
  );
};

export default HeroSection;
