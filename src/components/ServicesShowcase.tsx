import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "✈️",
    title: "Penerbangan",
    description: "Bandingkan harga dari berbagai maskapai. Pilih jadwal yang sesuai dengan rencana ibadahmu.",
    features: ["Harga transparan", "Pilihan jadwal fleksibel", "Dukungan 24/7"],
    startingPrice: "Rp 8,5JT",
    popular: false
  },
  {
    icon: "🏨",
    title: "Hotel",
    description: "Hotel-hotel terpilih dekat Masjidil Haram dan Masjid Nabawi. Mulai dari budget sampai luxury.",
    features: ["Dekat Haram & Nabawi", "Harga per malam", "Booking mudah"],
    startingPrice: "Rp 500rb/malam",
    popular: true
  },
  {
    icon: "🛂",
    title: "Visa Umroh",
    description: "Proses visa Umroh yang cepat dan terpercaya. Termasuk asuransi perjalanan.",
    features: ["Proses 3-5 hari", "Asuransi included", "Garansi approve"],
    startingPrice: "Rp 1,2JT",
    popular: false
  },
  {
    icon: "🧕",
    title: "Mutawif",
    description: "Pemandu ibadah berpengalaman yang akan membimbing perjalanan spiritualmu.",
    features: ["Berpengalaman 10+ tahun", "Bahasa Indonesia", "Grup kecil max 15 orang"],
    startingPrice: "Rp 2,5JT",
    popular: false
  }
];

const ServicesShowcase = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-spiritual-700 via-spiritual-600 to-spiritual-800 overflow-hidden">
      {/* Decorative Gold/Green Islamic Shapes */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-6 left-4 w-32 h-32 bg-gradient-to-br from-gold-300/30 to-gold-400/30 rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-8 w-24 h-24 bg-gradient-to-br from-spiritual-300/30 to-gold-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-gradient-to-br from-gold-100/20 to-spiritual-200/30 rounded-full blur-2xl"></div>
        {/* Arabic calligraphy hint */}
        <div className="absolute right-4 bottom-8 w-14 h-14 rounded-full bg-gradient-to-tr from-gold-300/40 to-spiritual-400/60 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        {/* Headline and Subheading */}
        <div className="mb-10 text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-extrabold font-sf text-gold-300 drop-shadow-lg tracking-tight mb-4">
            Kenapa <span className="text-white">Bersafar?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-sf font-medium leading-relaxed">
            Bersafar membantu kamu yang ingin <span className="text-gold-300 font-semibold">Umrah mandiri</span> dengan mudah, jujur, dan fleksibel. Semua proses dijalankan transparan dan modern, cocok untuk muslim muda Indonesia.
          </p>
        </div>

        {/* FEATURES/COMPARISON: 3 Column */}
        <div className="mb-10 gap-6 grid md:grid-cols-3 animate-fade-in">
          {/* Langkah Mudah */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 flex flex-col items-center text-center shadow-lg hover:bg-white/15 transition duration-300">
            <div className="text-4xl mb-3">🧭</div>
            <h3 className="font-bold text-lg mb-2 text-gold-300">Langkah Mudah</h3>
            <p className="text-white font-sf text-base leading-relaxed">
              Pilih layanan sesuai kebutuhan, tanpa ribet.
            </p>
          </div>
          {/* Harga Transparan */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 flex flex-col items-center text-center shadow-lg hover:bg-white/15 transition duration-300">
            <div className="text-4xl mb-3">💸</div>
            <h3 className="font-bold text-lg mb-2 text-gold-300">Harga Transparan</h3>
            <p className="text-white font-sf text-base leading-relaxed">
              Mulai dari <span className="font-bold text-gold-300">Rp 18 juta</span> <br className="hidden md:inline" /> (Travel agent biasa mulai <span className="line-through text-sand-200">Rp 26 juta</span>).
            </p>
          </div>
          {/* Fleksibel & Bebas Pilih */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 flex flex-col items-center text-center shadow-lg hover:bg-white/15 transition duration-300">
            <div className="text-4xl mb-3">🥇</div>
            <h3 className="font-bold text-lg mb-2 text-gold-300">Fleksibel &amp; Bebas Pilih</h3>
            <p className="text-white font-sf text-base leading-relaxed">
              Ambil layanan yang kamu perlukan, tanpa paket wajib.
            </p>
          </div>
        </div>

        {/* Bersafar vs Travel Agent Comparison */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center md:items-start animate-fade-in">
          <div className="flex-1 w-full">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-semibold text-gold-300 mr-2">Bersafar</span>
                <span className="bg-gold-300/20 text-gold-300/90 text-xs font-bold rounded-full px-3 py-1">Pilihan Mandiri</span>
              </div>
              <ul className="space-y-2 text-white font-sf">
                <li>★ Mulai <span className="font-bold text-gold-300">Rp 18 juta</span></li>
                <li>★ Fleksibel, atur sendiri</li>
                <li>★ Mandiri tapi dibantu</li>
                <li>★ Harga transparan</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto flex items-center justify-center">
            {/* Visual Divider */}
            <span className="h-8 w-8 rounded-full bg-gold-300/20 flex items-center justify-center font-bold text-gold-400 text-lg shadow border-2 border-gold-100 rotate-12 mx-4 md:mx-8">
              VS
            </span>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-semibold text-sand-200 mr-2 opacity-80">Travel Agent</span>
              </div>
              <ul className="space-y-2 text-sand-100/90 font-sf">
                <li>✗ Mulai <span className="font-bold text-sand-200 line-through">Rp 26 juta</span></li>
                <li>✗ Paket fix, kurang fleksibel</li>
                <li>✗ Full service tanpa kustomisasi</li>
                <li>✗ Sering ada biaya tambahan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 hover:from-gold-500 hover:to-gold-800 text-spiritual-900 font-bold text-lg py-5 px-10 rounded-full shadow-xl border border-gold-300/60 transition-all duration-300 hover:scale-105">
            Mulai Umrah Mandiri
          </Button>
        </div>
      </div>

      {/* Services Horizontal Scroll on Mobile, Grid on Desktop */}
      <div 
        className="
          mb-16
          flex gap-6 overflow-x-auto scroll-smooth scroll-pl-6 snap-x snap-mandatory pb-4
          md:grid md:grid-cols-2 md:gap-8 md:overflow-x-visible md:snap-none md:pb-0
        "
      >
        {services.map((service, index) => (
          <Card 
            key={index}
            className={`
              relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 
              ${service.popular ? 'ring-2 ring-gold-400' : ''}
              min-w-[80vw] max-w-xs snap-center md:min-w-0 md:max-w-none
              bg-white md:bg-white
            `}
          >
            {service.popular && (
              <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-sf font-semibold px-3 py-1 rounded-full">
                POPULER
              </div>
            )}
            
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-5xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-sf font-semibold text-spiritual-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-spiritual-600 font-sf leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3 text-spiritual-700 font-sf">
                      <div className="w-2 h-2 bg-spiritual-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-spiritual-500 font-sf">Mulai dari</div>
                  <div className="text-2xl font-sf font-bold text-spiritual-800">
                    {service.startingPrice}
                  </div>
                </div>
                <Button 
                  className={`px-6 py-3 font-sf font-medium rounded-xl transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gold-500 hover:bg-gold-600 text-white'
                      : 'bg-spiritual-600 hover:bg-spiritual-700 text-white'
                  }`}
                >
                  Lihat Detail
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section - Testimonial style, green gradient */}
      <div className="
        mt-12 md:mt-20
        rounded-2xl
        px-6 md:px-12 py-10 md:py-14
        bg-gradient-to-br from-spiritual-700 via-spiritual-600 to-spiritual-800
        shadow-lg relative overflow-hidden
        flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in
      ">
        {/* Decorative glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-4 top-4 w-32 h-32 bg-gradient-to-br from-gold-200/40 to-gold-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-300/20 to-sand-400/10 rounded-full blur-xl"></div>
        </div>
        <div className="relative z-10 flex-1 text-center md:text-left">
          <span className="uppercase text-xs tracking-wide font-semibold text-gold-300/90">Siap Umrah Mandiri Sekarang?</span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-sf font-bold mb-4 mt-2 text-white drop-shadow">
            Jadikan Perjalanan <span className="text-gold-300">Ibadah-mu</span> Lebih Mudah & Transparan
          </h3>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-sf leading-relaxed mb-0">
            Pilih sendiri penerbangan, hotel, visa umroh, mutawif & lainnya sesuai kebutuhanmu. Semua layanan bisa kamu pesan terpisah, mudah, dan terjangkau.
          </p>
        </div>
        <div className="relative z-10">
          <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-bold text-base py-5 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-md">
            Mulai Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
