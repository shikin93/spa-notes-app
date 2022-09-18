import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import showFormattedDate from '../utils/formatDate';
import LocaleContext from '../contexts/LocalContext';

function NoteItem({
  id, title, createdAt, body,
}) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="bg-yellow-100 flex flex-col overflow-hidden rounded-md p-4 shadow-sm dark:text-slate-600">
      <h3 className="text-xl font-bold"><Link to={`/notes/${id}`}>{title}</Link></h3>
      <p className="text-slate-400">{showFormattedDate(createdAt, locale === 'id' ? 'id-ID' : 'en-US')}</p>
      <div className="pt-4">
        <p>{body}</p>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
