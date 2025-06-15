
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Stepper from "./Stepper";
import SearchableCitySelect from "./SearchableCitySelect";
import { ArrowRight } from "lucide-react";

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

const REGISTRATION_STEPS = [
  "Data Diri",
  "Rencana Umroh"
];

const IMAGE_URL = "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=360&q=80";

const MIN_BUDGET = 15; // juta

const RegistrationDialog = ({ open, onOpenChange }: RegistrationDialogProps) => {
  const [step, setStep] = useState(1);
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [estimasi, setEstimasi] = useState(ESTIMASI_OPTIONS[0].value);
  const [budget, setBudget] = useState(0);
  const [kebutuhan, setKebutuhan] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  function handleKebutuhanSelect(opt: string) {
    if (kebutuhan.includes(opt)) {
      setKebutuhan(kebutuhan.filter((item) => item !== opt));
    } else {
      setKebutuhan([...kebutuhan, opt]);
    }
  }

  function handleDialogChange(open: boolean) {
    if (!open) {
      setStep(1);
      setNama("");
      setKota("");
      setNomorHp("");
      setEstimasi(ESTIMASI_OPTIONS[0].value);
      setBudget(0);
      setKebutuhan([]);
      setConsent(false);
    }
    onOpenChange(open);
  }

  function handleNextStep(e: React.FormEvent) {
    e.preventDefault();
    if (nama && kota && nomorHp) {
      setStep(2);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (consent) {
      onOpenChange(false);
      setStep(1);
    }
  }

  // Helper for phone input
  function phoneValue() {
    if (nomorHp.startsWith("0")) return nomorHp.substring(1);
    if (nomorHp.startsWith("62")) return nomorHp.substring(2);
    return nomorHp;
  }

  // For checklist style on 2nd step
  function renderEstimasiChecklist() {
    return (
      <div className="flex flex-wrap gap-2">
        {ESTIMASI_OPTIONS.map(opt => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setEstimasi(opt.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all font-medium text-gray-800 
              ${estimasi === opt.value ? "border-gold-700 bg-gold-100 shadow" : "border-gray-200 bg-slate-50 hover:bg-gold-50"}
            `}
          >
            <span className={`block w-4 h-4 rounded-full border-2 flex items-center justify-center
              ${estimasi === opt.value ? "bg-gold-500 border-gold-700" : "border-gray-300"}
            `}>
              {estimasi === opt.value && <div className="w-2 h-2 rounded-full bg-gold-700" />}
            </span>
            {opt.label}
          </button>
        ))}
      </div>
    );
  }

  // Helper for showing budget pin label
  function budgetPinValue() {
    return Math.max(budget, MIN_BUDGET);
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent className="max-w-2xl p-0 bg-white !overflow-hidden shadow-2xl">
        <div className="flex min-h-[520px]">
          {/* Side Image (Left) */}
          <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-sand-100 p-6">
            <img src={IMAGE_URL} alt="umroh illustration" className="w-full h-auto rounded-lg shadow-md mb-4 object-cover" />
            <p className="text-center text-lg font-semibold text-spiritual-700 drop-shadow">Pendaftaran Akun Bersafar</p>
          </div>
          {/* Main form content (Right) */}
          <div className="flex-1 w-full py-8 px-6 md:px-10 flex flex-col justify-center">
            <DialogHeader>
              <DialogTitle className="font-bold mb-2 text-center text-2xl">Pendaftaran Akun</DialogTitle>
            </DialogHeader>
            {/* Stepper */}
            <Stepper step={step} setStep={setStep} labels={REGISTRATION_STEPS} />
            {/* Form steps */}
            <form
              className="space-y-6"
              onSubmit={step === 1 ? handleNextStep : handleSubmit}
            >
              {step === 1 ? (
                <>
                  <div>
                    <Label htmlFor="nama">Nama Lengkap</Label>
                    <Input id="nama" value={nama} onChange={e => setNama(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="kota">Kota Asal</Label>
                    <SearchableCitySelect value={kota} onChange={setKota} required />
                  </div>
                  <div>
                    <Label htmlFor="nomorHp">Nomor Telepon</Label>
                    <div className="flex items-center">
                      <span className="px-3 py-2 bg-slate-100 border border-r-0 border-gray-200 text-gray-500 rounded-l-md select-none font-semibold">+62</span>
                      <Input
                        id="nomorHp"
                        type="tel"
                        pattern="[0-9]{7,}"
                        value={phoneValue()}
                        onChange={e => setNomorHp(e.target.value.replace(/[^0-9]/g, ""))}
                        required
                        className="rounded-l-none"
                        placeholder="8123456789"
                        maxLength={15}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-600 text-spiritual-900 font-bold text-base py-3 rounded-lg hover:scale-105 flex items-center justify-center gap-2"
                    disabled={!nama || !kota || !nomorHp}
                  >
                    Selanjutnya <ArrowRight className="ml-1 size-5" />
                  </Button>
                </>
              ) : (
                <>
                  {/* Estimasi checklist */}
                  <div>
                    <Label className="mb-1 block">Estimasi Umroh</Label>
                    {renderEstimasiChecklist()}
                  </div>
                  {/* Budget slider with pin */}
                  <div>
                    <Label htmlFor="budget" className="mb-1 block">Budget Kamu (Rp Juta)</Label>
                    <div className="flex items-center space-x-4">
                      <input
                        id="budget"
                        type="range"
                        min={0}
                        max={100}
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))}
                        className="w-full accent-green-500"
                        step={1}
                      />
                      <span className="block min-w-[90px] font-bold text-green-700">
                        Rp {budgetPinValue().toLocaleString("id-ID")}000000
                      </span>
                    </div>
                    <div className="text-xs text-muted mt-1">{budget < MIN_BUDGET ? "Minimal Rp 15.000.000" : ""}</div>
                  </div>
                  {/* Kebutuhan chips */}
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
                  {/* Consent / agreement */}
                  <div className="flex items-center gap-2 mt-3">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={val => setConsent(Boolean(val))}
                      required
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs text-gray-700 select-none"
                    >
                      Saya setuju membuat akun Bersafar dan data saya digunakan sesuai ketentuan
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-600 text-spiritual-900 font-bold text-base py-3 rounded-lg hover:scale-105"
                    disabled={!consent}
                  >
                    Bismillah, Daftar
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
