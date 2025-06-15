
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-spiritual-800/95 backdrop-blur-md border-b border-spiritual-600/30 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Name */}
        <div className="flex items-center">
          <h1 className="text-2xl font-sf font-bold text-white tracking-tight">
            Bersafar
          </h1>
          <div className="w-1 h-6 bg-gold-400 ml-3 rounded-full"></div>
        </div>

        {/* CTA Button */}
        <Button 
          size="default" 
          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-6 py-2 font-sf font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
        >
          Mulai Perjalananmu
        </Button>
      </div>
    </header>
  );
};

export default StickyHeader;
