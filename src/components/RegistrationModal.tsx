
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SERVICE_OPTIONS = [
  "Visa + Mutawif",
  "Hotel + Penerbangan",
  "Full Services"
];

const STORAGE_KEY = "bersafar_selected_services";

const RegistrationModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    if (!open) {
      setSelected([]);
      setDate("");
    }
  }, [open]);

  const handleChip = (s: string) => {
    setSelected(sel =>
      sel.includes(s) ? sel.filter(x => x !== s) : [...sel, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage for FloatingServiceButton
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Daftar &amp; Pilih Layanan</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 p-1">
          <div>
            <p className="font-medium mb-2">Layanan yang dibutuhkan:</p>
            <div className="flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleChip(opt)}
                  className={`px-4 py-2 rounded-full border transition-all text-sm ${
                    selected.includes(opt)
                      ? "bg-amber-700 text-white border-amber-900"
                      : "bg-white/10 text-amber-900 border-amber-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium mb-2">Jadwal Umroh (tentatif):</p>
            <input
              type="date"
              className="w-full px-4 py-2 rounded border border-amber-700 bg-white/30 text-amber-900"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="pt-2 flex justify-end">
            <Button type="submit" className="bg-amber-700 hover:bg-amber-900 text-white">
              Simpan Layanan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
