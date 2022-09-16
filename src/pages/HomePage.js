import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingBar from '../components/LoadingBar';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import useNotes from '../hooks/useNotes';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const [notes, loading] = useNotes();

  const searchNote = notes.filter((note) => (
    note.title.toLowerCase().includes(keyword)
  ));

  const navigate = useNavigate();

  const onAdd = () => {
    navigate('/notes/new');
  };

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
      <h2 className="text-2xl font-bold">Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {(searchNote.length === 0) ? <div className="text-3xl text-center dark:text-slate-400">Tidak ada catatan</div> : <NoteList notes={searchNote} />}
      <button type="button" className="text-4xl p-2 bg-slate-100 rounded-full fixed bottom-10 right-5 dark:text-slate-600" onClick={onAdd}>
        <BiPlus />
      </button>
    </section>
  );
}
