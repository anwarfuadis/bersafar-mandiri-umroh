
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Paket Visa + Konsultasi",
    description: "Bantuan pengurusan visa umroh dengan konsultasi gratis",
    price: "Rp 2,500,000",
    originalPrice: "Rp 3,500,000",
    rating: 4.9,
    reviews: 127,
    badge: "Paling Populer",
    features: [
      "Pengurusan visa umroh",
      "Konsultasi gratis 24/7",
      "Panduan persiapan umroh",
      "Support WhatsApp"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Paket Visa + Hotel",
    description: "Visa umroh + rekomendasi hotel terbaik di Makkah & Madinah",
    price: "Rp 8,500,000",
    originalPrice: "Rp 12,000,000",
    rating: 4.8,
    reviews: 89,
    badge: "Hemat 30%",
    features: [
      "Pengurusan visa umroh",
      "Booking hotel di Makkah",
      "Booking hotel di Madinah",
      "Konsultasi gratis"
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Paket Lengkap Mandiri",
    description: "Solusi lengkap umroh mandiri dengan harga terjangkau",
    price: "Rp 18,000,000",
    originalPrice: "Rp 26,000,000",
    rating: 5.0,
    reviews: 156,
    badge: "Terlengkap",
    features: [
      "Pengurusan visa umroh",
      "Rekomendasi tiket pesawat",
      "Booking hotel pilihan",
      "Panduan lengkap umroh",
      "Support 24/7"
    ],
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop&crop=center"
  }
];

const ServicesShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-sand-50/30 to-spiritual-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sf font-bold text-spiritual-800 mb-6">
            Kenapa Bersafar?
          </h2>
          <p className="text-lg md:text-xl text-spiritual-600 max-w-3xl mx-auto leading-relaxed">
            Pilih paket umroh mandiri yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-spiritual-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              {/* Badge */}
              {service.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-gold-500 to-gold-600 text-spiritual-900 font-sf font-semibold">
                  {service.badge}
                </Badge>
              )}

              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-sf font-bold text-spiritual-800 leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-gold-400 text-gold-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-spiritual-600 font-sf">
                    {service.rating} ({service.reviews} ulasan)
                  </span>
                </div>

                <CardDescription className="text-spiritual-600 font-sf leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-sf font-bold text-spiritual-800">
                      {service.price}
                    </span>
                    <span className="text-sm text-spiritual-500 line-through">
                      {service.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-spiritual-700 font-sf">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link to="/product-detail">
                  <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-spiritual-600 font-sf mb-6">
            Masih bingung pilih paket yang tepat? Konsultasi gratis dengan tim ahli kami
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-spiritual-600 text-spiritual-600 hover:bg-spiritual-600 hover:text-white font-sf font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
