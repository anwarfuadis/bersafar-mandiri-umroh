import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import temanSafarImg from "@/assets/teman-safar-illustration.jpg";
import umrohImg from "@/assets/umroh-illustration.jpg";

const LayananBersafar = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Teman Safar",
      description: "Temukan teman perjalanan yang sesuai dengan kriteria Anda. Bergabunglah dengan jamaah yang telah terverifikasi untuk pengalaman spiritual yang berkesan.",
      buttonText: "Teman Safar",
      buttonAction: () => navigate("/cari-teman-safar"),
      image: temanSafarImg,
      previewCards: [
        { title: "Umroh Bareng Sister", location: "Makkah • Madinah", date: "15 Jan 2025", slots: "3/8 sister" },
        { title: "Haji Furoda 2025", location: "Saudi Arabia", date: "Mar 2025", slots: "5/12 jamaah" },
        { title: "Turkey Adventure", location: "Istanbul • Cappadocia", date: "20 Feb", slots: "2/6 keluarga" },
        { title: "Malaysia Halal Food", location: "KL • Johor", date: "8 Mar", slots: "4/10 peserta" },
        { title: "Bosnia Heritage", location: "Sarajevo • Mostar", date: "12 Apr", slots: "1/8 jamaah" }
      ]
    },
    {
      id: 2,
      title: "Umroh Mandiri",
      description: "Rencanakan perjalanan umroh sesuai keinginan Anda dengan paket fleksibel yang dapat disesuaikan. Dari ekonomi hingga premium, semua tersedia.",
      buttonText: "Lihat Paket Umroh",
      buttonAction: () => navigate("/umroh-mandiri"),
      image: umrohImg,
      previewCards: [
        { title: "Umroh Ekonomi", price: "Rp 25.900.000", duration: "9 hari", hotel: "⭐⭐⭐" },
        { title: "Umroh Plus", price: "Rp 32.500.000", duration: "12 hari", hotel: "⭐⭐⭐⭐" },
        { title: "Umroh VIP", price: "Rp 45.000.000", duration: "14 hari", hotel: "⭐⭐⭐⭐⭐" },
        { title: "Umroh Keluarga", price: "Rp 38.900.000", duration: "10 hari", hotel: "⭐⭐⭐⭐" },
        { title: "Umroh Ramadan", price: "Rp 52.000.000", duration: "15 hari", hotel: "⭐⭐⭐⭐⭐" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-spiritual-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-inter font-bold text-spiritual-800 mb-4">
            Layanan Bersafar
          </h2>
          <p className="text-lg text-spiritual-600 max-w-3xl mx-auto">
            Kami memahami kebutuhan unik setiap perjalanan spiritual Anda. Pilih layanan yang sesuai dengan kebutuhan dan preferensi Anda.
          </p>
        </div>

        {/* Services Carousel */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left Content */}
                      <div className="lg:w-1/2">
                        <div className="mb-6">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-64 object-cover rounded-xl"
                          />
                        </div>
                        <h3 className="text-3xl font-inter font-bold text-spiritual-800 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-spiritual-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Button 
                          onClick={service.buttonAction}
                          className="bg-gradient-to-r from-spiritual-600 to-spiritual-700 hover:from-spiritual-700 hover:to-spiritual-800 text-white font-inter font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105"
                        >
                          {service.buttonText}
                        </Button>
                      </div>
                      
                      {/* Right Preview Cards */}
                      <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.previewCards.map((card, index) => (
                            <div key={index} className="bg-gradient-to-br from-spiritual-50 to-gold-50 rounded-xl p-4 border border-spiritual-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                              <h4 className="font-inter font-bold text-spiritual-800 mb-2 text-sm">{card.title}</h4>
                              {service.id === 1 ? (
                                <>
                                  <p className="text-xs text-spiritual-600 mb-1">{card.location}</p>
                                  <p className="text-xs text-spiritual-600 mb-2">{card.date}</p>
                                  <div className="bg-spiritual-600 text-white px-2 py-1 rounded-full text-xs font-medium inline-block">
                                    {card.slots}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <p className="text-sm font-bold text-spiritual-700 mb-1">{card.price}</p>
                                  <p className="text-xs text-spiritual-600 mb-1">{card.duration}</p>
                                  <p className="text-xs text-gold-600">{card.hotel}</p>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-spiritual-600 mb-4">
            Masih bingung memilih? Tim kami siap membantu Anda
          </p>
          <Button 
            variant="outline" 
            className="border-spiritual-300 text-spiritual-700 hover:bg-spiritual-100 font-inter font-medium px-8 py-3"
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LayananBersafar;