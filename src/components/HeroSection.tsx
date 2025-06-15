
import React from "react";

interface HeroSectionProps {
  onStartJourney: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartJourney }) => {
  return (
    <section className="relative min-h-[520px] w-full flex flex-col justify-center items-center py-32 px-4 text-center bg-gradient-to-b from-sand-900 to-sand-200 overflow-hidden">
      {/* Background desert illustration */}
      <img
        src="/desert-hero.svg"
        alt="Desert background"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none select-none opacity-90"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Platform Umroh Mandiri Pertama Di Indonesia
        </h1>
        <p className="max-w-lg mx-auto text-lg sm:text-xl text-sand-100 mb-4">
          Rasakan pengalaman ibadah terbaik tanpa mahal dan ribet. Pilih layanan sesuai kebutuhanmu &mdash; langsung dari HP!
        </p>
        <p className="max-w-lg mx-auto text-base sm:text-lg text-gold-200 font-semibold mb-8">
          Bersafar ke Tanah Suci kini <span className="text-gold-400 font-bold">lebih mudah</span> dan <span className="text-gold-400 font-bold">fleksibel</span>
        </p>
        <button
          className="px-7 py-3 bg-gold-400 hover:bg-gold-500 rounded-full text-white text-lg font-semibold shadow transition"
          onClick={onStartJourney}
        >
          Mulai Perjalananmu
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

