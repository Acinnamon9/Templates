import React, { useState, useRef } from "react";

interface SliderProps {
  label?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  ariaLabel?: string;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  defaultValue = 50,
  onChange,
  ariaLabel,
}) => {
  const [value, setValue] = useState(defaultValue);
  const trackRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="w-full">
      {(label || true) && (
        <div className="flex justify-between mb-3 text-sm font-medium text-gray-600 dark:text-gray-300">
          <span>{label}</span>
          <span className="text-purple-600 dark:text-purple-400 font-bold">{value}%</span>
        </div>
      )}
      <div className="relative h-3 rounded-full neu-inset flex items-center" ref={trackRef}>
        {/* Progress Fill */}
        <div
          className="absolute h-full rounded-full bg-linear-to-r from-purple-600 to-purple-400 opacity-60 transition-all duration-150"
          style={{ width: `${percentage}%` }}
        />
        
        {/* Invisible Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleInput}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          aria-label={ariaLabel || label}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        />

        {/* Custom Thumb */}
        <div
          className="absolute w-6 h-6 rounded-full neu-raised pointer-events-none transition-transform hover:scale-110 active:scale-125 z-20"
          style={{ 
            left: `calc(${percentage}% - 12px)`,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        />
      </div>
    </div>
  );
};
