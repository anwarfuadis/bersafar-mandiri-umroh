
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
import { Mail, Lock, Asterisk } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Handle login here
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-auto bg-gradient-to-br from-spiritual-50 via-white to-gold-50/30 border-2 border-gold-200/50 shadow-2xl backdrop-blur-sm">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto mb-4">
            <Asterisk className="h-10 w-10 mx-auto mb-2 text-green-700" />
            <h3 className="text-lg font-sf font-bold text-green-700">Bersafar</h3>
          </div>
          <DialogTitle className="text-2xl font-sf font-bold text-spiritual-800 mb-2">
            Masuk ke Akun Anda
          </DialogTitle>
          <p className="text-spiritual-600 font-sf leading-relaxed">
            Selamat datang kembali! Silakan masuk untuk melanjutkan
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="email" className="text-spiritual-700 font-sf font-medium">
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
              <Label htmlFor="password" className="text-spiritual-700 font-sf font-medium">
                Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-spiritual-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password Anda"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-10 border-spiritual-200 focus:border-gold-400 focus:ring-gold-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-sf font-bold py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gold-400/30"
            >
              Masuk
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-spiritual-600 font-sf">
                Belum punya akun?{" "}
                <span className="text-gold-600 hover:underline cursor-pointer font-semibold">Daftar sekarang</span>
              </p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
