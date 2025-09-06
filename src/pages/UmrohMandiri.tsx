import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Calendar, Users, Plane, Hotel, BookOpen, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UmrohMandiri = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "Paket Ekonomis",
      price: 18500000,
      duration: "9 Hari",
      rating: 4.6,
      reviews: 234,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      features: [
        "Hotel bintang 3 dekat Haram",
        "Pesawat Saudi Airlines",
        "Muthawif berpengalaman",
        "Ziarah lengkap",
        "Bimbingan manasik"
      ],
      hotels: {
        makkah: "Hotel Azka Al Safa (3★) - 200m dari Masjidil Haram",
        madinah: "Hotel Millennium Taiba (3★) - 300m dari Masjid Nabawi"
      },
      popular: false
    },
    {
      id: 2,
      name: "Paket Premium",
      price: 28500000,
      duration: "12 Hari",
      rating: 4.8,
      reviews: 189,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      features: [
        "Hotel bintang 5 view Haram",
        "Pesawat Saudi Airlines/Garuda",
        "Muthawif profesional",
        "Ziarah premium",
        "City tour Jeddah",
        "Oleh-oleh kurma premium"
      ],
      hotels: {
        makkah: "Pullman Zamzam Makkah (5★) - View langsung Ka'bah",
        madinah: "Anwar Al Madinah Movenpick (5★) - Premium location"
      },
      popular: true
    },
    {
      id: 3,
      name: "Paket VIP",
      price: 45000000,
      duration: "14 Hari",
      rating: 4.9,
      reviews: 98,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      features: [
        "Hotel bintang 5 suite room",
        "Business class flight",
        "Private muthawif",
        "Ziarah eksklusif",
        "City tour premium",
        "Shopping guide Jeddah",
        "24/7 personal assistance"
      ],
      hotels: {
        makkah: "Raffles Makkah Palace (5★) - Royal Suite dengan view Ka'bah",
        madinah: "The Oberoi Madinah (5★) - Luxury suite premium"
      },
      popular: false
    }
  ];

  const handleBookPackage = (packageId: number) => {
    alert(`Booking paket ${packageId}. Fitur ini akan segera hadir!`);
  };

  const handleCustomPackage = () => {
    alert("Fitur custom paket akan segera hadir!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-50 to-gold-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate("/")}
            className="mb-4 text-green-200 hover:text-white transition-colors"
          >
            ← Kembali ke Beranda
          </button>
          <h1 className="text-4xl font-sf font-bold mb-4">Umroh Mandiri</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Pilih paket umroh yang sesuai dengan kebutuhan dan budget Anda. 
            Semua paket sudah termasuk visa, tiket pesawat, hotel, dan bimbingan manasik.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Custom Package CTA */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-gold-500 to-gold-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-sf font-bold mb-2">Ingin Paket Sesuai Keinginan?</h3>
                  <p className="text-gold-100">Buat paket umroh custom dengan pilihan hotel, airline, dan jadwal sesuai preferensi Anda!</p>
                </div>
                <Button 
                  onClick={handleCustomPackage}
                  className="bg-white text-gold-600 hover:bg-gold-50 font-sf font-bold"
                >
                  Custom Paket
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 ${pkg.popular ? 'ring-2 ring-gold-400 shadow-xl' : ''}`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                  TERPOPULER
                </div>
              )}
              
              <div className="relative">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/90 text-spiritual-800 font-bold">
                    {pkg.duration}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{pkg.rating}</span>
                      </div>
                      <span className="text-sm text-spiritual-500">({pkg.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-spiritual-800">
                    Rp {(pkg.price / 1000000).toFixed(1)}jt
                  </div>
                  <div className="text-sm text-spiritual-500">per jamaah</div>
                </div>

                <Tabs defaultValue="features" className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features">Fasilitas</TabsTrigger>
                    <TabsTrigger value="hotels">Hotel</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="features" className="mt-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-spiritual-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="hotels" className="mt-4">
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium text-spiritual-700 text-sm mb-1">Makkah:</div>
                        <div className="text-xs text-spiritual-600">{pkg.hotels.makkah}</div>
                      </div>
                      <div>
                        <div className="font-medium text-spiritual-700 text-sm mb-1">Madinah:</div>
                        <div className="text-xs text-spiritual-600">{pkg.hotels.madinah}</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex space-x-3">
                  <Button 
                    onClick={() => handleBookPackage(pkg.id)}
                    className={`flex-1 font-sf font-bold ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                    } text-white`}
                  >
                    Book Sekarang
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-spiritual-300 text-spiritual-700 hover:bg-spiritual-100"
                  >
                    Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-sf font-bold text-spiritual-800 text-center mb-8">
            Layanan Tambahan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Plane,
                title: "Upgrade Flight",
                description: "Upgrade ke business class untuk kenyamanan maksimal"
              },
              {
                icon: Hotel,
                title: "Extend Stay",
                description: "Perpanjang masa tinggal untuk ibadah lebih khusyuk"
              },
              {
                icon: BookOpen,
                title: "Private Guide",
                description: "Muthawif pribadi untuk bimbingan intensif"
              },
              {
                icon: MapPin,
                title: "Extra Ziarah",
                description: "Kunjungi tempat-tempat bersejarah tambahan"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-spiritual-600 mx-auto mb-4" />
                  <h3 className="font-sf font-bold text-spiritual-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-spiritual-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <Card className="bg-spiritual-100 border-spiritual-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-spiritual-800 mb-2">10,000+</div>
                  <div className="text-spiritual-600">Jamaah Terlayani</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-spiritual-800 mb-2">15 Tahun</div>
                  <div className="text-spiritual-600">Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-spiritual-800 mb-2">4.8/5</div>
                  <div className="text-spiritual-600">Rating Kepuasan</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UmrohMandiri;