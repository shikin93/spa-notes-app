import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocalContext';

export default function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);

  return (
    <input
      className="bg-slate-100 w-full p-2 rounded mb-12 mt-4 dark:text-slate-600"
      type="text"
      placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title...'}
      value={keyword}
      onChange={keywordChange}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
