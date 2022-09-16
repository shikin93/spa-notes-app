import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

export default function LoadingBar() {
  return (
    <section className="flex flex-col justify-center items-center mt-60 mb-2 text-slate-400">
      <p className="text-6xl"><BiLoaderCircle /></p>
      <p>Memuat Halaman...</p>
    </section>
  );
}
