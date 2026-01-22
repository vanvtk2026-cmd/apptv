
import React, { useState } from 'react';
import { PRACTICE_QUESTIONS } from '../constants';
import { Quiz } from '../components/Quiz';

export const Practice: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleComplete = (score: number) => {
    setFinalScore(score);
    setShowResult(true);
  };

  const reset = () => {
    setShowResult(false);
    setFinalScore(0);
  };

  if (showResult) {
    return (
      <div className="text-center bg-white p-10 rounded-3xl shadow-xl max-w-lg mx-auto border-4 border-orange-200">
        <h2 className="text-4xl mb-6">🏁</h2>
        <h3 className="text-3xl font-bold text-orange-600 mb-4">Hoàn thành luyện tập!</h3>
        <p className="text-xl text-gray-700 mb-6">Em đã đúng <span className="text-orange-500 font-bold">{finalScore} / {PRACTICE_QUESTIONS.length}</span> câu.</p>
        <div className="text-4xl mb-8">
          {finalScore === PRACTICE_QUESTIONS.length ? '🥇 Tuyệt vời!' : finalScore > 5 ? '🥈 Khá lắm!' : '🥉 Cần cố gắng hơn nhé!'}
        </div>
        <button
          onClick={reset}
          className="bg-orange-500 text-white py-3 px-8 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-colors"
        >
          Làm lại bài này
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-600">Góc luyện tập</h2>
        <p className="text-gray-600 mt-2">Giúp em rèn luyện kỹ năng đặt câu và dùng từ.</p>
      </div>
      <Quiz questions={PRACTICE_QUESTIONS} onComplete={handleComplete} />
    </div>
  );
};
