import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocalContext';

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <input
            className="bg-slate-100 w-full p-2 rounded mb-12 mt-4 dark:text-slate-600"
            type="text"
            placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title...'}
            value={keyword}
            onChange={keywordChange}
          />
        )
      }
    </LocaleConsumer>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
