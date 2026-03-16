import React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/Button";
import { useTheme } from "../../hooks/useTheme";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="pt-16 pb-8 px-4 relative">
      <div className="fixed top-4 right-4 z-40">
        <Button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="w-14 h-14 rounded-2xl"
        >
          {theme === "light" ? (
            <Sun className="text-gray-600" />
          ) : (
            <Moon className="text-gray-300" />
          )}
        </Button>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-raised-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300 tracking-wide uppercase">
            Live React Components
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Neuromorphic UI
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A complete component library with accessibility, animations, and modern design patterns, now powered by React.
        </p>
      </div>
    </header>
  );
};
