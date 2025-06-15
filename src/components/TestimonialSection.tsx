import { useEffect, useState } from "react";
const testimonials = [{
  id: 1,
  name: "Fitri",
  age: 24,
  location: "Jakarta",
  quote: "Saya cuma butuh visa & mutawif. Bersafar beneran no drama!",
  avatar: "👩🏻",
  service: "Visa + Mutawif"
}, {
  id: 2,
  name: "Ahmad",
  age: 28,
  location: "Bandung",
  quote: "Pertama kali umroh sendiri. Bersafar bikin semuanya jadi simpel.",
  avatar: "👨🏻",
  service: "Full Services"
}, {
  id: 3,
  name: "Sari",
  age: 32,
  location: "Surabaya",
  quote: "Harga transparan, ga ada yang disembunyiin. Recommended banget!",
  avatar: "👩🏻‍🧕",
  service: "Hotel + Penerbangan"
}];
const TestimonialSection = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-spiritual-700 via-spiritual-600 to-spiritual-800">
      {/* Enhanced Parallax background elements */}
      <div className="absolute inset-0 opacity-20" style={{
      transform: `translateY(${scrollY * 0.2}px)`
    }}>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-sand-300 to-sand-400 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-spiritual-400 to-spiritual-500 rounded-full blur-xl"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-10" style={{
      transform: `translateY(${scrollY * 0.1}px)`
    }}>
        <div className="absolute top-20 right-10 w-16 h-16 border-2 border-gold-300 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-sand-300 rotate-12 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sf font-light text-white mb-3">
            Kata <span className="font-semibold text-gold-300 bg-gradient-to-r from-gold-300 to-gold-400 bg-clip-text text-transparent">Mereka</span>
          </h2>
          <p className="text-lg md:text-xl text-spiritual-100 max-w-4xl mx-auto leading-relaxed">
            Pengalaman nyata dari jamaah yang sudah merasakan kemudahan Bersafar. 
            Cukup pilih yang kamu butuhkan, Bersafar bantu wujudkan ibadahmu.
          </p>
        </div>

        {/* Testimonials Grid - Made smaller with reduced padding and height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-20">
          {testimonials.map((testimonial, index) => <div key={testimonial.id} className="group animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`,
          transform: `translateY(${scrollY * 0.03}px)`
        }}>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-3 md:p-4 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/20 hover:border-white/30 min-h-[280px] flex flex-col group-hover:translate-y-[-4px]">
                {/* Glassmorphism glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* User Info Section */}
                <div className="flex items-start space-x-3 mb-3 relative z-10">
                  <div className="text-2xl md:text-3xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base md:text-lg font-sf font-bold text-white leading-tight mb-1">
                      {testimonial.name}, {testimonial.age}
                    </h4>
                    <p className="text-spiritual-200 font-sf text-sm opacity-80">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="flex-1 mb-3 relative z-10">
                  <blockquote className="text-sm md:text-base text-white font-sf leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Rating Section */}
                <div className="mb-3 relative z-10">
                  <div className="flex items-center justify-center">
                    <div className="text-gold-300 text-base md:text-lg tracking-wide">
                      ★★★★★
                    </div>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center px-2.5 py-1 bg-gradient-to-r from-spiritual-600/80 to-spiritual-700/80 backdrop-blur-sm border border-spiritual-500/30 rounded-full">
                    <span className="text-xs text-spiritual-100 font-sf font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Stats Section - Increased top margin for more space */}
        <div className="relative z-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 bg-spiritual-800/30 backdrop-blur-sm p-6 md:p-8 border border-spiritual-600/20 mt-16 rounded-sm my-0">
          {[{
          number: "1000+",
          label: "Jamaah Terlayani"
        }, {
          number: "4.9",
          label: "Rating Kepuasan"
        }, {
          number: "24/7",
          label: "Customer Support"
        }, {
          number: "100%",
          label: "Visa Approval"
        }].map((stat, index) => <div key={index} className="text-center animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-sf font-bold text-gold-300 mb-2 bg-gradient-to-r from-gold-300 to-gold-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-spiritual-200 font-sf text-sm md:text-base">
                {stat.label}
              </div>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-sf font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="text-lg">Lihat Semua Cerita Jamaah</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;