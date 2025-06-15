
import React, { useState } from "react";
import { ShoppingCart, Trash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Example item data; in a real app this could come from global state or context
const initialServices = [
  { id: 1, name: "Visa Umroh", price: 2000000 },
  { id: 2, name: "Mutawif", price: 1500000 },
  { id: 3, name: "Hotel", price: 4000000 },
];

const FloatingCartButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [cartServices, setCartServices] = useState(initialServices);

  const removeService = (id: number) => {
    setCartServices((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <>
      {/* Expandable Cart Tab Box */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-80 max-w-full animate-fade-in">
          <Card className="shadow-2xl border-sand-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-spiritual-700">
                <ShoppingCart size={20} /> Keranjang Layanan
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cartServices.length > 0 ? (
                <>
                  <ul className="space-y-2 mb-4">
                    {cartServices.map((service) => (
                      <li
                        key={service.id}
                        className="rounded-md px-3 py-2 bg-sand-100 text-spiritual-700 flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg">•</span>
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="mr-2 text-gold-900 font-semibold">
                            Rp{service.price.toLocaleString("id-ID")}
                          </span>
                          <button
                            aria-label="Remove item"
                            onClick={() => removeService(service.id)}
                            className="text-destructive hover:bg-red-100 rounded-full p-1 transition"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center font-semibold text-base text-spiritual-700 mb-2">
                    <span>Total</span>
                    <span>Rp{total.toLocaleString("id-ID")}</span>
                  </div>
                  <Button className="w-full bg-spiritual-600 hover:bg-spiritual-700 text-white mt-1">
                    Lanjut ke Checkout
                  </Button>
                </>
              ) : (
                <div className="text-center text-sm text-sand-500 py-8">
                  Keranjang kosong
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Cart Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 bg-white border border-sand-300 shadow-lg rounded-full flex items-center gap-2 px-5 py-3 hover:bg-sand-50 transition-all group"
        aria-label="Keranjang"
      >
        <div className="relative flex items-center">
          <ShoppingCart className="text-spiritual-700" />
          {cartServices.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold-400 text-white rounded-full px-1.5 text-xs font-bold min-w-5 flex items-center justify-center shadow">
              {cartServices.length}
            </span>
          )}
        </div>
        <span className="ml-2 font-sf font-semibold text-spiritual-700 text-base">
          Keranjang
        </span>
      </button>
    </>
  );
};

export default FloatingCartButton;

