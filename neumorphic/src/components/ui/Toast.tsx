import React from "react";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";
import { useToast } from "../../context/ToastContext";
import type { Toast as ToastType } from "../../context/ToastContext";

const icons = {
  info: <Info className="w-5 h-5 text-blue-500" />,
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  error: <XCircle className="w-5 h-5 text-red-500" />,
};

export const Toast: React.FC<ToastType> = ({ id, type, title, message }) => {
  const { removeToast } = useToast();

  return (
    <div
      className="neu-raised p-4 rounded-2xl flex items-start gap-3 min-w-[300px] toast-enter pointer-events-auto"
      role="alert"
    >
      <div className="mt-0.5">{icons[type]}</div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{message}</p>
      </div>
      <button
        onClick={() => removeToast(id)}
        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
