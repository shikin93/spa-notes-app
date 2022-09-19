import React, { useEffect, useState, useMemo } from 'react';
import {
  Routes, Route, Link, useNavigate,
} from 'react-router-dom';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import Navigation from './components/Navigation';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import ToggleTheme from './components/ToggleTheme';
import { ThemeProvider } from './contexts/ThemeContext';
import LocaleContext from './contexts/LocalContext';
import ToggleLocale from './components/ToggleLocale';
import Footer from './components/Footer';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.theme === 'dark');
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const navigate = useNavigate();

  const onLoginSuccessHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
    navigate('/');
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

  useEffect(() => {
    const html = window.document.documentElement;
    const prevTheme = theme ? 'light' : 'dark';
    html.classList.remove(prevTheme);

    const nextTheme = theme ? 'dark' : 'light';
    html.classList.add(nextTheme);

    localStorage.setItem('theme', nextTheme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const onLogoutHandler = () => {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/');
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const toggleLocale = () => {
    setLocale(() => {
      const newLocal = locale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocal);
      return newLocal;
    });
  };

  const localeContextValue = useMemo(() => ({
    locale, toggleLocale,
  }), [locale]);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className="notes-app bg-slate-300 text-slate-600 min-h-screen dark:bg-slate-900 dark:text-slate-100">
            <header className="px-5 py-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold"><Link to="/">{locale === 'id' ? 'Aplikasi Notes' : 'NotesApp'}</Link></h1>
              <div className="flex gap-4 text-2xl">
                <ToggleLocale />
                <ToggleTheme />
              </div>
            </header>
            <main className="p-5 max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
              <Routes>
                <Route exact path="/*" element={<LoginPage loginSuccess={onLoginSuccessHandler} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className="notes-app bg-slate-300 text-slate-600 dark:bg-slate-900 dark:text-slate-100">
          <header className="px-5 py-8 mb-10 border-b border-b-slate-200 dark:border-b-slate-700">
            <Navigation logout={onLogoutHandler} name={authedUser.name} />
          </header>
          <main className="p-5 max-w-full min-h-screen md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/archives" element={<ArchivePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/notes/new" element={<AddPage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </main>
          <footer className="font-bold text-xs uppercase px-5 py-8 border-t border-t-slate-200 dark:border-t-slate-700">
            <Footer />
          </footer>
        </div>
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
