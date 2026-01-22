
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { VocabList } from './pages/VocabList';
import { Practice } from './pages/Practice';
import { Games } from './pages/Games';
import { QuickTest } from './pages/QuickTest';
import { WeeklyLessons } from './pages/WeeklyLessons';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vocab" element={<VocabList />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/game" element={<Games />} />
          <Route path="/test" element={<QuickTest />} />
          <Route path="/weekly" element={<WeeklyLessons />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
