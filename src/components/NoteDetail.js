import React from 'react';
import PropTypes from 'prop-types';
import NoteDetailAction from './NoteDetailAction';
import { LocaleConsumer } from '../contexts/LocalContext';
import showFormattedDate from '../utils/formatDate';

export default function NoteDetail({
  id, title, createdAt, body, onDelete, onArchive, onRestore, isArchive,
}) {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <>
            <h2 className="text-5xl font-bold dark:text-slate-100">{title}</h2>
            <p className="text-xl pt-2 text-slate-400">{showFormattedDate(createdAt, locale === 'id' ? 'id-ID' : 'en-US')}</p>
            <p className="text-xl pt-8 dark:text-slate-100">{body}</p>
            <NoteDetailAction
              id={id}
              onDelete={onDelete}
              onArchive={onArchive}
              onRestore={onRestore}
              isArchive={isArchive}
            />
          </>
        )
      }
    </LocaleConsumer>
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
