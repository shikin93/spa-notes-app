import React, { useState } from 'react';
import { BiPlus, BiLoaderCircle } from 'react-icons/bi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import useNotes from '../hooks/useNotes';
import { getActiveNotes } from '../utils/network-data';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const [notes, loading] = useNotes();

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
      <section className="flex justify-center mt-60">
        <p className="text-6xl"><BiLoaderCircle /></p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold">Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {(notes.length === 0) ? <div className="text-3xl text-center">Tidak ada catatan</div> : <NoteList notes={getActiveNotes} />}
      <button type="button" className="text-4xl p-2 bg-slate-100 rounded-full fixed bottom-10 right-5" onClick={onAdd}>
        <BiPlus />
      </button>
    </section>
  );
}
