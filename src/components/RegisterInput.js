import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocalContext';

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const onRegisterHandler = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    });
  };

  const { locale } = useContext(LocaleContext);

  return (
    <form onSubmit={onRegisterHandler}>
      <label className="text-lg" htmlFor="Name">
        {locale === 'id' ? 'Nama' : 'Name'}
        <input className="w-full py-1 rounded-md px-2 mb-2 dark:text-slate-600" type="text" placeholder="Jhon Doe" value={name} onChange={onNameChange} />
      </label>
      <label className="text-lg" htmlFor="email">
        Email
        <input className="w-full py-1 rounded-md px-2 mb-2 dark:text-slate-600" type="email" placeholder="example@mail.com" value={email} onChange={onEmailChange} />
      </label>
      <label className="text-lg" htmlFor="Password">
        {locale === 'id' ? 'Kata sandi' : 'Password'}
        <input className="w-full py-1 rounded-md px-2 mb-2 dark:text-slate-600" type="password" value={password} onChange={onPasswordChange} />
      </label>
      <button className="w-full text-xl bg-slate-600 hover:bg-slate-500 text-slate-100 py-2 mt-4 mb-2 rounded-md" type="submit">{locale === 'id' ? 'Daftar' : 'Register'}</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
