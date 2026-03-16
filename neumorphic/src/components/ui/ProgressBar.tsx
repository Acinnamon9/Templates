import React from "react";

interface ProgressBarProps {
  progress: number;
  label?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</div>}
      <div className="h-4 rounded-full neu-inset overflow-hidden p-1">
        <div
          className="h-full rounded-full bg-linear-to-r from-purple-600 to-purple-400 relative overflow-hidden transition-all duration-300 shadow-sm"
          style={{ width: `${progress}%` }}
        >
          <div className="shimmer absolute inset-0" />
        </div>
      </div>
    </div>
  );
};
