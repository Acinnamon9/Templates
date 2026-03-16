import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  className?: string;
}

const variantStyles = {
  default: "neu-raised-sm text-gray-600 dark:text-gray-300",
  primary: "text-white bg-linear-to-br from-purple-600 to-purple-700 neu-raised-sm",
  success: "text-white bg-linear-to-br from-green-500 to-green-600 neu-raised-sm",
  warning: "text-white bg-linear-to-br from-yellow-500 to-yellow-600 neu-raised-sm",
  error: "text-white bg-linear-to-br from-red-500 to-red-600 neu-raised-sm",
  info: "text-white bg-linear-to-br from-blue-500 to-blue-600 neu-raised-sm",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  return (
    <span
      className={`px-4 py-2 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
