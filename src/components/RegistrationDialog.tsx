
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ESTIMASI_OPTIONS = [
  { label: "1 Bulan", value: "1_bulan" },
  { label: "2 Bulan", value: "2_bulan" },
  { label: "3 Bulan", value: "3_bulan" },
  { label: "Lebih dari 3 Bulan", value: "lebih_3_bulan" },
  { label: "Belum Tahu", value: "belum_tahu" },
];

const KEBUTUHAN_OPTIONS = [
  { label: "Tiket Pesawat", value: "tiket_pesawat" },
  { label: "Hotel", value: "hotel" },
  { label: "Visa Umroh", value: "visa_umroh" },
  { label: "Mutawif", value: "mutawif" },
  { label: "Lainnya", value: "lainnya" },
];

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationDialog = ({ open, onOpenChange }: RegistrationDialogProps) => {
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [estimasi, setEstimasi] = useState(ESTIMASI_OPTIONS[0].value);
  const [budget, setBudget] = useState(15);
  const [kebutuhan, setKebutuhan] = useState<string[]>([]);

  function handleKebutuhanSelect(opt: string) {
    if (kebutuhan.includes(opt)) {
      setKebutuhan(kebutuhan.filter((item) => item !== opt));
    } else {
      setKebutuhan([...kebutuhan, opt]);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-bold mb-2 text-center">Form Pendaftaran Umroh Mandiri</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-5 pt-1"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: handle submit (maybe toast)
            onOpenChange(false);
          }}
        >
          <div>
            <Label htmlFor="nama">Nama Lengkap</Label>
            <Input id="nama" value={nama} onChange={e => setNama(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="kota">Kota Asal</Label>
            <Input id="kota" value={kota} onChange={e => setKota(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="nomorHp">Nomor Telepon</Label>
            <Input id="nomorHp" type="tel" value={nomorHp} onChange={e => setNomorHp(e.target.value)} required />
          </div>
          {/* Estimasi */}
          <div>
            <Label className="mb-1 block">Estimasi Umroh</Label>
            <RadioGroup
              value={estimasi}
              onValueChange={setEstimasi}
              className="flex flex-wrap gap-3"
            >
              {ESTIMASI_OPTIONS.map(opt => (
                <Label
                  key={opt.value}
                  className="flex items-center gap-2 cursor-pointer bg-slate-100 px-3 py-2 rounded-lg text-gray-800 font-medium"
                >
                  <RadioGroupItem value={opt.value} />
                  {opt.label}
                </Label>
              ))}
            </RadioGroup>
          </div>
          {/* Budget */}
          <div>
            <Label htmlFor="budget" className="mb-1 block">Budget Kamu (Rp Juta)</Label>
            <div className="flex items-center space-x-3">
              <input
                id="budget"
                type="range"
                min={15}
                max={100}
                value={budget}
                onChange={e => setBudget(Number(e.target.value))}
                className="w-full accent-green-500"
              />
              <span className="block min-w-[60px] font-bold text-green-700">Rp {budget}Jt</span>
            </div>
          </div>
          {/* Kebutuhan */}
          <div>
            <Label className="mb-1 block">Kebutuhan Umroh</Label>
            <div className="flex flex-wrap gap-2">
              {KEBUTUHAN_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleKebutuhanSelect(opt.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                    ${
                      kebutuhan.includes(opt.value)
                        ? "bg-gradient-to-r from-green-400 to-green-600 text-white border-green-600 shadow"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-green-50"
                    }
                  `}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <Button className="w-full mt-2 bg-gradient-to-r from-gold-500 to-gold-600 text-spiritual-900 font-bold text-base py-3 rounded-lg hover:scale-105">
            Daftar Sekarang
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
