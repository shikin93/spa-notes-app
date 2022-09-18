import React from 'react';
import { LocaleConsumer } from '../contexts/LocalContext';

export default function PageNotFound() {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <section className="text-center">
            <h2 className="text-9xl text-red-400 font-bold">404</h2>
            <p className="pt-4 text-xl">{locale === 'id' ? 'Halaman tidak ditemukan' : 'Page not found'}</p>
          </section>
        )
      }
    </LocaleConsumer>
  );
}
