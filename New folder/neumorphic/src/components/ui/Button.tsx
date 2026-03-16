import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info" | "raised";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const variantStyles = {
  default: "neu-raised text-gray-600 dark:text-gray-300",
  raised: "neu-raised text-gray-600 dark:text-gray-300",
  primary: "text-white bg-linear-to-br from-purple-600 to-purple-700 neu-convex",
  success: "text-white bg-linear-to-br from-green-500 to-green-600 neu-convex",
  warning: "text-white bg-linear-to-br from-yellow-500 to-yellow-600 neu-convex",
  error: "text-white bg-linear-to-br from-red-500 to-red-600 neu-convex",
  info: "text-white bg-linear-to-br from-blue-500 to-blue-600 neu-convex",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  loading = false,
  className = "",
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`neu-btn neu-focus rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="animate-spin" aria-hidden="true">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
      {children}
    </button>
  );
};
