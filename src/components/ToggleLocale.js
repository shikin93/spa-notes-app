import React, { useContext } from 'react';
import { MdGTranslate } from 'react-icons/md';
import LocaleContext from '../contexts/LocalContext';

function ToggleLocale() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <button
      type="button"
      onClick={toggleLocale}
    >
      {locale === 'id' ? <MdGTranslate /> : <MdGTranslate className="text-orange-600" />}
    </button>
  );
}

export default ToggleLocale;
