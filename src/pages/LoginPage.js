import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocalContext';

export default function LoginPage({ loginSuccess }) {
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <section>
            <h2 className="text-2xl mb-4 font-bold">{locale === 'id' ? 'Login dulu kuy..' : 'Login to use app'}</h2>
            <LoginInput login={onLogin} />
            <p>
              {locale === 'id' ? 'Belum punya akun? ' : 'Don\'t have an account? '}
              <Link className="hover:underline" to="/register">{locale === 'id' ? 'Daftar disini' : 'Register here'}</Link>
            </p>
          </section>
        )
      }
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
