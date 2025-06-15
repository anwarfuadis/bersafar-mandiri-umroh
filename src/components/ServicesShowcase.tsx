
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
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sf font-light text-spiritual-800 mb-6">
            Kenapa <span className="font-medium text-spiritual-600">Bersafar?</span>
          </h2>
          <p className="text-xl text-spiritual-600 max-w-3xl mx-auto">
            Transparansi harga, fleksibilitas penuh, dan dukungan sepanjang perjalanan. 
            Pilih apa yang kamu butuhkan, bayar apa yang kamu pakai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 ${
                service.popular ? 'ring-2 ring-gold-400' : ''
              }`}
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

        {/* Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 animate-slide-in">
            <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-xl font-sf font-semibold text-spiritual-800 mb-3">
              Fleksibilitas Penuh
            </h4>
            <p className="text-spiritual-600 font-sf">
              Pilih layanan sesuai kebutuhan. Tidak ada paket yang memaksa.
            </p>
          </div>

          <div className="p-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="text-xl font-sf font-semibold text-spiritual-800 mb-3">
              Harga Transparan
            </h4>
            <p className="text-spiritual-600 font-sf">
              Tidak ada biaya tersembunyi. Apa yang kamu lihat, itulah yang kamu bayar.
            </p>
          </div>

          <div className="p-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-spiritual-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-xl font-sf font-semibold text-spiritual-800 mb-3">
              Support 24/7
            </h4>
            <p className="text-spiritual-600 font-sf">
              Tim support siap membantu kapan saja, termasuk saat di Tanah Suci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
