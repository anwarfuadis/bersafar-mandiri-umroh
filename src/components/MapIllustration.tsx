import { useState, useEffect } from "react";

const MapIllustration = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Parallax Background Map */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Pastel Map Elements */}
        <div className="absolute inset-0">
          {/* Continents in pastel colors */}
          <div className="absolute top-12 left-6 w-24 h-16 bg-emerald-200/70 rounded-full transform rotate-12"></div>
          <div className="absolute top-28 right-10 w-20 h-12 bg-rose-200/70 rounded-lg transform -rotate-6"></div>
          <div className="absolute bottom-24 left-12 w-28 h-10 bg-amber-200/70 rounded-full transform rotate-3"></div>
          <div className="absolute bottom-16 right-6 w-22 h-18 bg-purple-200/70 rounded-lg transform -rotate-12"></div>
          <div className="absolute top-1/3 left-1/3 w-16 h-12 bg-teal-200/70 rounded-full transform rotate-45"></div>
          
          {/* Ocean waves in soft blue */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <path d="M0,200 Q200,180 400,200 T800,200" stroke="#93C5FD" strokeWidth="2" fill="none" />
            <path d="M0,220 Q250,200 500,220 T1000,220" stroke="#BFDBFE" strokeWidth="1.5" fill="none" />
            <path d="M0,240 Q150,225 300,240 T600,240" stroke="#DBEAFE" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Parallax Geometric Shapes */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        {/* Floating geometric shapes */}
        <div className="absolute top-8 right-12 w-8 h-8 bg-blue-300/40 rotate-45 rounded-sm animate-pulse"></div>
        <div className="absolute top-32 left-16 w-6 h-6 bg-cyan-300/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-teal-300/40 rotate-12 rounded-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-8 w-4 h-4 bg-sky-300/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-7 h-7 bg-indigo-300/40 rotate-30 rounded-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Static Route Points */}
      <div className="relative z-10">
        {/* Point A */}
        <div className="absolute" style={{ left: '15%', top: '65%' }}>
          <div className="relative">
            <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-lg"></div>
            <div className="absolute -top-8 -left-2 text-xs font-semibold text-emerald-700">Makkah</div>
          </div>
        </div>

        {/* Point B */}
        <div className="absolute" style={{ left: '80%', top: '30%' }}>
          <div className="relative">
            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="absolute -top-8 -left-4 text-xs font-semibold text-blue-700">Jakarta</div>
          </div>
        </div>

        {/* Dotted Path */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <path
            d="M 15% 65% Q 50% 20% 80% 30%"
            stroke="#0EA5E9"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,6"
            className="opacity-60"
          />
        </svg>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-6 left-8 text-xl opacity-50">🕌</div>
      <div className="absolute bottom-8 right-12 text-lg opacity-60">🌙</div>
      <div className="absolute top-1/3 left-1/2 text-sm opacity-40">⭐</div>
    </div>
  );
};

export default MapIllustration;