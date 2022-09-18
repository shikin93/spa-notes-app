import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import {
  archiveNote, unarchiveNote, deleteNote, getNote,
} from '../utils/network-data';
import PageNotFound from './PageNotFound';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noteById, setNoteById] = useState(id);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const getNoteData = async () => {
      const { data } = await getNote(id);

      setNoteById(data);
      setInitializing(false);
    };

    getNoteData();

    return () => {
      setNoteById([]);
      setInitializing(true);
    };
  }, [id]);

  if (initializing) {
    return null;
  }

  if (noteById === null) {
    return <PageNotFound />;
  }

  const onDeleteHandler = async () => {
    await deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = async () => {
    await archiveNote(id);
    navigate('/');
  };

  const onRestoreHandler = async () => {
    await unarchiveNote(id);
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
