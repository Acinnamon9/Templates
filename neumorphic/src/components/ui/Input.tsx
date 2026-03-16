import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="w-full">
      <label 
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 neu-inset bg-transparent ${
          error ? "border-red-500 ring-1 ring-red-500" : ""
        } ${props.className || ""}`}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  );
};
