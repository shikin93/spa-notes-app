import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-3xl font-bold"><Link to="/">Notes App</Link></h1>
      <Link className="text-xl font-bold hover:bg-slate-200 py-1 px-2 rounded-lg" to="/archives">Arsip</Link>
    </nav>
  );
}

export default Navigation;
