
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group"
              style={{ 
                transform: `translateY(${scrollY * 0.05 * (index + 1)}px)`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-xl font-sf font-semibold text-white">
                      {testimonial.name}, {testimonial.age}
                    </h4>
                    <p className="text-spiritual-200 font-sf text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <blockquote className="text-lg text-white font-sf leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="text-gold-300 text-xl">★★★★★</div>
                  <div className="text-sm text-spiritual-200 font-sf">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-sf font-bold text-gold-300 mb-2">
              1000+
            </div>
            <div className="text-spiritual-200 font-sf">
              Jamaah Terlayani
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl md:text-4xl font-sf font-bold text-gold-300 mb-2">
              4.9
            </div>
            <div className="text-spiritual-200 font-sf">
              Rating Kepuasan
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-sf font-bold text-gold-300 mb-2">
              24/7
            </div>
            <div className="text-spiritual-200 font-sf">
              Customer Support
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-4xl font-sf font-bold text-gold-300 mb-2">
              100%
            </div>
            <div className="text-spiritual-200 font-sf">
              Visa Approval
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
