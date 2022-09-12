import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';

export default function HomePage() {
  const notes = getActiveNotes();

  return (
    <section>
      {(notes.length === 0) ? <div className="text-3xl text-center">Tidak ada catatan</div> : <NoteList notes={notes} />}
    </section>
  );
}
