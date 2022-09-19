import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  BiArchive, BiLogOut, BiMenu,
} from 'react-icons/bi';
import { Menu } from '@headlessui/react';
import ToggleTheme from './ToggleTheme';
import ToggleLocale from './ToggleLocale';
import LocaleContext from '../contexts/LocalContext';

export default function Navigation({ logout, name }) {
  const { locale } = useContext(LocaleContext);

  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-3xl font-bold"><Link to="/">{locale === 'id' ? 'Aplikasi Notes' : 'Notes App'}</Link></h1>
      <div className="flex items-center gap-4 text-xl">
        <Menu>
          <ToggleLocale />
          <ToggleTheme />
          <div className="hidden md:flex">
            <Link className="flex items-center gap-2 font-bold hover:bg-slate-200 py-1 px-2 rounded-md dark:hover:bg-slate-800" to="/archives">
              <BiArchive />
              {locale === 'id' ? 'Arsip' : 'Archived'}
            </Link>
            <button className="flex items-center gap-2 font-bold hover:bg-slate-200 py-1 px-2 rounded-md dark:hover:bg-slate-800" type="button" onClick={logout}>
              <BiLogOut />
              {name}
            </button>
          </div>
          <Menu.Button>
            <BiMenu className="text-3xl -m-1 md:hidden" />
          </Menu.Button>
          <Menu.Items className="flex flex-col absolute bg-slate-100 dark:bg-slate-700 rounded-md p-2 right-5 top-20 w-56 text-sm">
            <Menu.Item>
              {({ active }) => (
                <Link className={`${active} flex items-center gap-2 font-bold hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800`} to="/archives">
                  <BiArchive />
                  {locale === 'id' ? 'Arsip' : 'Archived'}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button className={`${active} flex items-center gap-2 font-bold hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800`} type="button" onClick={logout}>
                  <BiLogOut />
                  {name}
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
