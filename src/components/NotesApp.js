import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArsipPage from '../pages/ArchivePage';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import Navgation from './Navigation';

function NotesApp() {
  return (
    <div className="notes-app bg-slate-300 text-slate-600 min-h-screen">
      <header className="px-5 py-8">
        <Navgation />
      </header>
      <main className="p-5 max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArsipPage />} />
          <Route path="/note/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp;
