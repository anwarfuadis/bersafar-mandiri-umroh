
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  description: string;
  isCompleted?: boolean;
}

const UMROH_STEPS: Step[] = [
  {
    number: 1,
    title: "Pilih Layanan",
    description: "Tentukan layanan umroh yang sesuai kebutuhan Anda",
    isCompleted: false
  },
  {
    number: 2,
    title: "Atur Jadwal",
    description: "Tentukan tanggal keberangkatan yang fleksibel",
    isCompleted: false
  },
  {
    number: 3,
    title: "Booking & Bayar",
    description: "Konfirmasi pemesanan dan lakukan pembayaran",
    isCompleted: false
  },
  {
    number: 4,
    title: "Persiapan",
    description: "Lengkapi dokumen dan persiapan keberangkatan",
    isCompleted: false
  },
  {
    number: 5,
    title: "Berangkat",
    description: "Mulai perjalanan umroh mandiri Anda",
    isCompleted: false
  }
];

const StepByStepSection = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sf font-bold mb-6 text-spiritual-800">
            Langkah Mudah Umroh Mandiri
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Umroh mandiri adalah cara baru melakukan ibadah umroh dengan kebebasan penuh mengatur jadwal, 
            akomodasi, dan layanan sesuai kebutuhan pribadi Anda tanpa terikat paket travel agent.
          </p>
          <div className="bg-gradient-to-r from-gold-50 to-sand-50 p-6 rounded-2xl border border-gold-200 max-w-2xl mx-auto">
            <p className="text-spiritual-700 font-semibold text-lg mb-2">
              Di langkah mana Anda sekarang?
            </p>
            <p className="text-gray-600">
              Klik langkah di bawah untuk melihat panduan detail
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {UMROH_STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <div
                className={cn(
                  "flex flex-col items-center text-center cursor-pointer transition-all duration-300 p-6 rounded-2xl max-w-xs",
                  selectedStep === step.number 
                    ? "bg-gradient-to-br from-spiritual-100 to-spiritual-50 border-2 border-spiritual-300 shadow-lg transform scale-105" 
                    : "hover:bg-gray-50 border-2 border-transparent"
                )}
                onClick={() => setSelectedStep(step.number)}
              >
                {/* Step Number/Icon */}
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                  selectedStep === step.number
                    ? "bg-gradient-to-br from-spiritual-600 to-spiritual-700 text-white shadow-lg"
                    : step.isCompleted
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                )}>
                  {step.isCompleted ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : (
                    <span className="text-xl font-bold">{step.number}</span>
                  )}
                </div>

                {/* Step Content */}
                <h3 className={cn(
                  "text-lg font-bold mb-2 transition-colors",
                  selectedStep === step.number ? "text-spiritual-800" : "text-gray-700"
                )}>
                  {step.title}
                </h3>
                <p className={cn(
                  "text-sm transition-colors",
                  selectedStep === step.number ? "text-spiritual-600" : "text-gray-500"
                )}>
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < UMROH_STEPS.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-spiritual-900 font-bold text-lg py-6 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Mulai Umroh Mandiri <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepByStepSection;
