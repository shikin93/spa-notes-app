import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import ToggleTheme from './ToggleTheme';

export default function Navigation({ logout, name }) {
  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-3xl font-bold dark:text-slate-100"><Link to="/">Aplikasi kontak</Link></h1>
      <div className="flex items-center gap-2">
        <Link className="text-xl font-bold hover:bg-slate-200 py-1 px-2 rounded-lg dark:text-slate-100 dark:hover:bg-slate-800" to="/archives">Arsip</Link>
        <button className="flex items-center pt-0.5 gap-1 dark:text-slate-100" type="button" onClick={logout} name={name}>
          <BiLogOut className="text-xl" />
          {name}
        </button>
        <ToggleTheme />
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
