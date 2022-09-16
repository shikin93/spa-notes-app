import { useState, useEffect } from 'react';
import { getNote, getArchivedNotes } from '../utils/network-data';

export default function useDetail(id) {
  const [noteById, setNoteById] = useState([]);
  const [archiev, setArchive] = useState([]);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const getNoteData = async () => {
      const { data } = await getNote(id);

      setNoteById(data);
      setInitializing(false);
    };

    getNoteData();

    return () => {
      setNoteById([]);
      setInitializing(true);
    };
  }, []);

  useEffect(() => {
    async function getArchivedData() {
      const data = await getArchivedNotes();

      setArchive(data);
      setInitializing(false);
    }

    getArchivedData();
  }, []);

  return [noteById, initializing, archiev];
}
