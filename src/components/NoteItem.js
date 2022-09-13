import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormatedDate } from '../utils/local-data';

function NoteItem({
  id, title, createdAt, body,
}) {
  return (
    <div className="bg-yellow-100 flex flex-col overflow-hidden rounded-md p-4 shadow-sm">
      <h3 className="text-xl font-bold"><Link to={`/notes/${id}`}>{title}</Link></h3>
      <p className="text-slate-500">{showFormatedDate(createdAt)}</p>
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
