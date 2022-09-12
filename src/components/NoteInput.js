import React from 'react';
import PropTypes from 'prop-types';
import { BiCheck } from 'react-icons/bi';

export default function NoteInput({
  title, body, onTitle, onBody, onSubmit,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="w-full p-4 bg-slate-100 rounded" type="text" name="title" id="title" placeholder="Judul catatan" value={title} onChange={onTitle} />
        <textarea className="w-full h-96 bg-slate-100 mt-4 p-4 rounded" placeholder="Isi catatan kamu disini....." value={body} onChange={onBody} />
        <div>
          <button className="text-4xl bg-slate-100 p-2 rounded-full fixed bottom-10 right-5 hover:bg-green-300" type="submit">
            <BiCheck />
          </button>
        </div>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onTitle: PropTypes.func.isRequired,
  onBody: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
