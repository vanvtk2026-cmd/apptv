
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuButton: React.FC<{ label: string; icon: string; color: string; onClick: () => void }> = ({ label, icon, color, onClick }) => (
  <button
    onClick={onClick}
    className={`${color} text-white p-8 rounded-3xl shadow-lg hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-4 border-b-8 border-black/20`}
  >
    <span className="text-6xl">{icon}</span>
    <span className="text-2xl font-bold">{label}</span>
  </button>
);

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 drop-shadow-sm">
          Chào mừng em đến với góc học tập!
        </h1>
        <p className="text-xl text-gray-600 font-medium">Hãy chọn một hoạt động để bắt đầu ôn tập nhé.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MenuButton
          label="Học từ mới"
          icon="📖"
          color="bg-pink-400"
          onClick={() => navigate('/vocab')}
        />
        <MenuButton
          label="Luyện tập"
          icon="✏️"
          color="bg-orange-400"
          onClick={() => navigate('/practice')}
        />
        <MenuButton
          label="Trò chơi ôn tập"
          icon="🎮"
          color="bg-purple-400"
          onClick={() => navigate('/game')}
        />
        <MenuButton
          label="Kiểm tra nhanh"
          icon="⏱️"
          color="bg-teal-400"
          onClick={() => navigate('/test')}
        />
        <MenuButton
          label="Học theo tuần"
          icon="🗓️"
          color="bg-blue-400"
          onClick={() => navigate('/weekly')}
        />
      </div>

      <div className="mt-16 bg-white rounded-3xl p-8 shadow-inner border-2 border-dashed border-gray-300">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Gợi ý cho em:</h3>
        <ul className="text-lg text-gray-600 space-y-2">
          <li>🌟 Mỗi ngày dành 15 phút luyện tập sẽ giúp em học giỏi hơn.</li>
          <li>💡 Đừng ngần ngại làm lại bài kiểm tra để đạt điểm tối đa!</li>
          <li>🎯 Hãy đặt câu thật hay với những từ mới em vừa học được nhé.</li>
        </ul>
      </div>
    </div>
  );
};
