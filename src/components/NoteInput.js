import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BiCheck } from 'react-icons/bi';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocalContext';

export default function NoteInput({ addNote }) {
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote({
      title,
      body,
    });
  };

  const { locale } = useContext(LocaleContext);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input className="w-full p-4 bg-slate-100 rounded dark:text-slate-600" type="text" name="title" id="title" placeholder={locale === 'id' ? 'Judul Catatan' : 'Note Title'} value={title} onChange={onChangeTitleHandler} />
        <textarea className="w-full h-96 bg-slate-100 mt-4 p-4 rounded dark:text-slate-600" placeholder={locale === 'id' ? 'Isi catatan kamu disini.....' : 'Input your note here.....'} value={body} onChange={onChangeBodyHandler} />
        <div>
          <button className="text-4xl bg-slate-100 p-2 rounded-full fixed bottom-10 right-5 hover:bg-green-300 dark:text-slate-600" type="submit">
            <BiCheck />
          </button>
        </div>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
