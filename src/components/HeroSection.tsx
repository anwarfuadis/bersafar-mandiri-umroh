
import React from "react";

interface HeroSectionProps {
  onStartJourney: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartJourney }) => {
  return (
    <section className="relative bg-gradient-to-b from-sand-500 to-sand-100 min-h-[420px] flex flex-col justify-center items-center py-24 px-4 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
        Platform Umroh Mandiri Pertama Di Indonesia
      </h1>
      <p className="max-w-lg mx-auto text-lg sm:text-xl text-sand-100 mb-8">
        Rasakan pengalaman ibadah terbaik tanpa mahal dan ribet. Pilih layanan sesuai kebutuhanmu &mdash; langsung dari HP!
      </p>
      <button
        className="px-7 py-3 bg-gold-400 hover:bg-gold-500 rounded-full text-white text-lg font-semibold shadow transition"
        onClick={onStartJourney}
      >
        Mulai Perjalananmu
      </button>
      {/* Optionally add desert/visuals here */}
    </section>
  );
};

export default HeroSection;
