
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BadgeX } from "lucide-react";

// Hook into registration/service state via localStorage or context if implemented
const STORAGE_KEY = "bersafar_selected_services";

const servicesMap = [
  "Visa + Mutawif",
  "Hotel + Penerbangan",
  "Full Services"
];

const getSelected = () => {
  if (typeof window === "undefined") return [];
  try {
    const item = window.localStorage.getItem(STORAGE_KEY);
    if (!item) return [];
    return JSON.parse(item);
  } catch {
    return [];
  }
};

const FloatingServiceButton = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>(getSelected());

  React.useEffect(() => {
    const onStorage = () => setSelected(getSelected());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  React.useEffect(() => {
    setSelected(getSelected());
  }, [open]);

  if (!selected.length) return null; // Don't show if no services picked

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="fixed z-50 bottom-8 right-6 bg-amber-600 hover:bg-yellow-800 text-white shadow-lg rounded-full px-5 py-3 flex items-center gap-3 animate-fade-in text-base font-semibold"
        aria-label="Service added"
      >
        Layanan dipilih:{" "}
        <span className="flex gap-2 max-w-[170px] overflow-hidden">
          {selected.map(name =>
            <span key={name} className="bg-amber-900/60 px-2 py-1 rounded text-xs">{name}</span>
          )}
        </span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Layanan kamu</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-wrap gap-3">
          {selected.map(name => (
            <span key={name} className="bg-amber-600/20 text-amber-900 px-3 py-1 rounded-full text-sm">{name}</span>
          ))}
        </div>
        <button onClick={() => {
          localStorage.removeItem(STORAGE_KEY);
          setSelected([]);
          setOpen(false);
        }} className="mt-10 flex items-center gap-2 text-red-700 hover:text-red-900 text-sm">
          <BadgeX size={18} /> Hapus semua
        </button>
      </SheetContent>
    </Sheet>
  );
};

export default FloatingServiceButton;
