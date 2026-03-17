import React from 'react';
import { triggerFlair } from '../../../utils/flair';

interface QuestionCardProps {
  index: number;
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ index, text, isSelected, onSelect }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const quizRect = (e.currentTarget.closest('.quiz-section') as HTMLElement).getBoundingClientRect();
    
    const x = rect.left - quizRect.left + rect.width / 2;
    const y = rect.top - quizRect.top + rect.height / 2;
    
    triggerFlair(x, y);
  };

  return (
    <div
      className={`relative z-2 bg-background border rounded-md px-6 py-3 mb-3 flex items-center cursor-pointer transition-all duration-normal hover:border-accent hover:-translate-y-1 hover:shadow-lg ${
        isSelected ? 'bg-primary border-primary text-white' : 'border-border'
      }`}
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-primary ${
        isSelected ? 'bg-accent text-white' : 'bg-white'
      }`}>
        {index + 1}
      </div>
      <span className="text-[1.1rem] font-medium">{text}</span>
    </div>
  );
};

export default QuestionCard;
