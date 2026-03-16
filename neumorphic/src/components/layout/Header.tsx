import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { MousePointer2, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Playground", href: "#playground" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-neu-bg-primary/80 backdrop-blur-md shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="neu-raised p-2 rounded-xl group-hover:scale-110 transition-transform">
            <MousePointer2 className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
            Tactile<span className="text-purple-600">Flow</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2" />
          <button
            onClick={toggleTheme}
            className="neu-raised-sm p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Button variant="primary" size="sm" className="hidden lg:flex">
            Get Started
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="neu-raised-sm p-2 rounded-lg text-gray-600 dark:text-gray-300"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            className="neu-raised-sm p-2 rounded-lg text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neu-bg-primary border-t border-gray-200 dark:border-gray-800 shadow-xl p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-gray-700 dark:text-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
