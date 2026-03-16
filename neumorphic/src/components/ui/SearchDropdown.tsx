import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Check } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface SearchDropdownProps {
  label: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Search...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer neu-inset group transition-all"
      >
        <span className={`text-sm ${selectedOption ? "text-gray-700 dark:text-gray-200" : "text-gray-400"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute z-30 w-full mt-2 rounded-2xl bg-neu-bg-primary dark:bg-gray-800 neu-raised animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-3 border-b border-gray-100 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="Type to filter..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-transparent neu-inset-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>
          <ul className="max-h-56 overflow-y-auto custom-scrollbar p-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <li key={opt.value}>
                  <button
                    onClick={() => {
                      onChange?.(opt.value);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className="w-full px-4 py-3 text-sm text-left rounded-lg flex items-center justify-between hover:bg-purple-50 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    <span>{opt.label}</span>
                    {value === opt.value && <Check className="w-4 h-4 text-purple-600" />}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-8 text-center text-sm text-gray-400">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
