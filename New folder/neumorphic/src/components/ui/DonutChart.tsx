import React from "react";

interface DonutChartData {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutChartData[];
  title?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, title }) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  let accumulatedOffset = 0;

  return (
    <div className="w-full">
      {title && <h3 className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-6">{title}</h3>}
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Segments */}
            {data.map((item, index) => {
              const dashArray = (item.value / total) * 251.2;
              const dashOffset = -accumulatedOffset;
              accumulatedOffset += dashArray;

              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="12"
                  strokeDasharray={`${dashArray} 251.2`}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-700 dark:text-gray-200">100%</span>
            <span className="text-[10px] text-gray-400 uppercase">Total</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {item.label} {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
