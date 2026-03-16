import React from "react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="w-full h-full relative p-6">
      <div className="absolute left-8 top-8 bottom-8 w-1 neu-inset rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full bg-purple-500 h-[60%] animate-pulse" />
      </div>
      
      <div className="space-y-10">
        {events.map((event, index) => (
          <div key={index} className="flex gap-6 relative">
            <div className="w-6 h-6 rounded-full neu-raised flex items-center justify-center bg-neu-bg-primary dark:bg-gray-800 z-10 shrink-0">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <div className="flex-1 pb-4">
              <span className="text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400 mb-1 block">
                {event.time}
              </span>
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1">{event.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
