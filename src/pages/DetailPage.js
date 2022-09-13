import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/local-data';
import PageNotFound from './PageNotFound';

export default function DetailPage() {
  const { id } = useParams();
  const noteById = getNote(id);
  const navigate = useNavigate();

  if (noteById === undefined) {
    return <PageNotFound />;
  }

  const onDeleteHandler = () => {
    deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = () => {
    archiveNote(id);
    navigate('/');
  };

  const onRestoreHandler = () => {
    unarchiveNote(id);
    navigate('/');
  };

  return (
    <section>
      <NoteDetail
        id={id}
        title={noteById.title}
        createdAt={noteById.createdAt}
        body={noteById.body}
        isArchive={noteById.archived}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        onRestore={onRestoreHandler}
      />
    </section>
  );
}
