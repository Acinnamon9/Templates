import React from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <nav className="mb-12 overflow-x-auto custom-scrollbar" aria-label="Component categories">
      <div
        className="flex gap-2 p-2 rounded-2xl mx-auto w-fit min-w-max neu-inset"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 neu-focus ${
              activeTab === tab.id
                ? "bg-linear-to-br from-purple-600 to-purple-700 text-white shadow-lg scale-105"
                : "text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-700 dark:hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
