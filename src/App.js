import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import Navigation from './components/Navigation';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const onLoginSuccessHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  useEffect(() => {
    const dataToken = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setInitializing(false);
    };
    dataToken();

    return () => {
      setAuthedUser(null);
      setInitializing(true);
    };
  }, []);

  const onLogoutHandler = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="notes-app bg-slate-300 text-slate-600 min-h-screen">
        <header className="px-5 py-8">
          <h1 className="text-3xl font-bold">Aplikasi kontak</h1>
        </header>
        <main className="p-5 max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccessHandler} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="notes-app bg-slate-300 text-slate-600 min-h-screen">
      <header className="px-5 py-8">
        <Navigation logout={onLogoutHandler} name={authedUser.name} />
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
