import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "raised" | "inset" | "flat";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "raised",
}) => {
  const variantStyles = {
    raised: "neu-raised",
    inset: "neu-inset",
    flat: "neu-flat",
  };

  return (
    <article className={`${variantStyles[variant]} p-6 rounded-3xl ${className}`}>
      {children}
    </article>
  );
};
