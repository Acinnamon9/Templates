import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  name: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  label,
}) => {
  return (
    <fieldset>
      {label && (
        <legend className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {label}
        </legend>
      )}
      <div className="space-y-3" role="radiogroup">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-3">
            <button
              type="button"
              role="radio"
              aria-checked={value === option.value}
              onClick={() => onChange(option.value)}
              className="radio-btn neu-focus w-6 h-6 rounded-full flex items-center justify-center transition-all neu-inset"
            >
              <span
                className={`w-3 h-3 rounded-full bg-linear-to-br from-purple-600 to-purple-700 transition-opacity ${
                  value === option.value ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              ></span>
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
