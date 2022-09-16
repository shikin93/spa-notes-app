import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash, BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

export default function NoteDetailAction({
  id, onDelete, onArchive, onRestore, isArchive,
}) {
  return (
    <div className="flex gap-4 absolute bottom-10 right-5">
      {(!isArchive) ? (
        <>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-red-300 dark:text-slate-600" type="button" onClick={() => onDelete(id)}>
            <BiTrash />
          </button>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-yellow-300 dark:text-slate-600" type="button" onClick={() => onArchive(id)}>
            <BiArchiveIn />
          </button>
        </>
      ) : (
        <>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-red-300 dark:text-slate-600" type="button" onClick={() => onDelete(id)}>
            <BiTrash />
          </button>
          <button className="bg-slate-100 p-4 rounded-full text-2xl hover:bg-blue-300 dark:text-slate-600" type="button" onClick={() => onRestore(id)}>
            <BiArchiveOut />
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
