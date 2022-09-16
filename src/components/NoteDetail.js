import React from 'react';
import PropTypes from 'prop-types';
import showFormatedDate from '../utils/formatDate';
import NoteDetailAction from './NoteDetailAction';

export default function NoteDetail({
  id, title, createdAt, body, onDelete, onArchive, onRestore, isArchive,
}) {
  return (
    <>
      <h2 className="text-5xl font-bold dark:text-slate-100">{title}</h2>
      <p className="text-xl pt-2 text-slate-400">{showFormatedDate(createdAt)}</p>
      <p className="text-xl pt-8 dark:text-slate-100">{body}</p>
      <NoteDetailAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onRestore={onRestore}
        isArchive={isArchive}
      />
    </>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
  isArchive: PropTypes.bool.isRequired,
};
