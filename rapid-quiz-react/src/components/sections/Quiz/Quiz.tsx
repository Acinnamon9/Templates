import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useQuiz } from '../../../hooks/useQuiz';
import { quizData } from '../../../data/quizData';
import { siteConfig } from '../../../config/site';
import FlairContainer from './FlairContainer';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import EmailGateModal from './EmailGateModal';
import ResultModal from './ResultModal';

const Quiz: React.FC = () => {
  const {
    currentQuestion,
    setCurrentQuestion,
    answers,
    selectAnswer,
    showEmailGate,
    setShowEmailGate,
    showResults,
    setShowResults,
    result,
    userEmail,
    calculateResults,
    resetQuiz
  } = useQuiz();

  const questionContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (questionContainerRef.current) {
      gsap.fromTo(
        questionContainerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [currentQuestion]);

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <section id="quiz" className="quiz-section py-md bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-1 opacity-15">
        <img
          src={siteConfig.assets.quizAtmosphere}
          alt="Liquid diagnostics"
          className="w-full h-full object-cover"
        />
      </div>
      <FlairContainer />
      <div className="container max-w-[720px] mx-auto relative z-10">
        <div className="text-center mb-lg">
          <h2 className="text-[1.5rem] font-heading font-bold leading-tight text-primary">Let's Diagnose Your Growth Engine</h2>
          <p className="text-secondary mt-2">
            5 questions • 60 seconds
          </p>
        </div>

        <ProgressBar 
          progress={progress} 
          currentStep={currentQuestion + 1} 
          totalSteps={quizData.length} 
        />

        <div id="questionContainer" ref={questionContainerRef}>
          <h2 className="text-2xl font-heading font-bold mb-lg text-center text-primary">{quizData[currentQuestion].question}</h2>
          {quizData[currentQuestion].options.map((opt, idx) => (
            <QuestionCard
              key={idx}
              index={idx}
              text={opt.text}
              isSelected={answers[currentQuestion] === idx}
              onSelect={() => selectAnswer(idx)}
            />
          ))}
        </div>

        <div className="flex justify-between mt-xl">
          <button
            className="px-8 py-[14px] rounded-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-transparent text-secondary hover:text-primary"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            ← Previous
          </button>
          <button
            className="px-8 py-[14px] rounded-sm font-semibold transition-all bg-accent text-white hover:bg-[#9a4a2d] hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => {
              if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                setShowEmailGate(true);
              }
            }}
          >
            {currentQuestion === quizData.length - 1 ? 'Complete Quiz →' : 'Next →'}
          </button>
        </div>

        <p className="text-center text-secondary text-[0.85rem] mt-md">No account required • Instant results</p>
      </div>

      {showEmailGate && (
        <EmailGateModal 
          onClose={() => setShowEmailGate(false)} 
          onSubmit={calculateResults} 
        />
      )}

      {showResults && result && (
        <ResultModal 
          result={result} 
          userEmail={userEmail} 
          onClose={() => setShowResults(false)} 
          onReset={resetQuiz} 
        />
      )}
    </section>
  );
};

export default Quiz;
