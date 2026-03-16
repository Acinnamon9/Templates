import React from "react";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        <li className="flex items-center">
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-purple-600 transition-colors neu-focus p-1 rounded-md"
          >
            <Home className="w-4 h-4" />
          </a>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="text-gray-400" aria-hidden="true">
              <ChevronRight className="w-4 h-4" />
            </li>
            <li>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 transition-colors neu-focus px-2 py-1 rounded-md"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-700 dark:text-gray-200 font-semibold px-2 py-1">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
