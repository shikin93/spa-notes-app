import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';

export default function HomePage() {
  const notes = getActiveNotes();
  const navigate = useNavigate();

  const onAdd = () => {
    navigate('/notes/new');
  };

  return (
    <section>
      {(notes.length === 0) ? <div className="text-3xl text-center">Tidak ada catatan</div> : <NoteList notes={notes} />}
      <button type="button" className="text-4xl p-2 bg-slate-100 rounded-full fixed bottom-10 right-5" onClick={onAdd}>
        <BiPlus />
      </button>
    </section>
  );
}
