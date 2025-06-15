
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Fitri",
    age: 24,
    location: "Jakarta",
    quote: "Saya cuma butuh visa & mutawif. Bersafar beneran no drama!",
    avatar: "👩🏻",
    service: "Visa + Mutawif"
  },
  {
    id: 2,
    name: "Ahmad",
    age: 28,
    location: "Bandung",
    quote: "Pertama kali umroh sendiri. Bersafar bikin semuanya jadi simpel.",
    avatar: "👨🏻",
    service: "Full Services"
  },
  {
    id: 3,
    name: "Sari",
    age: 32,
    location: "Surabaya",
    quote: "Harga transparan, ga ada yang disembunyiin. Recommended banget!",
    avatar: "👩🏻‍🧕",
    service: "Hotel + Penerbangan"
  }
];

const TestimonialSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-spiritual-600 to-spiritual-800">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-sand-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gold-200 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-white mb-6">
            Kata <span className="font-medium text-gold-300">Mereka</span>
          </h2>
          <p className="text-xl text-spiritual-100 max-w-3xl mx-auto">
            Pengalaman nyata dari jamaah yang sudah merasakan kemudahan Bersafar
          </p>
        </div>

        {/* Testimonials Grid - Fixed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 border border-white/20 h-full flex flex-col">
                {/* Header with avatar and info */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl flex-shrink-0">{testimonial.avatar}</div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xl font-sf font-semibold text-white mb-1">
                      {testimonial.name}, {testimonial.age}
                    </h4>
                    <p className="text-spiritual-200 font-sf text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Quote - Main content */}
                <blockquote className="text-lg text-white font-sf leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Footer with rating and service */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-gold-300 text-lg">★★★★★</div>
                  <div className="text-sm text-spiritual-200 font-sf bg-white/10 px-3 py-1 rounded-full">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid - Better Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "1000+", label: "Jamaah Terlayani" },
            { number: "4.9", label: "Rating Kepuasan" },
            { number: "24/7", label: "Customer Support" },
            { number: "100%", label: "Visa Approval" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-sf font-bold text-gold-300 mb-2">
                {stat.number}
              </div>
              <div className="text-spiritual-200 font-sf text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
