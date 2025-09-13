import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Calendar, Star, Users, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LayananBersafar = () => {
  const temanSafarPackages = [
    {
      id: 1,
      title: "Turkey Autumn",
      location: "Istanbul & Cappadocia",
      duration: "8 Hari 7 Malam",
      price: "Rp 18.500.000",
      image: "/lovable-uploads/c763f5f3-1693-45ce-8d6c-1d107368526d.png",
      participants: 12,
      maxParticipants: 15,
      departureDate: "15 Nov 2024",
      daysLeft: 28,
      joinedUsers: [
        { name: "Ahmad", avatar: "https://i.pravatar.cc/40?img=1" },
        { name: "Siti", avatar: "https://i.pravatar.cc/40?img=2" },
        { name: "Budi", avatar: "https://i.pravatar.cc/40?img=3" },
        { name: "Rina", avatar: "https://i.pravatar.cc/40?img=4" }
      ],
      highlights: ["Balloon ride", "Blue Mosque", "Bosphorus cruise"]
    },
    {
      id: 2,
      title: "Japan Sakura",
      location: "Tokyo & Kyoto",
      duration: "7 Hari 6 Malam", 
      price: "Rp 25.000.000",
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      participants: 15,
      maxParticipants: 20,
      departureDate: "25 Mar 2024",
      daysLeft: 45,
      joinedUsers: [
        { name: "Yuki", avatar: "https://i.pravatar.cc/40?img=5" },
        { name: "Maria", avatar: "https://i.pravatar.cc/40?img=6" },
        { name: "Hasan", avatar: "https://i.pravatar.cc/40?img=7" }
      ],
      highlights: ["Cherry blossoms", "Mount Fuji", "Traditional temples"]
    },
    {
      id: 3,
      title: "Morocco Adventure",
      location: "Marrakech & Casablanca",
      duration: "9 Hari 8 Malam",
      price: "Rp 22.000.000", 
      image: "/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png",
      participants: 10,
      maxParticipants: 12,
      departureDate: "8 Dec 2024",
      daysLeft: 12,
      joinedUsers: [
        { name: "Omar", avatar: "https://i.pravatar.cc/40?img=8" },
        { name: "Laila", avatar: "https://i.pravatar.cc/40?img=9" }
      ],
      highlights: ["Sahara desert", "Atlas mountains", "Medina tours"]
    },
    {
      id: 4,
      title: "Egypt Heritage",
      location: "Cairo & Luxor",
      duration: "6 Hari 5 Malam",
      price: "Rp 20.500.000",
      image: "/lovable-uploads/5c10e529-f63f-4a40-91fd-f6569ec1bee1.png", 
      participants: 12,
      maxParticipants: 16,
      departureDate: "20 Jan 2024",
      daysLeft: 55,
      joinedUsers: [
        { name: "Cleopatra", avatar: "https://i.pravatar.cc/40?img=10" },
        { name: "Hassan", avatar: "https://i.pravatar.cc/40?img=11" },
        { name: "Nour", avatar: "https://i.pravatar.cc/40?img=12" }
      ],
      highlights: ["Pyramids", "Nile cruise", "Valley of Kings"]
    },
    {
      id: 5,
      title: "Dubai Luxury",
      location: "Dubai & Abu Dhabi", 
      duration: "5 Hari 4 Malam",
      price: "Rp 15.000.000",
      image: "/assets/teman-safar-illustration.jpg",
      participants: 8,
      maxParticipants: 10,
      departureDate: "5 Feb 2024",
      daysLeft: 35,
      joinedUsers: [
        { name: "Ahmed", avatar: "https://i.pravatar.cc/40?img=13" },
        { name: "Fatima", avatar: "https://i.pravatar.cc/40?img=14" }
      ],
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
    <section className="py-16 bg-gradient-to-br from-white to-islamic-50">
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
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left side - Title */}
            <div className="col-span-12 lg:col-span-3">
              <h3 className="text-3xl md:text-4xl font-inter font-bold text-spiritual-800 mb-4">
                Teman Safar
              </h3>
              <p className="text-lg text-spiritual-600">
                Bergabunglah dengan jamaah lain dalam perjalanan berkesan ke destinasi halal pilihan
              </p>
            </div>

            {/* Right side - Carousel */}
            <div className="col-span-12 lg:col-span-9">
              <Carousel
                opts={{
                  align: "start",
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {temanSafarPackages.map((pkg) => (
                    <CarouselItem key={pkg.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border border-spiritual-100 hover:border-islamic-primary overflow-hidden h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                            {pkg.daysLeft} hari lagi
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="text-lg font-inter font-bold text-spiritual-800 mb-2">
                            {pkg.title}
                          </h4>
                          <div className="space-y-2 mb-4">
                            <p className="text-spiritual-600 flex items-center text-sm">
                              <MapPin className="w-4 h-4 mr-2" />
                              {pkg.location}
                            </p>
                            <p className="text-spiritual-600 flex items-center text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {pkg.departureDate}
                            </p>
                            <div className="flex items-center text-sm text-spiritual-600">
                              <Users className="w-4 h-4 mr-2" />
                              <span>{pkg.participants}/{pkg.maxParticipants} peserta</span>
                            </div>
                          </div>
                          
                          {/* Joined Users Avatars */}
                          <div className="flex items-center mb-4">
                            <div className="flex -space-x-2">
                              {pkg.joinedUsers.slice(0, 3).map((user, index) => (
                                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                                  <AvatarImage src={user.avatar} alt={user.name} />
                                  <AvatarFallback className="text-xs">{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              ))}
                              {pkg.joinedUsers.length > 3 && (
                                <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                                  <span className="text-xs text-gray-600">+{pkg.joinedUsers.length - 3}</span>
                                </div>
                              )}
                            </div>
                            <span className="ml-2 text-xs text-spiritual-600">bergabung</span>
                          </div>

                          <p className="text-xl font-bold text-islamic-primary mb-3">{pkg.price}</p>
                          <Button variant="bersafar" className="w-full text-sm py-2">
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
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="bersafar"
              onClick={() => window.location.href = '/teman-safar'}
            >
              Lihat Semua Teman Safar
            </Button>
          </div>
        </div>

        {/* Umroh Mandiri Section */}
        <div>
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left side - Title */}
            <div className="col-span-12 lg:col-span-3">
              <h3 className="text-3xl md:text-4xl font-inter font-bold text-spiritual-800 mb-4">
                Umroh Mandiri
              </h3>
              <p className="text-lg text-spiritual-600">
                Atur perjalanan umroh sesuai kebutuhan dan budget Anda dengan fleksibilitas penuh
              </p>
            </div>

            {/* Right side - Carousel */}
            <div className="col-span-12 lg:col-span-9">
              <Carousel
                opts={{
                  align: "start",
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {umrohPackages.map((pkg, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border border-spiritual-100 hover:border-islamic-primary overflow-hidden h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3 bg-bersafar-primary text-white px-2 py-1 rounded-lg text-xs font-bold">
                            {pkg.duration}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="text-lg font-inter font-bold text-spiritual-800 mb-2">
                            {pkg.title}
                          </h4>
                          <div className="space-y-2 mb-4">
                            <p className="text-spiritual-600 flex items-center text-sm">
                              <MapPin className="w-4 h-4 mr-2" />
                              {pkg.airline}
                            </p>
                            <p className="text-spiritual-600 flex items-center text-sm">
                              <Star className="w-4 h-4 mr-2" />
                              {pkg.hotel}
                            </p>
                          </div>
                          <p className="text-xl font-bold text-bersafar-primary mb-3">{pkg.price}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {pkg.features.slice(0, 3).map((feature, featureIndex) => (
                              <span key={featureIndex} className="bg-bersafar-primary/10 text-bersafar-primary px-2 py-1 rounded text-xs font-medium">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <Button variant="bersafar" className="w-full text-sm py-2">
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
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="bersafar"
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