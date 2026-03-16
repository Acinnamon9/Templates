import React from "react";
import { Clock } from "lucide-react";

interface TimePickerProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative group">
        <input
          type="time"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full px-4 py-3 pr-10 rounded-xl text-sm text-gray-700 dark:text-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 neu-inset bg-transparent appearance-none cursor-pointer"
        />
        <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-hover:text-purple-500 transition-colors" />
      </div>
    </div>
  );
};
