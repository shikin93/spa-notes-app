import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import ToggleTheme from './ToggleTheme';
import ToggleLocale from './ToggleLocale';
import { LocaleConsumer } from '../contexts/LocalContext';

export default function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <nav className="flex items-center justify-between">
            <h1 className="text-3xl font-bold"><Link to="/">{locale === 'id' ? 'Aplikasi Notes' : 'NotesApp'}</Link></h1>
            <div className="flex items-center gap-4 text-xl">
              <Link className="font-bold hover:bg-slate-200 py-1 px-2 rounded-lg dark:hover:bg-slate-800" to="/archives">{locale === 'id' ? 'Arsip' : 'Archived'}</Link>
              <ToggleLocale />
              <ToggleTheme />
              <button className="flex items-center pt-0.5 gap-1" type="button" onClick={logout}>
                <BiLogOut />
                {name}
              </button>
            </div>
          </nav>
        )
      }
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
