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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          // The following ensures only the first 10 seconds play and then loop
          onLoadedMetadata={e => {
            const video = e.currentTarget;
            video.currentTime = 0;
          }}
          onTimeUpdate={e => {
            const video = e.currentTarget;
            if (video.currentTime > 10) {
              video.currentTime = 0;
            }
          }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-nabawi-mosque-1706829608561?token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJ2aWRlb3MvY292ZXJyLW5hYmF3aS1tb3NxdWUtMTcwNjgyOTYwODU2MSIsImV4cCI6MTg3MzMyNjk2MH0.qWZePSjMLrKKWPEWN73tMd8oKq2WGK2gmQCADzkbKsk" type="video/mp4" />
          {/* If the above doesn't play, upload your own Nabawi Mosque video and update the src */}
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Enhanced Parallax Background with Islamic Elements */}
      <div 
        className="absolute inset-0 opacity-20 z-10" 
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        {/* Floating Geometric Patterns */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 border-4 border-gold-300/40 rounded-full animate-pulse-gentle" 
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-40 right-20 w-24 h-24 border-4 border-sand-200/40 rounded-full animate-pulse-gentle" 
          style={{
            animationDelay: '1s',
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-gold-200/40 transform rotate-45 animate-pulse-gentle" 
          style={{
            animationDelay: '2s',
            transform: `rotate(45deg) translateY(${scrollY * 0.2}px)`
          }}
        ></div>
        
        {/* Additional geometric shapes */}
        <div 
          className="absolute top-1/3 right-1/6 w-20 h-20 border-4 border-gold-400/30 transform rotate-12" 
          style={{
            transform: `rotate(12deg) translateY(${scrollY * 0.35}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/6 w-28 h-28 border-4 border-sand-300/30 rounded-full" 
          style={{
            transform: `translateY(${scrollY * 0.25}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/4 left-2/3 w-12 h-12 bg-gold-300/20 transform rotate-45" 
          style={{
            transform: `rotate(45deg) translateY(${scrollY * 0.45}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-2/3 w-36 h-36 border-4 border-spiritual-400/20 rounded-full" 
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        ></div>
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
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with parallax */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 z-10" 
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`
        }}
      >
        
      </div>
    </section>
  );
};

export default HeroSection;
