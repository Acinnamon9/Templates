import React, { useState, useRef } from "react";
import { UploadCloud, FileText, X } from "lucide-react";

interface FileUploadProps {
  label: string;
  onFilesSelected?: (files: File[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ label, onFilesSelected }) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
      onFilesSelected?.(newFiles);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
        <UploadCloud className="w-5 h-5 text-purple-600" />
        {label}
      </h2>
      
      <div
        className={`relative border-2 border-dashed rounded-3xl p-10 text-center transition-all duration-300 cursor-pointer ${
          dragActive 
            ? "border-purple-500 bg-purple-500/5" 
            : "border-gray-300 dark:border-gray-600 hover:border-purple-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files) {
              const newFiles = Array.from(e.target.files);
              setFiles(prev => [...prev, ...newFiles]);
              onFilesSelected?.(newFiles);
            }
          }}
        />
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 neu-raised text-purple-600">
            <UploadCloud className="w-8 h-8" />
          </div>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Drop files here or click to upload
          </p>
          <p className="text-xs text-gray-400 mt-2">PNG, JPG, PDF up to 10MB</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-xl neu-flat animate-in slide-in-from-left-4 duration-200">
              <div className="flex items-center gap-3 overflow-hidden">
                <FileText className="w-4 h-4 text-purple-500 shrink-0" />
                <span className="text-xs text-gray-600 dark:text-gray-300 truncate">{file.name}</span>
                <span className="text-[10px] text-gray-400 shrink-0">({(file.size / 1024).toFixed(1)} KB)</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                className="p-1 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
