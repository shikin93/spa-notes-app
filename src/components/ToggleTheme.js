import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { ThemeConsumer } from '../contexts/ThemeContext';

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {
        ({ theme, toggleTheme }) => (
          <button type="button" onClick={toggleTheme}>{theme === 'dark' ? <BiMoon /> : <BiSun className="dark:text-slate-100" />}</button>
        )
      }
    </ThemeConsumer>
  );
}

export default ToggleTheme;
