import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Stepper from "./Stepper";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    if (nama && nomorHp) {
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

  // Helper for step 1 validation
  function isStepOneValid() {
    return !!nama && !!nomorHp;
  }

  // Adjust stepper to only allow step 2 click if step 1 is valid
  function handleStepperClick(nextStep: number) {
    if (nextStep === 1) {
      setStep(1);
    } else if (nextStep === 2 && isStepOneValid()) {
      setStep(2);
    }
    // Ignore all other cases
  }

  // For thousands separator (Indonesian)
  function formatIDRCurrency(num: number) {
    // 15 -> 15.000.000
    return `${num.toLocaleString("id-ID")}.000`;
  }

  // Modern checklist chip for Estimasi, matching kebutuhan style and color!
  function renderEstimasiChecklist() {
    return (
      <div className="flex flex-wrap gap-2">
        {ESTIMASI_OPTIONS.map(opt => {
          const selected = estimasi === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setEstimasi(opt.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border-2 transition-all flex items-center gap-2",
                selected
                  ? "bg-green-800 text-white border-green-900 shadow"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-green-50"
              )}
            >
              {selected && <Check className="w-4 h-4 mr-1" />}
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  }

  // Helper for showing budget pin label
  function budgetPinValue() {
    return Math.max(budget, MIN_BUDGET);
  }

  // Helper for showing as "Rp 15 juta"
  function formatJuta(num: number) {
    return `${num} juta`;
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent
        className="max-w-3xl p-0 bg-white !overflow-hidden shadow-2xl min-h-[445px] h-[560px] rounded-2xl"
        style={{ width: "95vw", maxWidth: "660px" }}
      >
        <div className="flex h-full">
          {/* Side Image (Left, covers fully) */}
          <div className="hidden md:block w-[42%] relative bg-sand-100">
            <img
              src={IMAGE_URL}
              alt="umroh illustration"
              className="absolute inset-0 w-full h-full object-cover rounded-l-2xl"
              draggable={false}
            />
          </div>
          {/* Main form content (Right side, scrollable) */}
          <div className="flex-1 py-8 px-4 md:px-10 overflow-y-auto max-h-[560px] min-w-[280px]">
            <DialogHeader>
              <DialogTitle className="font-bold mb-3 text-center text-2xl">Pendaftaran Akun</DialogTitle>
            </DialogHeader>
            {/* Stepper -- update click logic */}
            <Stepper
              step={step}
              setStep={handleStepperClick}
              labels={REGISTRATION_STEPS}
            />
            <form
              className="space-y-6"
              onSubmit={step === 1 ? handleNextStep : handleSubmit}
            >
              {step === 1 ? (
                <>
                  <div>
                    <Label htmlFor="nama" className="font-extrabold text-base text-spiritual-800 mb-1 block">Nama Lengkap</Label>
                    <Input id="nama" value={nama} onChange={e => setNama(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="nomorHp" className="font-extrabold text-base text-spiritual-800 mb-1 block">Nomor Telepon</Label>
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
                    disabled={!isStepOneValid()}
                  >
                    Selanjutnya <ArrowRight className="ml-1 size-5" />
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <Label className="font-extrabold text-base text-spiritual-800 mb-1 block">Estimasi Umroh</Label>
                    {renderEstimasiChecklist()}
                  </div>
                  <div>
                    {/* Remove (Rp Juta) as requested */}
                    <Label htmlFor="budget" className="font-extrabold text-base text-spiritual-800 mb-1 block">Budget Kamu</Label>
                    {/* Display Rp and nominal in a flex row and align midline */}
                    <div className="flex items-center space-x-3">
                      <input
                        id="budget"
                        type="range"
                        min={0}
                        max={100}
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))}
                        className="w-full accent-green-800 [&::-webkit-slider-thumb]:bg-green-800 [&::-webkit-slider-thumb]:border-green-900 [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:shadow-green-900 
                          [&::-webkit-slider-runnable-track]:bg-green-200 
                          [&::-moz-range-thumb]:bg-green-800 [&::-moz-range-thumb]:border-green-900
                          [&::-moz-range-track]:bg-green-200
                          [&::-ms-fill-upper]:bg-green-200
                          [&::-ms-fill-lower]:bg-green-200"
                        step={1}
                      />
                      <span className="flex min-w-[100px] font-bold text-green-700 items-center gap-1 justify-end">
                        <span>Rp</span>
                        <span style={{ letterSpacing: "0.05em" }}>{formatJuta(budgetPinValue())}</span>
                      </span>
                    </div>
                    <div className="text-xs text-muted mt-1">{budget < MIN_BUDGET ? "Minimal Rp 15 juta" : ""}</div>
                  </div>
                  <div>
                    <Label className="font-extrabold text-base text-spiritual-800 mb-1 block">Kebutuhan Umroh</Label>
                    <div className="flex flex-wrap gap-2">
                      {KEBUTUHAN_OPTIONS.map(opt => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleKebutuhanSelect(opt.value)}
                          className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium border-2 transition-all",
                            kebutuhan.includes(opt.value)
                              ? "bg-green-800 text-white border-green-900 shadow"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-green-50"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
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
