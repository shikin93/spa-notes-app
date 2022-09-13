import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import Navgation from './components/Navigation';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="notes-app bg-slate-300 text-slate-600 min-h-screen">
      <header className="px-5 py-8">
        <Navgation />
      </header>
      <main className="p-5 max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
