import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingBar from '../components/LoadingBar';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../contexts/LocalContext';
import { getActiveNotes } from '../utils/network-data';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNoteData = async () => {
      const { data } = await getActiveNotes();

      setNotes(data);
      setLoading(false);
    };

    getNoteData();

    return () => {
      setNotes([]);
      setLoading(true);
    };
  }, []);

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
    <LocaleContext.Consumer>
      {
        ({ locale }) => (
          <section>
            <h2 className="text-2xl font-bold">{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            {(searchNote.length === 0) ? <div className="text-3xl text-center dark:text-slate-400">{locale === 'id' ? 'Catatan tidak ditemukan' : 'Notes not found'}</div> : <NoteList notes={searchNote} />}
            <button type="button" className="text-4xl p-2 bg-slate-100 rounded-full fixed bottom-10 right-5 dark:text-slate-600" onClick={onAdd}>
              <BiPlus />
            </button>
          </section>
        )
      }
    </LocaleContext.Consumer>
  );
}
