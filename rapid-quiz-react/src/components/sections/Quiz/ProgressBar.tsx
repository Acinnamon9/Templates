import React from 'react';

interface ProgressBarProps {
  progress: number;
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-lg">
      <div className="w-[200px] h-2 bg-border rounded-full relative overflow-hidden">
        <div 
          className="h-full bg-accent rounded-full relative transition-all duration-normal overflow-hidden" 
          style={{ width: `${progress}%` }}
        >
          <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
        </div>
      </div>
      <span className="text-[0.9rem] text-secondary font-medium">
        <span>{currentStep}</span>/{totalSteps} Questions
      </span>
    </div>
  );
};

export default ProgressBar;
