import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

export default function NoteDetailAction({
  id, onDelete, onArchive, onRestore, isArchive,
}) {
  return (
    <div className="flex gap-4 fixed bottom-10 right-5">
      {(!isArchive) ? (
        <>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-yellow-300 dark:text-slate-600 tooltip" type="button" onClick={() => onArchive(id)}>
            <BiArchiveIn />
            <span className="tooltiptext bg-slate-400 text-slate-100 px-2">Arsipkan</span>
          </button>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-red-300 dark:text-slate-600 tooltip" type="button" onClick={() => onDelete(id)}>
            <BiTrash />
            <span className="tooltiptext bg-slate-400 text-slate-100 px-2">Hapus</span>
          </button>
        </>
      ) : (
        <>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-blue-300 dark:text-slate-600 tooltip" type="button" onClick={() => onRestore(id)}>
            <BiArchiveOut />
            <span className="tooltiptext bg-slate-400 text-slate-100 px-2">Aktifkan</span>
          </button>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-red-300 dark:text-slate-600 tooltip" type="button" onClick={() => onDelete(id)}>
            <BiTrash />
            <span className="tooltiptext bg-slate-400 text-slate-100 px-2">Hapus</span>
          </button>
        </>
      )}
    </div>
  );
}

NoteDetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
  isArchive: PropTypes.bool.isRequired,
};
