
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual-600 via-spiritual-700 to-spiritual-800"></div>
      
      {/* Parallax Background with Islamic Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Mosque Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-spiritual-900/50 to-transparent">
          <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-spiritual-900/30 rounded-t-full"></div>
          <div className="absolute bottom-0 left-1/3 w-20 h-40 bg-spiritual-900/30 rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/3 w-18 h-36 bg-spiritual-900/30 rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/4 w-14 h-28 bg-spiritual-900/30 rounded-t-full"></div>
        </div>
        
        {/* Floating Geometric Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold-300/30 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-sand-200/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-gold-200/30 transform rotate-45 animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
        
        {/* Star Pattern */}
        <div className="absolute top-1/4 right-1/4 text-gold-300/20 text-4xl animate-pulse-gentle">✦</div>
        <div className="absolute top-1/3 left-1/6 text-sand-200/20 text-2xl animate-pulse-gentle" style={{ animationDelay: '1.5s' }}>✦</div>
        <div className="absolute bottom-1/3 right-1/6 text-gold-200/20 text-3xl animate-pulse-gentle" style={{ animationDelay: '2.5s' }}>✦</div>
      </div>

      {/* Parallax Overlay Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-spiritual-800/20 to-spiritual-900/40"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sf font-light text-white mb-2 leading-tight tracking-tight">
              Bersafar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Tagline */}
          <h2 className="text-3xl md:text-5xl font-sf font-light text-sand-100 mb-6 leading-tight">
            Umroh <span className="font-medium text-gold-300">Mandiri</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-sand-200 mb-4 font-sf font-light">
            Sesimpel yang Kamu Bayangkan
          </p>
          
          <p className="text-lg text-sand-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pilih layanan yang kamu butuhkan, skip yang tidak. 
            <br className="hidden md:block" />
            Visa, hotel, penerbangan, dan mutawif - semuanya à la carte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-10 py-6 text-lg font-sf font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gold-400/30"
            >
              Mulai Perjalananmu
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-sand-200/50 text-sand-100 hover:bg-white/10 hover:text-white backdrop-blur-sm px-10 py-6 text-lg font-sf font-medium rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Lihat Layanan
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-sand-400 font-sf uppercase tracking-wider mb-4">
              Dipercaya oleh 1000+ jamaah
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="text-gold-400 text-2xl">★★★★★</div>
              <div className="text-sand-200 font-sf font-medium">4.9/5</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70"
        style={{ transform: `translateX(-50%) translateY(${scrollY * 0.1}px)` }}
      >
        <div className="w-6 h-10 border-2 border-sand-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sand-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
