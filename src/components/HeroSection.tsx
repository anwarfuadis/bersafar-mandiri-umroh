
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
      {/* Enhanced Gradient Background - more white at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-spiritual-600 via-spiritual-700 to-white"></div>
      
      {/* Enhanced Parallax Background with more noticeable Islamic Elements */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Mosque Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-spiritual-900/60 to-transparent">
          <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-spiritual-900/50 rounded-t-full"></div>
          <div className="absolute bottom-0 left-1/3 w-20 h-40 bg-spiritual-900/50 rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/3 w-18 h-36 bg-spiritual-900/50 rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/4 w-14 h-28 bg-spiritual-900/50 rounded-t-full"></div>
        </div>
        
        {/* Enhanced Floating Geometric Patterns - more visible */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 border-4 border-gold-300/80 rounded-full animate-pulse-gentle shadow-lg"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 right-20 w-24 h-24 border-4 border-sand-200/80 rounded-full animate-pulse-gentle shadow-lg" 
          style={{ animationDelay: '1s', transform: `translateY(${scrollY * 0.4}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-gold-200/80 transform rotate-45 animate-pulse-gentle shadow-lg" 
          style={{ animationDelay: '2s', transform: `rotate(45deg) translateY(${scrollY * 0.2}px)` }}
        ></div>
        
        {/* Additional geometric shapes - enhanced visibility */}
        <div 
          className="absolute top-1/3 right-1/6 w-20 h-20 border-4 border-gold-400/70 transform rotate-12 shadow-lg"
          style={{ transform: `rotate(12deg) translateY(${scrollY * 0.35}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/6 w-28 h-28 border-4 border-sand-300/70 rounded-full shadow-lg"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        ></div>
        <div 
          className="absolute top-1/4 left-2/3 w-12 h-12 bg-gold-300/40 transform rotate-45 shadow-lg"
          style={{ transform: `rotate(45deg) translateY(${scrollY * 0.45}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-2/3 w-36 h-36 border-4 border-spiritual-400/60 rounded-full shadow-lg"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        
        {/* Enhanced Star Pattern - more visible */}
        <div 
          className="absolute top-1/4 right-1/4 text-gold-300/70 text-5xl animate-pulse-gentle drop-shadow-lg"
          style={{ transform: `translateY(${scrollY * 0.6}px)` }}
        >✦</div>
        <div 
          className="absolute top-1/3 left-1/6 text-sand-200/70 text-3xl animate-pulse-gentle drop-shadow-lg" 
          style={{ animationDelay: '1.5s', transform: `translateY(${scrollY * 0.3}px)` }}
        >✦</div>
        <div 
          className="absolute bottom-1/3 right-1/6 text-gold-200/70 text-4xl animate-pulse-gentle drop-shadow-lg" 
          style={{ animationDelay: '2.5s', transform: `translateY(${scrollY * 0.4}px)` }}
        >✦</div>
        <div 
          className="absolute top-2/3 left-1/3 text-gold-400/60 text-2xl animate-pulse-gentle drop-shadow-lg" 
          style={{ animationDelay: '3s', transform: `translateY(${scrollY * 0.5}px)` }}
        >✦</div>
        <div 
          className="absolute bottom-2/3 right-1/3 text-sand-300/60 text-3xl animate-pulse-gentle drop-shadow-lg" 
          style={{ animationDelay: '0.5s', transform: `translateY(${scrollY * 0.35}px)` }}
        >✦</div>
      </div>

      {/* Enhanced Parallax Overlay Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-spiritual-800/10 to-spiritual-900/20" 
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sf text-white mb-2 leading-tight tracking-tight font-bold">
              Bersafar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Tagline */}
          <h2 className="text-3xl font-sf font-light text-sand-100 mb-6 leading-tight md:text-2xl">
            Umroh <span className="font-medium text-gold-300">Mandiri</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-sand-200 mb-4 font-sf font-light">"Sesimpel yang Kamu Bayangkan"</p>
          
          <p className="text-lg text-sand-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pilih layanan yang kamu butuhkan, skip yang tidak. 
            <br className="hidden md:block" />
            Visa, hotel, penerbangan, dan mutawif - semuanya à la carte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-10 py-6 text-lg font-sf font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gold-400/30">
              Mulai Perjalananmu
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

      {/* Scroll indicator with parallax */}
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
