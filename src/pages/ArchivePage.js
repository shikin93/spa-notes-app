import React from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';

export default function ArchivePage() {
  const archived = getArchivedNotes();
  return (
    <div>
      {(archived.length === 0) ? <div className="text-3xl text-center">Arsip kosong</div> : <NoteList notes={archived} />}
    </div>
  );
}
