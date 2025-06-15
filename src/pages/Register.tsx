
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Ticket, Hotel, Wallet, User2, MoreHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

const layananList = [
  { id: "ticket", name: "Ticket Pesawat", icon: Ticket },
  { id: "hotel", name: "Hotel", icon: Hotel },
  { id: "visa", name: "Visa Umroh", icon: Wallet },
  { id: "mutawif", name: "Mutawif", icon: User2 },
  { id: "lainnya", name: "Lainnya", icon: MoreHorizontal },
];

type FormState = {
  name: string;
  phone: string;
  keberangkatan: string;
  tanggal: string;
  layanan: string[];
};

const RegisterPage = () => {
  const [tanggal, setTanggal] = React.useState<Date | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);
  const { register, handleSubmit, setValue, watch } = useForm<FormState>();

  const navigate = useNavigate();

  const handleChip = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  React.useEffect(() => {
    setValue("layanan", selected);
  }, [selected, setValue]);

  React.useEffect(() => {
    setValue("tanggal", tanggal ? format(tanggal, "yyyy-MM-dd") : "");
  }, [tanggal, setValue]);

  const onSubmit = (data: FormState) => {
    // Simulate registration logic here
    alert(`Registrasi berhasil!\n${JSON.stringify(data, null, 2)}`);
    navigate("/");
  };

  return (
    <div className="mx-auto max-w-md p-6 pt-12">
      <h1 className="text-2xl font-bold mb-4 text-spiritual-700">Registrasi Perjalanan Umroh</h1>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-1 font-medium">Nama</label>
          <Input type="text" placeholder="Nama lengkap" {...register("name", { required: true })} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Nomor HP</label>
          <Input type="tel" placeholder="08xxxxxxxxxx" {...register("phone", { required: true })} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Keberangkatan</label>
          <Input type="text" placeholder="Contoh: Jakarta" {...register("keberangkatan", { required: true })} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Tanggal Umroh</label>
          <div className="flex items-center gap-2">
            <Input
              type="date"
              value={watch("tanggal")}
              onChange={e => setTanggal(new Date(e.target.value))}
              className="max-w-xs"
              required
            />
            <CalendarIcon className="text-sand-500" />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Kebutuhan Layanan</label>
          <div className="flex gap-2 flex-wrap">
            {layananList.map((layanan) => {
              const selectedChip = selected.includes(layanan.id);
              return (
                <button
                  type="button"
                  key={layanan.id}
                  onClick={() => handleChip(layanan.id)}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 border ${
                    selectedChip
                      ? "bg-gold-400 text-white border-gold-500 shadow"
                      : "bg-sand-100 border-sand-300 text-spiritual-700"
                  } font-semibold text-sm transition`}
                >
                  <layanan.icon size={16} />
                  {layanan.name}
                </button>
              );
            })}
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-spiritual-600 hover:bg-spiritual-700 text-white font-bold"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;

