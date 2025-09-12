import { useState, useEffect } from "react";

const MapIllustration = () => {
  const [planePosition, setPlanePosition] = useState({ x: 10, y: 60 });

  useEffect(() => {
    const animatePlane = () => {
      const duration = 8000; // 8 seconds for full animation
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;
        
        // Create a curved path from point A to point B
        const startX = 10;
        const startY = 60;
        const endX = 85;
        const endY = 25;
        
        // Add curve to the path
        const midX = 50;
        const midY = 15;
        
        let x, y;
        if (progress < 0.5) {
          // First half: A to middle
          const t = progress * 2;
          x = startX + (midX - startX) * t;
          y = startY + (midY - startY) * t;
        } else {
          // Second half: middle to B
          const t = (progress - 0.5) * 2;
          x = midX + (endX - midX) * t;
          y = midY + (endY - midY) * t;
        }
        
        setPlanePosition({ x, y });
        requestAnimationFrame(animate);
      };
      
      animate();
    };

    animatePlane();
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg">
      {/* Background Map Elements */}
      <div className="absolute inset-0">
        {/* Continents/Islands */}
        <div className="absolute top-16 left-8 w-20 h-12 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-12 w-16 h-10 bg-green-200 rounded-lg opacity-60"></div>
        <div className="absolute bottom-20 left-16 w-24 h-8 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-8 w-18 h-14 bg-green-200 rounded-lg opacity-60"></div>
        
        {/* Water/Ocean patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-1 bg-blue-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-28 h-1 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-40 left-12 w-24 h-1 bg-blue-300 rounded-full"></div>
        </div>
      </div>

      {/* Point A */}
      <div className="absolute" style={{ left: '10%', top: '60%' }}>
        <div className="relative">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute -top-8 -left-2 text-xs font-bold text-red-600">A</div>
        </div>
      </div>

      {/* Point B */}
      <div className="absolute" style={{ left: '85%', top: '25%' }}>
        <div className="relative">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute -top-8 -left-2 text-xs font-bold text-green-600">B</div>
        </div>
      </div>

      {/* Flight Path */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M 10% 60% Q 50% 15% 85% 25%"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          className="opacity-70"
        />
      </svg>

      {/* Animated Plane */}
      <div 
        className="absolute transition-all duration-100 ease-linear"
        style={{ 
          left: `${planePosition.x}%`, 
          top: `${planePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 2
        }}
      >
        <div className="text-2xl transform -rotate-12">
          ✈️
        </div>
      </div>

      {/* Decorative Clouds */}
      <div className="absolute top-8 right-16 text-2xl opacity-60">☁️</div>
      <div className="absolute top-24 left-24 text-xl opacity-40">☁️</div>
      <div className="absolute bottom-16 right-32 text-lg opacity-50">☁️</div>
    </div>
  );
};

export default MapIllustration;