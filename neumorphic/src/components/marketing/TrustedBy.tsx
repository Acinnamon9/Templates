import React from "react";
import { Box, Layers, Zap, Shield, Cpu, Globe } from "lucide-react";

export const TrustedBy: React.FC = () => {
  const logos = [
    { name: "Spatial", icon: Globe },
    { name: "Nexus", icon: Cpu },
    { name: "Aether", icon: Zap },
    { name: "Flux", icon: Layers },
    { name: "Sentinel", icon: Shield },
    { name: "Core", icon: Box },
  ];

  return (
    <div className="py-12 border-y border-gray-200 dark:border-gray-800 bg-neu-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-center text-xs font-black tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-10">
          Trusted by Industry Leaders in Spatial Design
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3">
              <logo.icon className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-lg md:text-xl font-bold tracking-tighter">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
