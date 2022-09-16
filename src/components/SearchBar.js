import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="bg-slate-100 w-full p-2 rounded mb-12 mt-4 dark:text-slate-600"
      type="text"
      placeholder="Cari berdasarkan judul..."
      value={keyword}
      onChange={keywordChange}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
