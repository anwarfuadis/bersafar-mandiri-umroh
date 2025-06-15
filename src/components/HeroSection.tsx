import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// --- NEW: Realistic background image (Unsplash desert) ---
const HERO_BG =
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&q=80";

// --- Cloud SVG stays for parallax effect ---
function CloudSVG({ style = {}, className = "" }) {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="33" cy="38" rx="33" ry="18" fill="#fff" fillOpacity="0.7" />
      <ellipse cx="70" cy="28" rx="28" ry="16" fill="#fff" fillOpacity="0.75" />
      <ellipse cx="85" cy="41" rx="20" ry="13" fill="#fff" fillOpacity="0.65" />
    </svg>
  );
}

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep clouds for gentle motion
  const clouds = [
    {
      top: "12%",
      left: "8%",
      speed: 0.2,
      scale: 1.2,
      zIndex: 5,
      opacity: 0.78,
    },
    {
      top: "30%",
      left: "70%",
      speed: 0.3,
      scale: 0.75,
      zIndex: 6,
      opacity: 0.7,
    },
    {
      top: "22%",
      left: "40%",
      speed: -0.1,
      scale: 1,
      zIndex: 4,
      opacity: 0.65,
    },
    {
      top: "10%",
      left: "55%",
      speed: 0.22,
      scale: 1,
      zIndex: 7,
      opacity: 0.5,
    },
    {
      top: "37%",
      left: "20%",
      speed: -0.12,
      scale: 0.9,
      zIndex: 4,
      opacity: 0.85,
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `url(${HERO_BG}) center center / cover no-repeat`,
      }}
    >
      {/* Realistic background overlay for color harmony */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300/40 via-amber-50/60 to-sand-100/90 mix-blend-multiply" aria-hidden="true"></div>

      {/* Gentle Animated Clouds */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {clouds.map((cloud, idx) => (
          <CloudSVG
            key={idx}
            style={{
              position: "absolute",
              top: cloud.top,
              left: cloud.left,
              transform: `translateX(${scrollY * cloud.speed}px) scale(${cloud.scale})`,
              opacity: cloud.opacity,
              zIndex: cloud.zIndex,
              transition: "transform 0.2s",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sf text-white mb-2 leading-tight tracking-tight font-bold drop-shadow-2xl">
              Bersafar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-sf font-semibold text-amber-400 drop-shadow-lg">
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

      {/* Scroll indicator retains simple bounce */}
      <div
        className="absolute bottom-8 left-1/2 animate-bounce opacity-80 z-20"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* Optionally add a down arrow SVG */}
      </div>
    </section>
  );
};

export default HeroSection;
