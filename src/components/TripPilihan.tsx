
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Shield, Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TripPilihan = () => {
  const navigate = useNavigate();

  const trips = [
    {
      id: 1,
      title: "Turkey Low Season",
      subtitle: "Paket Hemat Istanbul & Cappadocia",
      price: 12000000,
      originalPrice: 15000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.9,
      duration: "8 Hari 7 Malam",
      groupSize: "15-20 Orang",
      highlights: ["Blue Mosque", "Cappadocia Sunrise", "Bosphorus Cruise"],
      category: "International"
    },
    {
      id: 2,
      title: "Umroh All Package",
      subtitle: "Paket Lengkap Makkah & Madinah",
      price: 18500000,
      originalPrice: 25000000,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      rating: 4.8,
      duration: "12 Hari 11 Malam",
      groupSize: "25-30 Orang",
      highlights: ["Hotel Bintang 5", "Mutawif Berpengalaman", "Ziarah Lengkap"],
      category: "Umroh",
      guarantee: "Hotel terjamin setelah pembayaran berhasil",
      urgent: true
    },
    {
      id: 3,
      title: "Hotel Umroh",
      subtitle: "Booking Hotel Terpisah",
      price: 8500000,
      originalPrice: 12000000,
      image: "/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png",
      rating: 4.7,
      duration: "Fleksibel",
      groupSize: "Individual",
      highlights: ["Dekat Haram", "Fasilitas Lengkap", "Sarapan Halal"],
      category: "Umroh",
      guarantee: "Ketersediaan hotel langsung terkonfirmasi",
      urgent: true,
      route: "/hotel-detail"
    },
    {
      id: 4,
      title: "Visa Umroh",
      subtitle: "Layanan Visa Cepat & Mudah",
      price: 1500000,
      originalPrice: 2000000,
      image: "/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png",
      rating: 4.9,
      duration: "3-7 Hari",
      groupSize: "Individual",
      highlights: ["Proses Cepat", "Bantuan Dokumen", "Garansi Approval"],
      category: "Visa",
      guarantee: "Langsung terhubung dengan provider resmi",
      route: "/visa-detail"
    }
  ];

  const handleCardClick = (trip: any) => {
    if (trip.route) {
      navigate(trip.route);
    } else if (trip.category === "Umroh") {
      navigate('/flight-detail');
    } else {
      // Handle other categories
      console.log(`Navigate to ${trip.title} detail`);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Trip Pilihan
          </h2>
          <p className="text-lg text-spiritual-600 max-w-2xl mx-auto">
            Pilihan terbaik untuk perjalanan halal Anda dengan harga terjangkau dan kualitas terjamin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <Card 
              key={trip.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={() => handleCardClick(trip)}
            >
              <div className="relative">
                <img 
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-spiritual-600 text-white">
                  {trip.category}
                </Badge>
                <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-sm flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  {trip.rating}
                </div>
                {trip.urgent && (
                  <Badge className="absolute bottom-3 left-3 bg-red-500 text-white animate-pulse">
                    Urgent!
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-sf font-bold text-spiritual-800 mb-1">
                  {trip.title}
                </h3>
                <p className="text-sm text-spiritual-600 mb-3">{trip.subtitle}</p>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center text-sm text-spiritual-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center text-sm text-spiritual-600">
                    <Users className="w-4 h-4 mr-2" />
                    {trip.groupSize}
                  </div>
                </div>

                {trip.guarantee && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-3">
                    <p className="text-green-700 text-xs flex items-center">
                      <Shield className="w-3 h-3 mr-1" />
                      {trip.guarantee}
                    </p>
                  </div>
                )}

                <div className="mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-spiritual-800">
                      Rp {trip.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-sm text-spiritual-500 line-through">
                      Rp {trip.originalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  {trip.highlights.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="flex items-center text-xs text-spiritual-600">
                      <div className="w-1 h-1 bg-gold-500 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white font-sf text-sm py-2 rounded-full group">
                  Lihat Detail
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripPilihan;
