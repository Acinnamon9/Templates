import React from 'react';

interface ResultModalProps {
  result: {
    emoji: string;
    category: string;
    title: string;
    summary: string;
    mistakes: string[];
    ctaColor: string;
    actionTitle: string;
    actionDesc: string;
    ctaText: string;
  };
  userEmail: string;
  onClose: () => void;
  onReset: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, userEmail, onClose, onReset }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-2000 p-4 transition-opacity duration-300">
      <div className="bg-white p-xl rounded-lg max-w-[600px] w-full relative transform transition-transform duration-300 overflow-y-auto max-h-[90vh]">
        <button className="absolute top-4 right-4 text-2xl text-secondary hover:text-primary" onClick={onClose}>×</button>
        <div className="mb-md">
          <span className="bg-primary text-white px-4 py-2 rounded-sm inline-flex items-center gap-2">
            <span className="text-xl">{result.emoji}</span>
            {result.category}
          </span>
        </div>
        <h2 className="text-[2rem] font-heading font-bold mb-md leading-tight">{result.title}</h2>
        <p className="text-secondary mb-lg">{result.summary}</p>

        <div className="bg-background p-lg rounded-md mb-lg">
          <div className="font-bold mb-md flex items-center gap-2">
            <span className="text-accent">⚠️</span>
            Top 3 Revenue Leaks
          </div>
          <ul className="space-y-2">
            {result.mistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-secondary">
                <span className="text-accent font-bold">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-lg rounded-md text-white" style={{ background: result.ctaColor }}>
          <div className="font-bold text-[1.25rem] mb-1">{result.actionTitle}</div>
          <p className="opacity-80 text-sm">{result.actionDesc}</p>
          <button className="mt-md bg-white text-primary px-6 py-3 rounded-sm font-bold hover:bg-gray-100 transition-colors" onClick={onClose}>
            {result.ctaText}
          </button>
        </div>

        <p className="text-center text-secondary text-[0.9rem] mt-5">
          📧 Full report sent to {userEmail}
        </p>
        
        <div className="text-center mt-5">
            <button 
                onClick={onReset}
                className="bg-transparent text-accent font-bold hover:underline"
            >
                Retake Quiz
            </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
