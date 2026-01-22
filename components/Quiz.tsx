
import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
  showFeedback?: boolean;
  title?: string;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete, showFeedback = true, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [completed, setCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrect = answer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase();
    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedbackMsg('Giỏi quá! Em đã trả lời đúng rồi! 🎉');
    } else {
      setFeedbackMsg(`Tiếc quá, đáp án đúng là: ${currentQuestion.answer}. Cố gắng câu sau nhé! 💪`);
    }

    if (!showFeedback) {
      setTimeout(() => nextQuestion(), 800);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      setFeedbackMsg('');
    } else {
      setCompleted(true);
      onComplete(score + (selectedAnswer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase() ? 1 : 0));
    }
  };

  if (completed) return null;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border-4 border-blue-200 max-w-2xl mx-auto transform transition-all">
      {title && <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">{title}</h2>}
      
      <div className="flex justify-between mb-4">
        <span className="text-gray-500 font-bold">Câu hỏi {currentIndex + 1} / {questions.length}</span>
        <span className="text-blue-500 font-bold">Điểm: {score}</span>
      </div>

      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">{currentQuestion.question}</h3>

        {currentQuestion.type === 'multiple-choice' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options?.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={`p-4 text-left text-lg font-medium rounded-2xl border-2 transition-all ${
                  isAnswered
                    ? option === currentQuestion.answer
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : option === selectedAnswer
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-gray-50 border-gray-200 text-gray-400'
                    : 'bg-blue-50 border-blue-200 hover:border-blue-500 hover:bg-blue-100 text-blue-800'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === 'fill-blank' && (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={isAnswered}
              placeholder="Nhập câu trả lời của em..."
              className="p-4 text-lg border-2 border-blue-200 rounded-2xl focus:border-blue-500 outline-none"
              onKeyDown={(e) => e.key === 'Enter' && handleAnswer(selectedAnswer)}
            />
            {!isAnswered && (
              <button
                onClick={() => handleAnswer(selectedAnswer)}
                className="bg-blue-500 text-white py-3 px-8 rounded-2xl font-bold hover:bg-blue-600 self-end transition-colors"
              >
                Kiểm tra
              </button>
            )}
          </div>
        )}
      </div>

      {isAnswered && showFeedback && (
        <div className={`p-4 rounded-2xl mb-6 text-center text-lg font-bold animate-bounce ${
          selectedAnswer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase()
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}>
          {feedbackMsg}
          <button
            onClick={nextQuestion}
            className="block mt-4 mx-auto bg-gray-800 text-white py-2 px-6 rounded-xl hover:bg-black transition-colors"
          >
            Tiếp tục ➔
          </button>
        </div>
      )}
    </div>
  );
};
