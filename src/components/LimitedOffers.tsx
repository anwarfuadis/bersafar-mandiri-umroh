
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Star } from "lucide-react";

const LimitedOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      title: "Umroh Murah Promo Ramadan",
      destination: "Makkah & Madinah",
      originalPrice: 25000000,
      promoPrice: 18500000,
      image: "/lovable-uploads/f2a9a231-b30a-47e0-9730-5d5276a8aa0d.png",
      rating: 4.8,
      reviews: 156,
      discount: 26,
      urgent: "Tersisa 3 seat terakhir!"
    },
    {
      id: 2,
      title: "Turkey Romance Package",
      destination: "Istanbul & Cappadocia",
      originalPrice: 15000000,
      promoPrice: 12000000,
      image: "/lovable-uploads/61639d0c-b419-40b0-b566-dec27b88f75e.png",
      rating: 4.9,
      reviews: 203,
      discount: 20,
      urgent: "Hotel hampir penuh!"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-spiritual-50 to-gold-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Countdown */}
        <div className="text-center mb-12">
          <Badge className="bg-red-500 text-white mb-4 px-4 py-2 text-sm font-bold animate-pulse">
            ⚡ LIMITED TIME OFFER
          </Badge>
          <h2 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Penawaran Terbatas
          </h2>
          <p className="text-lg text-spiritual-600 mb-8">
            Jangan sampai terlewat! Promo berakhir dalam:
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { label: "Hari", value: timeLeft.days },
              { label: "Jam", value: timeLeft.hours },
              { label: "Menit", value: timeLeft.minutes },
              { label: "Detik", value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-spiritual-800">{item.value}</div>
                <div className="text-sm text-spiritual-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gold-200">
              <div className="relative">
                <img 
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500 text-white font-bold">
                  -{offer.discount}%
                </Badge>
                <Badge className="absolute top-4 right-4 bg-gold-500 text-spiritual-900 font-bold">
                  <Star className="w-4 h-4 mr-1" />
                  {offer.rating}
                </Badge>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  {offer.destination}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-sf font-bold text-spiritual-800 mb-2">
                  {offer.title}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center text-gold-500 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-spiritual-600">({offer.reviews} ulasan)</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-spiritual-800">
                      Rp {offer.promoPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="text-lg text-spiritual-500 line-through">
                      Rp {offer.originalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <p className="text-sm text-spiritual-600">per orang</p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-600 font-semibold text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {offer.urgent}
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-spiritual-600 to-gold-500 hover:from-spiritual-700 hover:to-gold-600 text-white font-sf font-bold py-3 rounded-full">
                  Pesan Sekarang, Traveling Nanti
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;
