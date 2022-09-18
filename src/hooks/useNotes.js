import { useEffect, useState } from 'react';
import { getActiveNotes, getArchivedNotes } from '../utils/network-data';

export default function useNotes() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [archived, setArchived] = useState([]);

  useEffect(() => {
    const getNoteData = async () => {
      const { data } = await getActiveNotes();
      const { dataArchived } = await getArchivedNotes();

      setNotes(data);
      setArchived(dataArchived);
      setLoading(false);
    };

    getNoteData();

    return () => {
      setNotes([]);
      setLoading(true);
    };
  }, []);

  return [notes, archived, loading];
}
