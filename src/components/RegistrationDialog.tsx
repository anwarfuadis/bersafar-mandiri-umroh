
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, User, MapPin } from "lucide-react";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationDialog = ({ open, onOpenChange }: RegistrationDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    // Handle form submission here
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-auto bg-gradient-to-br from-white via-sand-50 to-spiritual-50 border-2 border-gold-200/50 shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto mb-4">
            <img 
              src="/lovable-uploads/63832728-ca03-48f5-b3da-6f48771475d8.png" 
              alt="Bersafar" 
              className="h-12 w-auto mx-auto"
            />
          </div>
          <DialogTitle className="text-2xl font-sf font-bold text-spiritual-800 mb-2">
            Mulai Perjalanan Umrohmu
          </DialogTitle>
          <p className="text-spiritual-600 font-sf">
            Daftar sekarang dan dapatkan konsultasi gratis untuk persiapan umroh mandiri
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="name" className="text-spiritual-700 font-sf font-medium">
                Nama Lengkap
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/80 backdrop-blur"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="email" className="text-spiritual-700 font-sf font-medium">
                Email
              </Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/80 backdrop-blur"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="phone" className="text-spiritual-700 font-sf font-medium">
                Nomor WhatsApp
              </Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/80 backdrop-blur"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="city" className="text-spiritual-700 font-sf font-medium">
                Kota Asal
              </Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="city"
                  type="text"
                  placeholder="Kota tempat tinggal"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/80 backdrop-blur"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Daftar Sekarang - Gratis!
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-spiritual-500 font-sf">
                Dengan mendaftar, Anda menyetujui{" "}
                <span className="text-gold-600 hover:underline cursor-pointer">syarat & ketentuan</span> kami
              </p>
            </div>
          </div>
        </form>

        <div className="border-t border-spiritual-200 pt-4 mt-6">
          <div className="flex items-center justify-center space-x-6 text-xs text-spiritual-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Konsultasi Gratis</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
              <span>Hemat hingga 30%</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-spiritual-500 rounded-full mr-2"></div>
              <span>Resmi & Terpercaya</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
