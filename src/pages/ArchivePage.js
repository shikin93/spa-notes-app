import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/network-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import LoadingBar from '../components/LoadingBar';

export default function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const [archived, setArchived] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchArchive = archived.filter((note) => (
    note.title.toLowerCase().includes(keyword)
  ));

  useEffect(() => {
    const getArchiveData = async () => {
      const { data } = await getArchivedNotes();

      setArchived(data);
      setLoading(false);
    };

    getArchiveData();
  }, []);

  const onKeywordChangeHandler = (e) => {
    setKeyword(e.target.value);
    setSearchParams({ keyword: e.target.value });
  };

  if (loading) {
    return (
      <LoadingBar />
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold">Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {(archived.length === 0) ? <div className="text-3xl text-center">Tidak ada catatan</div> : <NoteList notes={searchArchive} />}
    </section>
  );
}
