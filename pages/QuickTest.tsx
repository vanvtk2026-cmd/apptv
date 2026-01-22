
import React, { useState, useMemo } from 'react';
import { Quiz } from '../components/Quiz';
import { PRACTICE_QUESTIONS } from '../constants';

export const QuickTest: React.FC = () => {
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Take 10 random questions (or all if fewer than 10)
  const testQuestions = useMemo(() => {
    return [...PRACTICE_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [completed === false]);

  const handleComplete = (finalScore: number) => {
    setScore(finalScore);
    setCompleted(true);
  };

  const restart = () => {
    setCompleted(false);
    setScore(0);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-teal-600">Kiểm tra nhanh</h2>
        <p className="text-gray-600">Ôn tập tổng hợp kiến thức trong 10 câu hỏi ngẫu nhiên.</p>
      </div>

      {!completed ? (
        <Quiz questions={testQuestions} onComplete={handleComplete} showFeedback={true} />
      ) : (
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center border-4 border-teal-200">
          <h3 className="text-3xl font-bold text-teal-600 mb-6">Kết quả kiểm tra</h3>
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 rounded-full ${i < score ? 'bg-teal-500' : 'bg-gray-200'}`}
              />
            ))}
          </div>
          <p className="text-2xl mb-8">
            Số câu đúng: <span className="font-bold text-teal-600">{score} / {testQuestions.length}</span>
          </p>
          <div className="text-lg text-gray-600 mb-8 italic">
            {score >= 8 ? "Rất xuất sắc! Em nắm vững kiến thức rồi đấy." : "Em làm khá tốt, hãy ôn tập thêm các từ chỉ đặc điểm nhé!"}
          </div>
          <button
            onClick={restart}
            className="bg-teal-500 text-white py-3 px-10 rounded-2xl font-bold text-xl hover:bg-teal-600 transition-colors"
          >
            Làm bài kiểm tra mới
          </button>
        </div>
      )}
    </div>
  );
};
