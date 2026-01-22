
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-400 to-teal-400 text-white shadow-lg p-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="text-4xl">📚</span>
            <span>Luyện từ và câu – Lớp 3</span>
          </Link>
          <nav className="flex gap-4 mt-3 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {[
              { path: '/', label: 'Trang chủ' },
              { path: '/vocab', label: 'Từ mới' },
              { path: '/practice', label: 'Luyện tập' },
              { path: '/game', label: 'Trò chơi' },
              { path: '/test', label: 'Kiểm tra' },
              { path: '/weekly', label: 'Học theo tuần' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  location.pathname === link.path
                    ? 'bg-white text-blue-500 shadow-md'
                    : 'hover:bg-blue-500 text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        {children}
      </main>

      <footer className="bg-blue-100 p-6 text-center text-blue-700 font-medium">
        <p>© 2024 Luyện từ và câu - Kết nối tri thức với cuộc sống 🇻🇳</p>
      </footer>
    </div>
  );
};
