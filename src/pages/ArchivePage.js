import React, { useState, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import LoadingBar from '../components/LoadingBar';
import LocaleContext from '../contexts/LocalContext';
import { getArchivedNotes } from '../utils/network-data';

export default function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const [archived, setArchived] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNoteData = async () => {
      const { data } = await getArchivedNotes();

      setArchived(data);
      setLoading(false);
    };

    getNoteData();

    return () => {
      setArchived([]);
      setLoading(true);
    };
  }, []);

  const searchArchive = archived.filter((note) => (
    note.title.toLowerCase().includes(keyword)
  ));

  const onKeywordChangeHandler = (e) => {
    setKeyword(e.target.value);
    setSearchParams({ keyword: e.target.value });
  };

  const { locale } = useContext(LocaleContext);

  if (loading) {
    return (
      <LoadingBar />
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold dark:text-slate-100">{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {(searchArchive.length === 0) ? <div className="text-3xl text-center dark:text-slate-400">Tidak ada catatan</div> : <NoteList notes={searchArchive} />}
    </section>
  );
}
