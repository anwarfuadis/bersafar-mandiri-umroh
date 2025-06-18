
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Star, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Asterisk } from "lucide-react";
import RegistrationDialog from "@/components/RegistrationDialog";

const ProductDetail = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{[key: string]: number}>({});

  const subItems = [
    { 
      id: 'tiket-pesawat', 
      name: 'Tiket Pesawat', 
      price: 8500000, 
      description: 'Tiket pulang-pergi ke Jeddah',
      detailLink: '/flight-detail'
    },
    { 
      id: 'hotel-mekkah', 
      name: 'Hotel Mekkah', 
      price: 4200000, 
      description: 'Hotel bintang 4 dekat Masjidil Haram',
      detailLink: '/hotel-detail'
    },
    { 
      id: 'hotel-madinah', 
      name: 'Hotel Madinah', 
      price: 3800000, 
      description: 'Hotel bintang 4 dekat Masjid Nabawi',
      detailLink: '/hotel-detail'
    },
    { 
      id: 'visa-umroh', 
      name: 'Visa Umroh', 
      price: 1200000, 
      description: 'Pengurusan visa umroh lengkap',
      detailLink: '/visa-detail'
    },
    { 
      id: 'mutawif', 
      name: 'Mutawif', 
      price: 2500000, 
      description: 'Pemandu umroh berpengalaman',
      detailLink: '/mutawif-detail'
    },
    { 
      id: 'transportasi', 
      name: 'Transportasi Lokal', 
      price: 1800000, 
      description: 'Bus AC untuk transportasi lokal',
      detailLink: '/product-detail'
    },
  ];

  const updateItemQuantity = (itemId: string, change: number) => {
    setSelectedItems(prev => {
      const newQuantity = (prev[itemId] || 0) + change;
      if (newQuantity <= 0) {
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const getTotalPrice = () => {
    return Object.entries(selectedItems).reduce((total, [itemId, quantity]) => {
      const item = subItems.find(item => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-spiritual-50/30">
      {/* Header */}
      <header className="bg-spiritual-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 hover:bg-spiritual-700 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center space-x-3">
              <Asterisk className="h-8 w-8 text-gold-400" />
              <span className="text-xl font-sf font-bold">Bersafar</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=800&fit=crop&crop=center"
                alt="Umroh Mandiri Bersafar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=200&h=200&fit=crop&crop=center&q=80&auto=format&cs=tinysrgb&${i}`}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-sf font-bold text-spiritual-800 mb-4">
                Paket Umroh Mandiri Bersafar
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="text-spiritual-600 font-sf">(4.9 dari 127 ulasan)</span>
              </div>
              <p className="text-spiritual-600 font-sf leading-relaxed text-lg">
                Platform umroh mandiri pertama di Indonesia yang memungkinkan Anda merencanakan dan melaksanakan ibadah umroh sesuai kebutuhan dan budget Anda.
              </p>
            </div>

            {/* Sub Items Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-sf font-bold text-spiritual-800">Pilih Layanan Sesuai Kebutuhan:</h3>
              <div className="space-y-3">
                {subItems.map((item) => (
                  <div key={item.id} className="border border-spiritual-200 rounded-xl p-4 bg-white/80 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-sf font-semibold text-spiritual-800">{item.name}</h4>
                          <Link 
                            to={item.detailLink}
                            className="text-xs text-gold-600 hover:text-gold-700 underline"
                          >
                            Lihat Detail
                          </Link>
                        </div>
                        <p className="text-sm text-spiritual-600">{item.description}</p>
                        <p className="text-gold-600 font-sf font-bold">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-8 h-8 p-0 rounded-full"
                          onClick={() => updateItemQuantity(item.id, -1)}
                          disabled={!selectedItems[item.id]}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-sf font-medium">
                          {selectedItems[item.id] || 0}
                        </span>
                        <Button
                          size="sm"
                          className="w-8 h-8 p-0 rounded-full bg-gold-500 hover:bg-gold-600"
                          onClick={() => updateItemQuantity(item.id, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-gold-50 to-spiritual-50 rounded-2xl p-6 border border-gold-200">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-lg font-sf font-semibold text-spiritual-800">Total Harga:</span>
                <span className="text-3xl font-sf font-bold text-spiritual-800">
                  {getTotalPrice() > 0 ? formatPrice(getTotalPrice()) : "Pilih layanan"}
                </span>
              </div>
              <p className="text-spiritual-600 font-sf">Hemat hingga 30% dibanding travel agent tradisional</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-sf font-bold text-spiritual-800">Keunggulan Bersafar:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Bantuan pengurusan visa",
                  "Konsultasi gratis 24/7",
                  "Fleksibilitas pemilihan hotel",
                  "Kebebasan memilih jadwal",
                  "Hemat biaya hingga 30%",
                  "Panduan lengkap umroh",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-spiritual-700 font-sf">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                disabled={getTotalPrice() === 0}
                onClick={() => setDialogOpen(true)}
              >
                Tambah ke Keranjang - Wujudkan Impian Umroh! 🛒
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-spiritual-600 text-spiritual-600 hover:bg-spiritual-600 hover:text-white font-sf font-semibold py-4 px-8 rounded-full transition-all duration-300"
              >
                Konsultasi WhatsApp Gratis 💬
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-spiritual-200 pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-sf font-bold text-spiritual-800">500+</div>
                  <div className="text-sm text-spiritual-600">Jamaah Puas</div>
                </div>
                <div>
                  <div className="text-2xl font-sf font-bold text-spiritual-800">4.9</div>
                  <div className="text-sm text-spiritual-600">Rating Rata-rata</div>
                </div>
                <div>
                  <div className="text-2xl font-sf font-bold text-spiritual-800">24/7</div>
                  <div className="text-sm text-spiritual-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default ProductDetail;
