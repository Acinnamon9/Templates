import React, { useState } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delay = 0,
}) => {
  const [show, setShow] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleMouseEnter = () => {
    const id = window.setTimeout(() => setShow(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setShow(false);
  };

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const arrowStyles = {
    top: "bottom-[-4px] left-1/2 -translate-x-1/2 border-t-white dark:border-t-gray-700",
    bottom: "top-[-4px] left-1/2 -translate-x-1/2 border-b-white dark:border-b-gray-700",
    left: "right-[-4px] top-1/2 -translate-y-1/2 border-l-white dark:border-l-gray-700",
    right: "left-[-4px] top-1/2 -translate-y-1/2 border-r-white dark:border-r-gray-700",
  };

  return (
    <div 
      className="relative flex items-center w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {show && (
        <div 
          className={`absolute z-50 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-lg border border-white/20 dark:border-black/20 animate-in fade-in zoom-in-95 duration-200 whitespace-nowrap ${positionStyles[position]}`}
          role="tooltip"
        >
          {content}
          <div className={`absolute w-2 h-2 border-4 border-transparent ${arrowStyles[position]}`} />
        </div>
      )}
    </div>
  );
};
