import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocalContext';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  const { locale } = useContext(LocaleContext);

  return (
    <form onSubmit={onSubmitHandler}>
      <label className="text-lg" htmlFor="email">
        Email
        <input className="w-full p-2 mb-2 rounded-md dark:text-slate-600" type="email" placeholder="example@mail.com" value={email} onChange={onEmailChange} />
      </label>
      <label className="text-lg" htmlFor="password">
        {locale === 'id' ? 'Kata sandi' : 'Password'}
        <input className="w-full p-2 mb-2 rounded-md dark:text-slate-600" type="password" value={password} onChange={onPasswordChange} />
      </label>
      <button className="w-full bg-slate-600 text-slate-100 py-2 mt-4 rounded-md text-xl mb-2" type="submit">{locale === 'id' ? 'Masuk' : 'Login'}</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
