
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
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2019/11/25/29586-376282526_large.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-b from-spiritual-600 via-spiritual-700/80 to-white/95"></div>
        </video>
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Enhanced Parallax Background with Islamic Elements */}
      <div className="absolute inset-0 opacity-20 z-5" style={{
        transform: `translateY(${scrollY * 0.5}px)`
      }}>
        {/* Mosque Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-spiritual-900/40 to-transparent">
          <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-spiritual-900/30 rounded-t-full"></div>
          <div className="absolute bottom-0 left-1/3 w-20 h-40 bg-spiritual-900/30 rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/3 w-18 h-36 bg-spiritual-900/30 rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/4 w-14 h-28 bg-spiritual-900/30 rounded-t-full"></div>
        </div>
        
        {/* Floating Geometric Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-gold-300/50 rounded-full animate-pulse-gentle shadow-xl" style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-sand-200/50 rounded-full animate-pulse-gentle shadow-xl" style={{
          animationDelay: '1s',
          transform: `translateY(${scrollY * 0.4}px)`
        }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-gold-200/50 transform rotate-45 animate-pulse-gentle shadow-xl" style={{
          animationDelay: '2s',
          transform: `rotate(45deg) translateY(${scrollY * 0.2}px)`
        }}></div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/3 right-1/6 w-20 h-20 border-4 border-gold-400/40 transform rotate-12 shadow-xl" style={{
          transform: `rotate(12deg) translateY(${scrollY * 0.35}px)`
        }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-28 h-28 border-4 border-sand-300/40 rounded-full shadow-xl" style={{
          transform: `translateY(${scrollY * 0.25}px)`
        }}></div>
        <div className="absolute top-1/4 left-2/3 w-12 h-12 bg-gold-300/30 transform rotate-45 shadow-xl" style={{
          transform: `rotate(45deg) translateY(${scrollY * 0.45}px)`
        }}></div>
        <div className="absolute bottom-1/4 right-2/3 w-36 h-36 border-4 border-spiritual-400/30 rounded-full shadow-xl" style={{
          transform: `translateY(${scrollY * 0.15}px)`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sf text-white mb-2 leading-tight tracking-tight font-bold">
              Bersafar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Tagline */}
          <p className="text-xl md:text-2xl mb-4 font-sf font-semibold text-white">Platform Umroh Mandiri Pertama Di Indonesia</p>
          
          <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Pilih Layanan Sesuai Kebutuhan Umroh Mandiri Kamu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 px-10 py-6 text-lg font-sf font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-gold-400/30">
              Mulai Perjalananmu
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm font-sf uppercase tracking-wider mb-4 text-gray-100">IN PARTERSHIP WITH</p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with parallax */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 z-10" style={{
        transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`
      }}>
        
      </div>
    </section>
  );
};

export default HeroSection;
