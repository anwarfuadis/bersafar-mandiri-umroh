
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Building, 
  FileText, 
  Users, 
  Car,
  MapPin
} from "lucide-react";

const services = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Tiket Pesawat",
    description: "Dapatkan tiket pesawat dengan harga terbaik untuk perjalanan umroh Anda",
    price: "Mulai Rp 8 juta",
    features: ["Flexible dates", "Best price guarantee", "24/7 support"]
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Hotel",
    description: "Pilihan hotel berkualitas dekat Masjidil Haram dan Masjid Nabawi",
    price: "Mulai Rp 500rb/malam",
    features: ["Prime location", "Halal certified", "Prayer facilities"]
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Visa Umroh",
    description: "Proses visa umroh yang mudah dan terpercaya",
    price: "Rp 1.2 juta",
    features: ["Fast processing", "Document assistance", "Guaranteed approval"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Pendamping (Mutawif)",
    description: "Pemandu berpengalaman untuk membantu ibadah umroh Anda",
    price: "Rp 800rb/hari",
    features: ["Experienced guides", "Spiritual guidance", "Language support"]
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Transportasi Lokal",
    description: "Transportasi nyaman antar kota suci di Arab Saudi",
    price: "Rp 300rb/trip",
    features: ["AC vehicles", "Professional drivers", "Flexible schedule"]
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Handling Bandara",
    description: "Bantuan di bandara untuk keberangkatan dan kepulangan",
    price: "Rp 200rb/pax",
    features: ["Meet & greet", "Baggage assistance", "Check-in help"]
  }
];

const ServicesShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sf font-bold mb-6 text-spiritual-800">
            Layanan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih layanan yang Anda butuhkan untuk perjalanan umroh mandiri yang sempurna
          </p>
        </div>

        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 w-max md:w-full md:grid md:grid-cols-3 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spiritual-100 to-spiritual-200 rounded-xl mb-6 text-spiritual-600">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-spiritual-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gold-600">
                    {service.price}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-spiritual-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-spiritual-600 to-spiritual-700 hover:from-spiritual-700 hover:to-spiritual-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Pilih Layanan
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Butuh bantuan memilih layanan yang tepat?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
