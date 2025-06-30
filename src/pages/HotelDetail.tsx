import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, Star, Wifi, Car, Coffee, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Asterisk } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, isPast } from "date-fns";
import { cn } from "@/lib/utils";
import StickyHeader from "@/components/StickyHeader";

const HotelDetail = () => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [roomQuantity, setRoomQuantity] = useState(1);

  const hotelData = [
    {
      id: 1,
      name: "Makkah Clock Royal Tower",
      rating: 5,
      distance: "50m dari Masjidil Haram",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop",
      rooms: [
        {
          type: "Standard Twin",
          price: 2100000,
          maxGuests: 2,
          availableRooms: 8,
          totalRooms: 20,
          amenities: ["AC", "TV", "Minibar", "Room Service"]
        },
        {
          type: "Deluxe Double",
          price: 2800000,
          maxGuests: 3,
          availableRooms: 3,
          totalRooms: 15,
          amenities: ["AC", "TV", "Minibar", "Room Service", "Balcony"]
        }
      ],
      amenities: ["Free WiFi", "Restaurant", "Valet Parking", "24h Room Service"],
      hasPromo: true,
      promoText: "Early Bird 20%"
    },
    {
      id: 2,
      name: "Swissotel Makkah",
      rating: 5,
      distance: "200m dari Masjidil Haram",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop",
      rooms: [
        {
          type: "Classic Room",
          price: 1800000,
          maxGuests: 2,
          availableRooms: 15,
          totalRooms: 25,
          amenities: ["AC", "TV", "Minibar"]
        },
        {
          type: "Executive Suite",
          price: 3200000,
          maxGuests: 4,
          availableRooms: 0,
          totalRooms: 10,
          amenities: ["AC", "TV", "Minibar", "Separate Living Area", "Butler Service"]
        }
      ],
      amenities: ["Free WiFi", "Spa", "Fitness Center", "Multiple Restaurants"],
      hasPromo: false,
      promoText: ""
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const isDateDisabled = (date: Date) => {
    return isPast(date) && !isToday(date);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-spiritual-50/30">
      <StickyHeader />
      
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-sf font-bold text-lg">
            🏨 Promo Hotel Spesial! Hemat hingga 25% untuk pemesanan bulan ini! 
            <span className="ml-2 animate-pulse">🕌</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-sf font-bold text-spiritual-800 mb-4">
            Hotel Makkah
          </h1>
          <p className="text-lg text-spiritual-600 max-w-2xl mx-auto">
            Pilih hotel terbaik dekat Masjidil Haram untuk kenyamanan ibadah Anda
          </p>
        </div>

        {/* Modern Date Selection */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-spiritual-600/10 to-gold-500/10 rounded-3xl blur-3xl"></div>
          <Card className="relative bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-spiritual-600 via-gold-500 to-spiritual-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-spiritual-600 to-gold-500 rounded-2xl">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl font-sf font-bold bg-gradient-to-r from-spiritual-800 to-gold-600 bg-clip-text text-transparent">
                  Pilih Tanggal Menginap
                </CardTitle>
              </div>
              <p className="text-center text-spiritual-600 font-medium">
                Temukan hotel terbaik untuk perjalanan umroh Anda
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 flex-1">
                  <div className="space-y-3 flex-1">
                    <Label className="text-spiritual-700 font-sf font-semibold text-lg flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gold-500" />
                      <span>Check-in</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-14 justify-start text-left font-normal text-lg border-2 border-spiritual-200 focus:border-gold-400 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl",
                            !checkInDate && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-3 h-5 w-5 text-gold-500" />
                          {checkInDate ? format(checkInDate, "PPP") : "Pilih tanggal check-in"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          disabled={isDateDisabled}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-3 flex-1">
                    <Label className="text-spiritual-700 font-sf font-semibold text-lg flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gold-500" />
                      <span>Check-out</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-14 justify-start text-left font-normal text-lg border-2 border-spiritual-200 focus:border-gold-400 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl",
                            !checkOutDate && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-3 h-5 w-5 text-gold-500" />
                          {checkOutDate ? format(checkOutDate, "PPP") : "Pilih tanggal check-out"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          disabled={(date) => isDateDisabled(date) || (checkInDate && date <= checkInDate)}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-spiritual-700 font-sf font-semibold text-lg flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gold-500" />
                    <span>Jumlah Kamar</span>
                  </Label>
                  <div className="flex items-center space-x-4 bg-white rounded-2xl border-2 border-spiritual-200 px-6 py-4 shadow-lg">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full w-10 h-10 border-2 border-gold-400 text-gold-600 hover:bg-gold-50"
                      onClick={() => setRoomQuantity(Math.max(1, roomQuantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center text-xl font-bold text-spiritual-800">{roomQuantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full w-10 h-10 border-2 border-gold-400 text-gold-600 hover:bg-gold-50"
                      onClick={() => setRoomQuantity(roomQuantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hotel Options */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sf font-bold text-spiritual-800">Pilihan Hotel</h2>
            {checkInDate && checkOutDate && (
              <Badge className="bg-spiritual-100 text-spiritual-700 px-4 py-2 text-sm font-semibold">
                {hotelData.length} hotel tersedia
              </Badge>
            )}
          </div>
          
          {!checkInDate || !checkOutDate ? (
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="flex items-center justify-center py-16">
                <div className="text-center text-spiritual-600">
                  <Calendar className="w-16 h-16 mx-auto mb-6 opacity-50" />
                  <h3 className="text-xl font-sf font-semibold mb-2">Pilih Tanggal Menginap</h3>
                  <p>Silakan pilih tanggal check-in dan check-out untuk melihat hotel yang tersedia</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            hotelData.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border border-spiritual-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Hotel Image */}
                    <div className="lg:w-1/3">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    
                    {/* Hotel Info */}
                    <div className="lg:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-2xl font-sf font-bold">{hotel.name}</h3>
                            {hotel.hasPromo && (
                              <Badge className="bg-red-500 text-white">
                                {hotel.promoText}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex">
                              {[...Array(hotel.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                              ))}
                            </div>
                            <span className="text-sm text-spiritual-600">{hotel.rating} Stars</span>
                          </div>
                          <div className="flex items-center space-x-1 text-spiritual-600">
                            <MapPin className="w-4 h-4" />
                            <span>{hotel.distance}</span>
                          </div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Fasilitas:</p>
                        <div className="flex flex-wrap gap-2">
                          {hotel.amenities.map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Room Types */}
                      <div className="space-y-3">
                        <p className="font-medium">Tipe Kamar:</p>
                        {hotel.rooms.map((room, index) => (
                          <div key={index} className="border rounded-lg p-4 bg-spiritual-50/50">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                              <div className="flex-1">
                                <h4 className="font-medium text-lg">{room.type}</h4>
                                <p className="text-sm text-spiritual-600 mb-2">
                                  Maksimal {room.maxGuests} tamu per kamar
                                </p>
                                <div className="flex flex-wrap gap-1 mb-2">
                                  {room.amenities.map((amenity, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {amenity}
                                    </Badge>
                                  ))}
                                </div>
                                <p className="text-sm text-spiritual-600">
                                  {room.availableRooms} kamar tersisa dari {room.totalRooms}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-sf font-bold text-spiritual-800 mb-2">
                                  {formatPrice(room.price)}
                                </p>
                                <p className="text-sm text-spiritual-600 mb-4">per malam</p>
                                <Button
                                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900"
                                  disabled={room.availableRooms === 0 || room.availableRooms < roomQuantity}
                                >
                                  {room.availableRooms === 0 ? "Sold Out" : 
                                   room.availableRooms < roomQuantity ? "Kamar Tidak Cukup" :
                                   "Pilih Kamar"}
                                </Button>
                                {room.availableRooms < 5 && room.availableRooms > 0 && (
                                  <p className="text-red-500 text-xs mt-2">Hanya {room.availableRooms} kamar tersisa!</p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
