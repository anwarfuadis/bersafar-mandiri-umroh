import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/RegistrationModal";

// --- Background image ---
const HERO_BG =
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&q=80";

// SVG desert: deeper brown and large
const DARK_DESERT_SVG = `
<svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="#A47343" fill-opacity="1"
    d="M0,288L120,272C240,256,480,224,720,218.7C960,213,1200,235,1320,245.3L1440,256V320H1320C1200,320,960,320,720,320C480,320,240,320,120,320H0V288Z"/>
  <path fill="#C29D77" fill-opacity="0.5"
    d="M0,256L120,245.3C240,235,480,213,720,224C960,235,1200,277,1320,293.3L1440,320V0H1320C1200,0,960,0,720,0C480,0,240,0,120,0H0V256Z"/>
</svg>
`;

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For accessibility: bring desert SVG to front only at bottom
  const desertParallax = {
    transform: `translateY(${scrollY * 0.15}px)`,
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #2A2923 65%, #A47343 100%)`
      }}
    >
      {/* Background with a darker, subtle overlay for daytime desert */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1710]/80 via-[#513f28]/70 to-[#9c794d]/85 z-0" aria-hidden="true"></div>
      {/* Main Unsplash Image for sky */}
      <div className="absolute inset-0 z-0"
        style={{
          background: `url(${HERO_BG}) center top / cover no-repeat`,
          opacity: 0.44
        }} aria-hidden="true"></div>
      {/* Parallax desert SVG */}
      <div
        className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none select-none"
        style={desertParallax}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: DARK_DESERT_SVG}}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sf text-[#ecd4ad] mb-2 leading-tight tracking-tight font-bold drop-shadow-xl" style={{
              background: "linear-gradient(99deg, #ecd4ad 50%, #b4885e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Bersafar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-700 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-sf font-semibold text-white drop-shadow-lg">
            Platform Umroh Mandiri Pertama Di Indonesia
          </p>

          <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Pilih Layanan Sesuai Kebutuhan Umroh Mandiri Kamu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-slate-900 px-10 py-6 text-lg font-sf font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-amber-400/30"
              onClick={() => setOpenModal(true)}
            >
              Mulai Perjalananmu
            </Button>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <RegistrationModal open={openModal} onOpenChange={setOpenModal} />

      {/* Scroll indicator (optional, but not a desert color to keep sand clear) */}
      <div
        className="absolute bottom-8 left-1/2 animate-bounce opacity-80 z-20"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`
        }}
      >
        {/* Arrow indicator, if desired */}
      </div>
    </section>
  );
};

export default HeroSection;
