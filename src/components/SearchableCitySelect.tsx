
import * as React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Sample cities, replace with more or from backend if needed
const CITIES = [
  "Jakarta", "Bandung", "Surabaya", "Medan", "Semarang", "Makassar",
  "Palembang", "Denpasar", "Padang", "Malang", "Yogyakarta"
];

interface SearchableCitySelectProps {
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

export default function SearchableCitySelect({ value, onChange, required }: SearchableCitySelectProps) {
  const [search, setSearch] = React.useState("");
  const filtered = React.useMemo(() =>
    CITIES.filter(c => c.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Pilih Kota" />
      </SelectTrigger>
      <SelectContent>
        <div className="p-2 sticky top-0 bg-white z-10">
          <Input
            type="text"
            placeholder="Cari kota…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-2"
          />
        </div>
        {filtered.length ? (
          filtered.map(city => <SelectItem key={city} value={city}>{city}</SelectItem>)
        ) : (
          <div className="px-3 py-2 text-muted">Kota tidak ditemukan</div>
        )}
      </SelectContent>
    </Select>
  );
}
