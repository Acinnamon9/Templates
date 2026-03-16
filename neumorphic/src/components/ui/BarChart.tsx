import React from "react";

interface BarChartProps {
  data: { label: string; value: number }[];
  title?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  return (
    <div className="w-full">
      {title && <h3 className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-6">{title}</h3>}
      <div className="flex items-end justify-between h-48 gap-3 px-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3 flex-1 group">
            <div className="relative w-full h-full flex items-end">
              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {item.value}%
              </div>
              <div
                className="w-full rounded-t-xl bg-linear-to-t from-purple-700 to-purple-400 shadow-md transition-all duration-500 ease-out origin-bottom"
                style={{ height: `${item.value}%` }}
              />
            </div>
            <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-tighter">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
