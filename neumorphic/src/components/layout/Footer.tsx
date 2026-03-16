import React from "react";
import { MousePointer2, Twitter, Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neu-bg-primary pt-20 pb-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="neu-raised p-2 rounded-xl">
                <MousePointer2 className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                Tactile<span className="text-purple-600">Flow</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              The next generation of spatial computing interfaces. AI-powered Neumorphic design systems for high-fidelity digital products.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <button 
                  key={i}
                  className="neu-raised-sm p-2 rounded-lg text-gray-500 hover:text-purple-600 dark:text-gray-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-6">Product</h4>
            <ul className="space-y-4">
              {["Features", "Components", "Templates", "Pricing"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-6">Resources</h4>
            <ul className="space-y-4">
              {["Documentation", "Guides", "Support", "API Reference"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-6">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} TactileFlow Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              All infrastructure status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
