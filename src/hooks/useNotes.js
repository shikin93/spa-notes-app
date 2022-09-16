import { useEffect, useState } from 'react';
import { getActiveNotes } from '../utils/network-data';

export default function useNotes() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNoteData = async () => {
      const { data } = await getActiveNotes();

      setNotes(data);
      setLoading(false);
    };

    getNoteData();

    return () => {
      setNotes([]);
    };
  }, []);

  return [notes, loading];
}
