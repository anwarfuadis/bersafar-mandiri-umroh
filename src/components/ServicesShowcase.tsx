
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    id: 1,
    title: "Tiket Pesawat",
    description: "Bantuan booking tiket pesawat dengan harga terbaik",
    price: "Mulai Rp 8,500,000",
    originalPrice: "Rp 12,000,000",
    rating: 4.9,
    reviews: 127,
    badge: "Paling Populer",
    route: "/flight-detail",
    features: [
      "Booking tiket PP Jakarta-Jeddah",
      "Pilihan maskapai terpercaya",
      "Fleksibel tanggal keberangkatan",
      "Support 24/7"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Hotel",
    description: "Rekomendasi hotel terbaik di Makkah & Madinah",
    price: "Mulai Rp 3,500,000",
    originalPrice: "Rp 5,000,000",
    rating: 4.8,
    reviews: 89,
    badge: "Hemat 30%",
    route: "/hotel-detail",
    features: [
      "Hotel dekat Masjidil Haram",
      "Hotel dekat Masjid Nabawi",
      "Kamar bersih dan nyaman",
      "Sarapan included"
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Visa",
    description: "Pengurusan visa umroh cepat dan terpercaya",
    price: "Rp 2,500,000",
    originalPrice: "Rp 3,500,000",
    rating: 5.0,
    reviews: 156,
    badge: "Tercepat",
    route: "/visa-detail",
    features: [
      "Proses visa 7-14 hari",
      "Dokumen lengkap dibantu",
      "Garansi visa approved",
      "Konsultasi gratis"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Mutawif",
    description: "Guide berpengalaman untuk ibadah umroh Anda",
    price: "Rp 1,500,000",
    originalPrice: "Rp 2,000,000",
    rating: 4.9,
    reviews: 203,
    badge: "Berpengalaman",
    route: "/mutawif-detail",
    features: [
      "Guide berbahasa Indonesia",
      "Berpengalaman 10+ tahun",
      "Menguasai doa-doa umroh",
      "Siap 24 jam"
    ],
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Transportasi Lokal",
    description: "Transportasi nyaman selama di Arab Saudi",
    price: "Rp 800,000",
    originalPrice: "Rp 1,200,000",
    rating: 4.7,
    reviews: 145,
    badge: "Nyaman",
    route: "/transport-detail",
    features: [
      "Bus AC untuk grup",
      "Taxi untuk kebutuhan pribadi",
      "Driver berpengalaman",
      "Route optimized"
    ],
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Handling Bandara",
    description: "Bantuan handling di bandara keberangkatan & kedatangan",
    price: "Rp 500,000",
    originalPrice: "Rp 750,000",
    rating: 4.8,
    reviews: 98,
    badge: "Praktis",
    route: "/airport-handling-detail",
    features: [
      "Bantuan check-in",
      "Porter service",
      "Fast track immigration",
      "Meet & greet service"
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
  }
];

const ServicesShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-sand-50/30 to-spiritual-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sf font-bold text-spiritual-800 mb-6">
            Layanan Bersafar
          </h2>
          <p className="text-lg md:text-xl text-spiritual-600 max-w-3xl mx-auto leading-relaxed">
            Pilih layanan umroh mandiri yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-spiritual-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
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

                    <CardContent className="pt-0 flex-1 flex flex-col">
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
                      <div className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-spiritual-700 font-sf">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link to={service.route}>
                        <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced carousel controls with mobile visibility */}
            <CarouselPrevious className="hidden sm:flex -left-4 bg-white/90 hover:bg-white border-2 border-spiritual-200 text-spiritual-700 hover:text-spiritual-900 shadow-lg" />
            <CarouselNext className="hidden sm:flex -right-4 bg-white/90 hover:bg-white border-2 border-spiritual-200 text-spiritual-700 hover:text-spiritual-900 shadow-lg" />
            
            {/* Mobile swipe indicators */}
            <div className="flex sm:hidden justify-center mt-6 space-x-4">
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <ChevronLeft className="w-4 h-4 text-spiritual-600" />
                <span className="text-sm font-sf text-spiritual-600">Geser untuk melihat lebih banyak</span>
                <ChevronRight className="w-4 h-4 text-spiritual-600" />
              </div>
            </div>
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
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
