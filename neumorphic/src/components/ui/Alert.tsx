import React from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";

type AlertVariant = "success" | "error" | "warning" | "info";

interface AlertProps {
  variant: AlertVariant;
  title: string;
  message: string;
  onClose?: () => void;
}

const variants = {
  success: {
    icon: CheckCircle,
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-800 dark:text-green-200",
    sub: "text-green-600 dark:text-green-400",
    iconColor: "text-green-600 dark:text-green-400",
  },
  error: {
    icon: XCircle,
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-800 dark:text-red-200",
    sub: "text-red-600 dark:text-red-400",
    iconColor: "text-red-600 dark:text-red-400",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    text: "text-yellow-800 dark:text-yellow-200",
    sub: "text-yellow-600 dark:text-yellow-400",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  info: {
    icon: Info,
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-800 dark:text-blue-200",
    sub: "text-blue-600 dark:text-blue-400",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
};

export const Alert: React.FC<AlertProps> = ({ variant, title, message, onClose }) => {
  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div className={`flex items-start gap-4 p-4 rounded-2xl ${config.bg} transition-all duration-300 relative group`}>
      <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${config.iconColor}`} />
      <div className="flex-1">
        <p className={`text-sm font-bold ${config.text}`}>{title}</p>
        <p className={`text-xs mt-1 ${config.sub}`}>{message}</p>
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className={`w-4 h-4 ${config.sub}`} />
        </button>
      )}
    </div>
  );
};
