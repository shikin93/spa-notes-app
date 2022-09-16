import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';

export default function LoginPage({ loginSuccess }) {
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section>
      <h2 className="text-2xl mb-4 font-bold">Login dulu kuy..</h2>
      <LoginInput login={onLogin} />
      <p>
        {'Belum punya akun? '}
        <Link className="underline hover:text-blue" to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
