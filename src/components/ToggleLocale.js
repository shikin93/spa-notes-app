import React from 'react';
import { MdGTranslate } from 'react-icons/md';
import { LocaleConsumer } from '../contexts/LocalContext';

function ToggleLocale() {
  return (
    <LocaleConsumer>
      {
        ({ locale, toggleLocale }) => (
          <button
            type="button"
            onClick={toggleLocale}
          >
            {locale === 'id' ? <MdGTranslate /> : <MdGTranslate className="text-orange-600" />}
          </button>
        )
      }
    </LocaleConsumer>
  );
}

export default ToggleLocale;
