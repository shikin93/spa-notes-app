import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';
import useInput from '../hooks/useInput';

export default function AddPage() {
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote({
      title,
      body,
    });

    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <NoteInput
        title={title}
        body={body}
        onTitle={onChangeTitleHandler}
        onBody={onChangeBodyHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}
