
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type AuthMode = 'choice' | 'register' | 'login';

const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [mode, setMode] = useState<AuthMode>('choice');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleClose = () => {
    setMode('choice');
    setEmail("");
    setPassword("");
    setName("");
    onOpenChange(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle auth logic here
    console.log(`${mode}:`, { email, password, name });
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md p-6 bg-white rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-spiritual-800">
            {mode === 'choice' ? 'Selamat Datang' : 
             mode === 'register' ? 'Daftar Akun' : 'Masuk Akun'}
          </DialogTitle>
        </DialogHeader>

        {mode === 'choice' && (
          <div className="space-y-4">
            <p className="text-center text-gray-600 mb-6">
              Pilih untuk melanjutkan perjalanan umroh Anda
            </p>
            <Button 
              onClick={() => setMode('register')}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-bold py-3 rounded-full"
            >
              Daftar Akun Baru <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => setMode('login')}
              variant="outline"
              className="w-full border-2 border-spiritual-300 text-spiritual-700 hover:bg-spiritual-50 font-bold py-3 rounded-full"
            >
              Masuk ke Akun
            </Button>
          </div>
        )}

        {(mode === 'register' || mode === 'login') && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setMode('choice')}
              className="mb-4 text-spiritual-600 hover:text-spiritual-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
            </Button>

            {mode === 'register' && (
              <div>
                <Label htmlFor="name" className="font-bold text-spiritual-800">Nama Lengkap</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  required 
                  className="mt-1"
                />
              </div>
            )}

            <div>
              <Label htmlFor="email" className="font-bold text-spiritual-800">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" className="font-bold text-spiritual-800">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
                className="mt-1"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-bold py-3 rounded-full mt-6"
            >
              {mode === 'register' ? 'Bismillah, Daftar' : 'Masuk'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
