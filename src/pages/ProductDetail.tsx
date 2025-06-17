
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import RegistrationDialog from "@/components/RegistrationDialog";

const ProductDetail = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

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
              <img 
                src="/lovable-uploads/0447b7fb-94d7-470d-84ff-72fa7f50a25f.png" 
                alt="Bersafar" 
                className="h-8 w-auto"
              />
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
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=800&fit=crop&crop=center"
                alt="Umroh Mandiri Bersafar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-146644292997${i}-97f336a657be?w=200&h=200&fit=crop&crop=center`}
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

            {/* Price */}
            <div className="bg-gradient-to-r from-gold-50 to-spiritual-50 rounded-2xl p-6 border border-gold-200">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-3xl font-sf font-bold text-spiritual-800">Mulai Rp 18,000,000</span>
                <span className="text-lg text-spiritual-500 line-through">Rp 26,000,000</span>
              </div>
              <p className="text-spiritual-600 font-sf">Hemat hingga Rp 8 juta dibanding travel agent</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-sf font-bold text-spiritual-800">Yang Anda Dapatkan:</h3>
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
                onClick={() => setDialogOpen(true)}
              >
                Daftar Sekarang - Gratis!
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-spiritual-600 text-spiritual-600 hover:bg-spiritual-600 hover:text-white font-sf font-semibold py-4 px-8 rounded-full transition-all duration-300"
              >
                Konsultasi WhatsApp
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
