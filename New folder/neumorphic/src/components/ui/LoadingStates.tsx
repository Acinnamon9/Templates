import React from "react";

export const DotsLoader: React.FC = () => {
  return (
    <div className="flex gap-1" aria-label="Loading">
      <div
        className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
};

export const Skeleton: React.FC<{ width?: string; height?: string }> = ({
  width = "100%",
  height = "1rem",
}) => {
  return (
    <div
      className="rounded-lg skeleton"
      style={{ width, height }}
      aria-label="Loading content"
    />
  );
};

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center neu-raised">
      <svg
        className="animate-spin h-5 w-5 text-purple-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};
