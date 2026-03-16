import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  id,
}) => {
  return (
    <div className="flex items-center justify-between">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-600 dark:text-gray-300">
          {label}
        </label>
      )}
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`neu-focus w-14 h-8 rounded-full relative transition-all neu-inset`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-300 neu-raised ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
          aria-hidden="true"
        ></span>
        <span className="sr-only">{label || "Toggle"}</span>
      </button>
    </div>
  );
};
