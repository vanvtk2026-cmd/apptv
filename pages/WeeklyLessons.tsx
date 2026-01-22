
import React, { useState } from 'react';
import { WEEKLY_LESSONS } from '../constants';
import { Quiz } from '../components/Quiz';

export const WeeklyLessons: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleWeekClick = (week: number) => {
    setSelectedWeek(week);
    setQuizFinished(false);
  };

  const currentWeek = WEEKLY_LESSONS.find(w => w.week === selectedWeek);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Lộ trình học theo tuần</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {WEEKLY_LESSONS.map((w) => (
          <button
            key={w.week}
            onClick={() => handleWeekClick(w.week)}
            className={`p-6 rounded-3xl text-left transition-all border-b-4 ${
              selectedWeek === w.week
                ? 'bg-blue-500 text-white border-blue-700 shadow-inner'
                : 'bg-white text-blue-600 border-blue-100 hover:bg-blue-50'
            }`}
          >
            <div className="text-sm font-bold opacity-80 uppercase">Tuần {w.week}</div>
            <div className="text-xl font-bold mt-1">{w.title}</div>
          </button>
        ))}
      </div>

      {currentWeek && (
        <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in border-2 border-blue-50">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">📖 Nội dung Tuần {currentWeek.week}</h3>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">{currentWeek.content}</p>
          
          <div className="border-t-2 border-blue-50 pt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>✍️</span> Bài tập rèn luyện
            </h4>
            
            {!quizFinished ? (
              <Quiz 
                questions={currentWeek.exercises} 
                onComplete={() => setQuizFinished(true)} 
                title={`Bài tập Tuần ${currentWeek.week}`} 
              />
            ) : (
              <div className="text-center p-8 bg-green-50 rounded-2xl border-2 border-green-200">
                <p className="text-2xl font-bold text-green-700">Chúc mừng! Em đã hoàn thành bài tập tuần này! 🎉</p>
                <p className="text-gray-600 mt-2">Hẹn gặp em ở tuần tiếp theo nhé.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {!selectedWeek && (
        <div className="text-center py-20 bg-white/50 rounded-3xl border-4 border-dashed border-gray-200">
          <p className="text-2xl text-gray-400 font-bold italic">Vui lòng chọn một tuần để bắt đầu học!</p>
        </div>
      )}
    </div>
  );
};
