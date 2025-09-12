import { useState, useEffect } from "react";

const IslamicGeometricBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main geometric pattern background */}
      <div 
        className="absolute inset-0 islamic-geometric-pattern opacity-30"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      
      {/* Floating Islamic geometric shapes - concentrated on the right side */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        {/* Large octagon - top right */}
        <div 
          className="absolute top-12 right-12 w-24 h-24 border-2 border-bersafar-primary/20 rotate-45"
          style={{ 
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            animation: "islamicFloat 8s ease-in-out infinite"
          }}
        />
        
        {/* Medium hexagon - middle right */}
        <div 
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-bersafar-secondary/30 rotate-12"
          style={{ 
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            animation: "islamicFloat 6s ease-in-out infinite 1s"
          }}
        />
        
        {/* Star shape - bottom right */}
        <div 
          className="absolute bottom-20 right-16 w-20 h-20 bg-bersafar-light/10 rotate-30"
          style={{ 
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            animation: "islamicPulse 10s ease-in-out infinite 2s"
          }}
        />
        
        {/* Small diamonds scattered on right */}
        <div 
          className="absolute top-1/4 right-8 w-8 h-8 bg-bersafar-accent/15 rotate-45"
          style={{ animation: "islamicFloat 7s ease-in-out infinite 3s" }}
        />
        <div 
          className="absolute top-3/4 right-32 w-6 h-6 bg-bersafar-primary/20 rotate-45"
          style={{ animation: "islamicFloat 9s ease-in-out infinite 1.5s" }}
        />
        
        {/* Geometric lines pattern - right side emphasis */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="islamicGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 30,0 L 60,30 L 30,60 L 0,30 Z" stroke="#1DB584" strokeWidth="1" fill="none" opacity="0.3"/>
                <circle cx="30" cy="30" r="8" stroke="#16a085" strokeWidth="1" fill="none" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamicGrid)" />
          </svg>
        </div>
      </div>
      
      {/* Subtle overlay gradients */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bersafar-primary/5"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-24 w-2 h-2 bg-bersafar-light/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-12 w-1 h-1 bg-bersafar-secondary/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-48 right-40 w-3 h-3 bg-bersafar-accent/30 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-bersafar-primary/35 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-48 right-8 w-1 h-1 bg-bersafar-light/45 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default IslamicGeometricBackground;