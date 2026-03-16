import React from "react";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  id,
}) => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="checkbox"
        id={id}
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="neu-focus w-6 h-6 rounded-lg flex items-center justify-center transition-all neu-inset"
      >
        <Check
          className={`w-4 h-4 text-white transition-opacity ${
            checked ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>
      {label && (
        <label
          htmlFor={id}
          className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};
