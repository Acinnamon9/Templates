import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, X } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label?: string;
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
  label,
  placeholder = "Select options...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  const removeTag = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selected.filter((v) => v !== value));
  };

  return (
    <div className="space-y-2" ref={containerRef}>
      {label && <label className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</label>}
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="neu-inset min-h-[44px] px-3 py-2 rounded-xl flex flex-wrap gap-2 items-center cursor-pointer pr-10"
        >
          {selected.length === 0 && (
            <span className="text-gray-400 text-sm">{placeholder}</span>
          )}
          {selected.map((val) => {
            const opt = options.find((o) => o.value === val);
            return (
              <span
                key={val}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-white bg-linear-to-br from-purple-600 to-purple-700 animate-in zoom-in-95 duration-200"
              >
                {opt?.label}
                <X className="w-3 h-3 cursor-pointer hover:text-purple-200" onClick={(e) => removeTag(val, e)} />
              </span>
            );
          })}
          <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 neu-raised rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 border border-white/20 dark:border-black/20">
            <div className="max-h-60 overflow-y-auto custom-scrollbar p-2 space-y-1">
              {options.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => toggleOption(opt.value)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors cursor-pointer ${
                    selected.includes(opt.value)
                      ? "bg-purple-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {opt.label}
                  {selected.includes(opt.value) && <Check className="w-4 h-4" />}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
