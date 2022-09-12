import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/local-data';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const onChangeTitleHandler = (e) => {
    setTitle(
      e.target.value.slice(0, 50),
    );
  };

  const onChangeBodyHandler = (e) => {
    setBody(
      e.target.value,
    );
  };

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
