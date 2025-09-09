
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Phone, Mail, MapPin, Calendar, Users } from "lucide-react";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationDialog = ({ open, onOpenChange }: RegistrationDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    city: "",
    birthDate: "",
    travelType: "individual",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-auto bg-gradient-to-br from-spiritual-50 via-white to-gold-50/30 border-2 border-gold-200/50 shadow-2xl backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto mb-4">
            <img 
              src="/lovable-uploads/bersafar-logo-cropped.png" 
              alt="Bersafar Logo"
              className="h-14 w-auto mx-auto mb-2"
            />
            <h3 className="text-lg font-inter font-bold text-spiritual-800">Bersafar</h3>
          </div>
          <DialogTitle className="text-2xl font-inter font-bold text-spiritual-800 mb-2">
            Mulai Perjalanan Halal Anda
          </DialogTitle>
          <p className="text-spiritual-600 font-inter leading-relaxed">
            Daftar sekarang untuk mendapatkan penawaran terbaik dan panduan perjalanan yang sesuai syariah
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="fullName" className="text-spiritual-700 font-inter font-medium">
                Nama Lengkap
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="whatsapp" className="text-spiritual-700 font-inter font-medium">
                Nomor WhatsApp
              </Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="Contoh: 08123456789"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="email" className="text-spiritual-700 font-inter font-medium">
                Email
              </Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="city" className="text-spiritual-700 font-inter font-medium">
                Kota
              </Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="city"
                  type="text"
                  placeholder="Masukkan kota Anda"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="birthDate" className="text-spiritual-700 font-inter font-medium">
                Tanggal Lahir
              </Label>
              <div className="relative mt-1">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="travelType" className="text-spiritual-700 font-inter font-medium">
                Jenis Perjalanan
              </Label>
              <div className="relative mt-1">
                <Users className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Select value={formData.travelType} onValueChange={(value) => handleInputChange("travelType", value)}>
                  <SelectTrigger className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                    <SelectValue placeholder="Pilih jenis perjalanan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-bersafar-primary to-bersafar-secondary hover:from-bersafar-secondary hover:to-bersafar-dark text-white font-poppins font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-bersafar-light/30"
            >
              Mulai Perjalanan Saya
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-spiritual-600 font-inter">
                Sudah punya akun?{" "}
                <span className="text-bersafar-accent hover:underline cursor-pointer font-semibold">Masuk di sini</span>
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
