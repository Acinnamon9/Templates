import React from "react";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
  icon: keyof typeof LucideIcons;
  title: string;
  gradientFrom: string;
  gradientTo: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, gradientFrom, gradientTo }) => {
  const Icon = LucideIcons[icon] as React.ElementType;

  return (
    <div className="neu-flat p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div
        className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-linear-to-br ${gradientFrom} ${gradientTo} shadow-lg group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <p className="text-sm font-bold text-gray-700 dark:text-gray-200 tracking-tight">
        {title}
      </p>
    </div>
  );
};
