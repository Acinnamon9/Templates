import React, { useEffect } from "react";
import { X, Layout } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-neu-bg-primary dark:bg-gray-800 rounded-3xl p-8 neu-raised animate-in zoom-in-95 fade-in duration-300">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <Layout className="w-6 h-6 text-purple-600" />
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="p-3 rounded-2xl neu-raised hover:scale-110 active:scale-95 transition-all text-gray-500 hover:text-purple-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {children}
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 neu-raised hover:text-purple-600 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-xl text-sm font-medium text-white bg-linear-to-br from-purple-600 to-purple-700 shadow-lg hover:brightness-110 transition-all"
          >
            Confirm Action
          </button>
        </div>
      </div>
    </div>
  );
};
