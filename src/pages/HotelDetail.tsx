
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, Star, Wifi, Car, Coffee, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Asterisk } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, isPast } from "date-fns";
import { cn } from "@/lib/utils";

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
      {/* Header */}
      <header className="bg-spiritual-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-4">
            <Link to="/product-detail" className="p-2 hover:bg-spiritual-700 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center space-x-3">
              <Asterisk className="h-8 w-8 text-gold-400" />
              <span className="text-xl font-sf font-bold">Bersafar</span>
            </div>
            <div className="ml-auto">
              <h1 className="text-lg font-sf font-semibold">Hotel Makkah</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Date Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Pilih Tanggal Menginap</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !checkInDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {checkInDate ? format(checkInDate, "PPP") : "Check-in"}
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

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !checkOutDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {checkOutDate ? format(checkOutDate, "PPP") : "Check-out"}
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
              
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Jumlah Kamar:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setRoomQuantity(Math.max(1, roomQuantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{roomQuantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setRoomQuantity(roomQuantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hotel Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-sf font-bold text-spiritual-800">Pilihan Hotel</h2>
          
          {!checkInDate || !checkOutDate ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center text-spiritual-600">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Silakan pilih tanggal check-in dan check-out untuk melihat hotel yang tersedia</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            hotelData.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden">
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
