import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';

export default function AddPage() {
  const navigate = useNavigate();
  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}
