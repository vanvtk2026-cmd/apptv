
import React, { useState } from 'react';
import { Quiz } from '../components/Quiz';
import { PRACTICE_QUESTIONS } from '../constants';

export const Games: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  const startGame = () => {
    setIsPlaying(true);
    setResult(null);
  };

  const handleComplete = (score: number) => {
    setIsPlaying(false);
    setResult({ score, total: PRACTICE_QUESTIONS.length });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-purple-600 mb-4 flex items-center justify-center gap-3">
          <span>🎮</span> Thử thách vui nhộn
        </h2>
        {!isPlaying && !result && (
          <div className="bg-white p-10 rounded-3xl shadow-lg border-b-8 border-purple-200">
            <p className="text-xl text-gray-700 mb-8">Em đã sẵn sàng tham gia thử thách nhanh để thu thập thật nhiều điểm chưa?</p>
            <button
              onClick={startGame}
              className="bg-purple-500 text-white py-4 px-12 rounded-2xl font-bold text-2xl hover:bg-purple-600 hover:scale-110 transition-all border-b-4 border-purple-700"
            >
              BẮT ĐẦU CHƠI!
            </button>
          </div>
        )}
      </div>

      {isPlaying && (
        <Quiz questions={PRACTICE_QUESTIONS} onComplete={handleComplete} title="Trò chơi trắc nghiệm" />
      )}

      {result && (
        <div className="text-center bg-white p-10 rounded-3xl shadow-xl border-4 border-purple-300 transform animate-bounce-slow">
          <div className="text-7xl mb-4">🏆</div>
          <h3 className="text-3xl font-bold text-purple-600 mb-2">Chúc mừng em!</h3>
          <p className="text-2xl text-gray-700 mb-6">Em đạt được <span className="text-purple-500 font-black">{result.score * 10}</span> điểm!</p>
          <div className="p-4 bg-purple-50 rounded-2xl border-2 border-purple-100 mb-8 text-lg text-purple-800">
            {result.score === result.total 
              ? "Hoàn hảo! Em đúng là một thiên tài ngôn ngữ! 🌟" 
              : "Làm tốt lắm! Chút nữa thôi là đạt điểm tuyệt đối rồi. 👏"}
          </div>
          <button
            onClick={startGame}
            className="bg-purple-500 text-white py-3 px-10 rounded-2xl font-bold text-xl hover:bg-purple-600 transition-colors"
          >
            Chơi lại nhé!
          </button>
        </div>
      )}
    </div>
  );
};
