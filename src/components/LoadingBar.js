import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import { LocaleConsumer } from '../contexts/LocalContext';

export default function LoadingBar() {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <section className="flex flex-col justify-center items-center mt-60 mb-2 text-slate-400">
            <p className="text-6xl"><BiLoaderCircle /></p>
            <p>{locale === 'id' ? 'Memuat Halaman...' : 'Loading Page...'}</p>
          </section>
        )
      }
    </LocaleConsumer>
  );
}
