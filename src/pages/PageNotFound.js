import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocalContext';

export default function PageNotFound() {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="text-center">
      <h2 className="text-9xl text-red-400 font-bold">404</h2>
      <p className="pt-4 text-xl">{locale === 'id' ? 'Halaman tidak ditemukan' : 'Page not found'}</p>
    </section>
  );
}
