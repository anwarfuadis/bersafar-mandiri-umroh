import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Calendar, Star } from "lucide-react";

const LayananBersafar = () => {
  const temanSafarPackages = [
    {
      id: 1,
      title: "Turkey Autumn",
      location: "Istanbul & Cappadocia",
      duration: "8 Hari 7 Malam",
      price: "Rp 18.500.000",
      image: "/lovable-uploads/c763f5f3-1693-45ce-8d6c-1d107368526d.png",
      participants: "12 orang",
      highlights: ["Balloon ride", "Blue Mosque", "Bosphorus cruise"]
    },
    {
      id: 2,
      title: "Japan Sakura",
      location: "Tokyo & Kyoto",
      duration: "7 Hari 6 Malam", 
      price: "Rp 25.000.000",
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      participants: "15 orang",
      highlights: ["Cherry blossoms", "Mount Fuji", "Traditional temples"]
    },
    {
      id: 3,
      title: "Morocco Adventure",
      location: "Marrakech & Casablanca",
      duration: "9 Hari 8 Malam",
      price: "Rp 22.000.000", 
      image: "/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png",
      participants: "10 orang",
      highlights: ["Sahara desert", "Atlas mountains", "Medina tours"]
    },
    {
      id: 4,
      title: "Egypt Heritage",
      location: "Cairo & Luxor",
      duration: "6 Hari 5 Malam",
      price: "Rp 20.500.000",
      image: "/lovable-uploads/5c10e529-f63f-4a40-91fd-f6569ec1bee1.png", 
      participants: "12 orang",
      highlights: ["Pyramids", "Nile cruise", "Valley of Kings"]
    },
    {
      id: 5,
      title: "Dubai Luxury",
      location: "Dubai & Abu Dhabi", 
      duration: "5 Hari 4 Malam",
      price: "Rp 15.000.000",
      image: "/assets/teman-safar-illustration.jpg",
      participants: "8 orang",
      highlights: ["Burj Khalifa", "Desert safari", "Gold souk"]
    }
  ];

  const umrohPackages = [
    {
      title: "Umroh Ekonomi",
      price: "Rp 18.500.000",
      duration: "9 Hari",
      airline: "Garuda Indonesia",
      hotel: "Hotel Bintang 3",
      image: "/assets/umroh-illustration.jpg",
      features: ["Visa", "Tiket", "Hotel", "Muthawif"]
    },
    {
      title: "Umroh Plus",
      price: "Rp 25.900.000", 
      duration: "12 Hari",
      airline: "Saudi Airlines",
      hotel: "Hotel Bintang 4",
      image: "/assets/umroh-illustration.jpg",
      features: ["Visa", "Tiket", "Hotel", "Muthawif", "City Tour"]
    },
    {
      title: "Umroh VIP",
      price: "Rp 35.000.000",
      duration: "14 Hari", 
      airline: "Emirates",
      hotel: "Hotel Bintang 5",
      image: "/assets/umroh-illustration.jpg",
      features: ["Visa", "Tiket", "Hotel", "Muthawif", "City Tour", "Ziarah"]
    },
    {
      title: "Umroh Keluarga",
      price: "Rp 28.900.000",
      duration: "10 Hari",
      airline: "Qatar Airways", 
      hotel: "Hotel Bintang 4",
      image: "/assets/umroh-illustration.jpg",
      features: ["Visa", "Tiket", "Hotel", "Muthawif", "Family Room"]
    },
    {
      title: "Umroh Ramadan",
      price: "Rp 42.000.000",
      duration: "15 Hari",
      airline: "Turkish Airlines",
      hotel: "Hotel Bintang 5", 
      image: "/assets/umroh-illustration.jpg",
      features: ["Visa", "Tiket", "Hotel", "Muthawif", "Special Iftar"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-islamic-50 islamic-pattern-overlay">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-spiritual-800 mb-6">
            Layanan Bersafar
          </h2>
          <p className="text-xl text-spiritual-600 max-w-3xl mx-auto">
            Temukan pengalaman perjalanan spiritual yang tak terlupakan dengan layanan terpercaya kami
          </p>
        </div>

        {/* Teman Safar Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-inter font-bold text-spiritual-800 mb-4">
              Teman Safar
            </h3>
            <p className="text-lg text-spiritual-600 max-w-2xl mx-auto">
              Bergabunglah dengan jamaah lain dalam perjalanan berkesan ke destinasi halal pilihan
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {temanSafarPackages.map((pkg) => (
                  <CarouselItem key={pkg.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-[28.5%]">
                    <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-spiritual-100 hover:border-islamic-primary overflow-hidden h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-islamic-primary text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {pkg.participants}
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <h4 className="text-2xl font-inter font-bold text-spiritual-800 mb-3">
                          {pkg.title}
                        </h4>
                        <p className="text-spiritual-600 mb-3 flex items-center text-base">
                          <MapPin className="w-5 h-5 mr-2" />
                          {pkg.location}
                        </p>
                        <p className="text-spiritual-600 mb-4 flex items-center text-base">
                          <Calendar className="w-5 h-5 mr-2" />
                          {pkg.duration}
                        </p>
                        <div className="mb-6">
                          <p className="text-3xl font-bold text-islamic-primary mb-3">{pkg.price}</p>
                          <div className="flex flex-wrap gap-2">
                            {pkg.highlights.map((highlight, index) => (
                              <span key={index} className="bg-islamic-100 text-islamic-dark px-3 py-2 rounded-full text-sm font-medium">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-islamic-primary to-islamic-secondary hover:from-islamic-secondary hover:to-islamic-dark text-white font-semibold rounded-full py-3 text-base">
                          Bergabung Sekarang
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="bg-gradient-to-r from-islamic-primary to-islamic-secondary hover:from-islamic-secondary hover:to-islamic-dark text-white font-semibold rounded-full px-8 py-3 text-base"
              onClick={() => window.location.href = '/teman-safar'}
            >
              Lihat Semua Teman Safar
            </Button>
          </div>
        </div>

        {/* Umroh Mandiri Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-inter font-bold text-spiritual-800 mb-4">
              Umroh Mandiri
            </h3>
            <p className="text-lg text-spiritual-600 max-w-2xl mx-auto">
              Atur perjalanan umroh sesuai kebutuhan dan budget Anda dengan fleksibilitas penuh
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {umrohPackages.map((pkg, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-[28.5%]">
                    <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-spiritual-100 hover:border-islamic-primary overflow-hidden h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {pkg.duration}
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <h4 className="text-2xl font-inter font-bold text-spiritual-800 mb-3">
                          {pkg.title}
                        </h4>
                        <p className="text-spiritual-600 mb-3 flex items-center text-base">
                          <MapPin className="w-5 h-5 mr-2" />
                          {pkg.airline}
                        </p>
                        <p className="text-spiritual-600 mb-4 flex items-center text-base">
                          <Star className="w-5 h-5 mr-2" />
                          {pkg.hotel}
                        </p>
                        <div className="mb-6">
                          <p className="text-3xl font-bold text-green-600 mb-3">{pkg.price}</p>
                          <div className="flex flex-wrap gap-2">
                            {pkg.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-medium">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full py-3 text-base">
                          Pilih Paket
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full px-8 py-3 text-base"
              onClick={() => window.location.href = '/umroh-mandiri'}
            >
              Lihat Semua Umroh Mandiri
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananBersafar;