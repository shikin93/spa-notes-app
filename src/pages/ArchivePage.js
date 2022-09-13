import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

export default function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const archived = getArchivedNotes().filter((note) => (
    note.title.toLowerCase().includes(keyword)
  ));

  const onKeywordChangeHandler = (e) => {
    setKeyword(e.target.value);
    setSearchParams({ keyword });
  };

  return (
    <section>
      <h2 className="text-2xl font-bold">Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {(archived.length === 0) ? <div className="text-3xl text-center">Tidak ada catatan</div> : <NoteList notes={archived} />}
    </section>
  );
}
