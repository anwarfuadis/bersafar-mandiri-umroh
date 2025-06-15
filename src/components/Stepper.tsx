
import { cn } from "@/lib/utils";

interface StepperProps {
  step: number;
  setStep: (step: number) => void;
  labels: string[];
}
export default function Stepper({ step, setStep, labels }: StepperProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6 select-none">
      {labels.map((label, idx) => (
        <div
          key={label}
          className="flex flex-col items-center gap-0 cursor-pointer"
          onClick={() => setStep(idx + 1)}
          aria-current={step === idx + 1 ? "step" : undefined}
        >
          <div
            className={cn(
              "flex items-center justify-center h-9 w-9 rounded-full border-2 text-base font-semibold transition-all",
              step === idx + 1
                ? "bg-gold-500 text-white border-gold-500 shadow-lg"
                : step > idx + 1
                ? "bg-green-500 text-white border-green-500"
                : "bg-slate-100 text-gray-500 border-gray-300"
            )}
          >
            {idx + 1}
          </div>
          <span
            className={cn(
              "text-xs font-semibold mt-2 text-center max-w-[80px]",
              step === idx + 1
                ? "text-gold-700"
                : step > idx + 1
                ? "text-green-600"
                : "text-gray-400"
            )}
          >
            {label}
          </span>
          {idx < labels.length - 1 && (
            <div className="w-10 h-1 rounded bg-gray-200 mt-2" />
          )}
        </div>
      ))}
    </div>
  );
}
