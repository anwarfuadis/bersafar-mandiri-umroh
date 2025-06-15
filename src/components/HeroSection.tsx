
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const MOSQUE_COLOR = "#dac34a";

// Simple stylized mosque SVG
function MosqueSVG() {
  return (
    <svg
      viewBox="0 0 600 300"
      fill="none"
      className="w-full h-full"
      style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      aria-hidden="true"
    >
      {/* Main dome */}
      <ellipse
        cx="300"
        cy="190"
        rx="95"
        ry="50"
        fill={MOSQUE_COLOR}
        stroke="#B8942D"
        strokeWidth="4"
      />
      {/* Left dome */}
      <ellipse
        cx="175"
        cy="220"
        rx="45"
        ry="28"
        fill={MOSQUE_COLOR}
        stroke="#B8942D"
        strokeWidth="3"
      />
      {/* Right dome */}
      <ellipse
        cx="425"
        cy="220"
        rx="45"
        ry="28"
        fill={MOSQUE_COLOR}
        stroke="#B8942D"
        strokeWidth="3"
      />
      {/* Left minaret */}
      <rect x="130" y="130" width="18" height="110" fill={MOSQUE_COLOR} stroke="#B8942D" strokeWidth="3" />
      <rect x="134" y="112" width="10" height="18" fill={MOSQUE_COLOR} stroke="#B8942D" strokeWidth="2" />
      {/* Right minaret */}
      <rect x="452" y="130" width="18" height="110" fill={MOSQUE_COLOR} stroke="#B8942D" strokeWidth="3" />
      <rect x="456" y="112" width="10" height="18" fill={MOSQUE_COLOR} stroke="#B8942D" strokeWidth="2" />
      {/* Mosque base */}
      <rect x="120" y="240" width="360" height="40" fill="#e4dac2" stroke="#B8942D" strokeWidth="4" rx="10"/>
      {/* Mosque door */}
      <rect x="275" y="240" width="50" height="40" fill="#b8942d" rx="8"/>
      {/* Crescent moon on main dome */}
      <path d="M300 135 Q308 140 300 155 Q292 140 300 135" stroke="#fff8dc" strokeWidth="3" fill="none"/>
      <circle cx="300" cy="134" r="5" fill="#fff8dc"/>
    </svg>
  );
}

// SVG for a simple soft cloud
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move clouds horizontally based on scroll position (parallax)
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-300/90 via-sky-200/70 to-sand-100">
      {/* Animated Clouds */}
      <div className="absolute inset-0 pointer-events-none z-0 select-none">
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

      {/* Animated Stylized Mosque at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 z-10 w-full h-[32vh] md:h-[37vh] pointer-events-none select-none animate-fade-in">
        <MosqueSVG />
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
          <p className="text-xl md:text-2xl mb-4 font-sf font-semibold text-amber-400 drop-shadow-lg">Platform Umroh Mandiri Pertama Di Indonesia</p>
          
          <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Pilih Layanan Sesuai Kebutuhan Umroh Mandiri Kamu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-10 py-6 text-lg font-sf font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gold-400/30">
              Mulai Perjalananmu
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm font-sf uppercase tracking-wider mb-4 text-gray-100 drop-shadow-lg">IN PARTERSHIP WITH</p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              {/* Add logos if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with parallax */}
      <div 
        className="absolute bottom-8 left-1/2 animate-bounce opacity-70 z-20"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`
        }}
      >
        {/* You could add a down arrow SVG here for scroll hint */}
      </div>
    </section>
  );
};

export default HeroSection;
