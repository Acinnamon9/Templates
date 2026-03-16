import React from "react";
import { Check } from "lucide-react";

interface Step {
  id: number;
  label: string;
  status: "complete" | "current" | "pending";
}

interface StepperProps {
  steps: Step[];
}

export const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className="flex items-center justify-between w-full" role="list" aria-label="Progress steps">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {/* Step Icon/Number */}
          <div className="flex items-center gap-3" role="listitem">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-md ${
                step.status === "complete"
                  ? "bg-linear-to-br from-purple-600 to-purple-700 text-white"
                  : step.status === "current"
                  ? "bg-linear-to-br from-purple-600 to-purple-700 text-white scale-110"
                  : "neu-raised text-gray-400"
              }`}
            >
              {step.status === "complete" ? (
                <Check className="w-5 h-5" />
              ) : (
                step.id
              )}
            </div>
            <span
              className={`text-sm font-medium hidden sm:block ${
                step.status === "pending" ? "text-gray-400" : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {step.label}
            </span>
          </div>

          {/* Connector */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-4 rounded-full transition-all duration-500 ${
                step.status === "complete" ? "bg-purple-600" : "neu-inset opacity-50"
              }`}
              aria-hidden="true"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
