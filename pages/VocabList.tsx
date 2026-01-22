
import React, { useState } from 'react';
import { CategoryType } from '../types';
import { VOCABULARY } from '../constants';

export const VocabList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryType>(CategoryType.NOUN);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Kho tàng từ ngữ của em</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.values(CategoryType).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-3 rounded-2xl font-bold text-lg transition-all ${
              activeTab === cat
                ? 'bg-pink-500 text-white shadow-lg scale-105'
                : 'bg-white text-pink-500 hover:bg-pink-50 border-2 border-pink-100'
            }`}
          >
            Từ chỉ {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VOCABULARY[activeTab].map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-pink-50">
            <img src={item.imageUrl} alt={item.word} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-pink-600 mb-2">{item.word}</h4>
              <p className="text-gray-600 mb-3 font-medium">
                <span className="text-pink-400 font-bold">Ý nghĩa:</span> {item.example}
              </p>
              <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 italic text-gray-700">
                "{item.sentence}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
