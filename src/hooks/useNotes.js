import { useEffect, useState } from 'react';
import { getActiveNotes } from '../utils/network-data';

export default function useNotes() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getActiveNotes().then(() => {
      setNotes(notes);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, []);

  return [notes, loading];
}
