import { useState } from 'react';
import { quizData, resultsData } from '../data/quizData';
import type { QuizResult } from '../data/quizData';

export const useQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [userEmail, setUserEmail] = useState("");

  const selectAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);

    if (currentQuestion < quizData.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 400);
    } else {
      setTimeout(() => setShowEmailGate(true), 400);
    }
  };

  const calculateResults = (email: string) => {
    setUserEmail(email);
    
    let totalPoints = 0;
    const maxPoints = quizData.length * 4;

    answers.forEach((answerIndex, questionIndex) => {
      totalPoints += quizData[questionIndex].options[answerIndex].points;
    });

    const percentage = totalPoints / maxPoints;
    let resultIndex;

    if (percentage <= 0.4) resultIndex = 0;
    else if (percentage <= 0.6) resultIndex = 1;
    else if (percentage <= 0.8) resultIndex = 2;
    else resultIndex = 3;

    setResult(resultsData[resultIndex]);
    setShowEmailGate(false);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowEmailGate(false);
    setShowResults(false);
    setResult(null);
  };

  return {
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
  };
};
