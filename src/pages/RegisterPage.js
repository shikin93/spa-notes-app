import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import RegisterInput from '../components/RegisterInput';
import { LocaleConsumer } from '../contexts/LocalContext';

export default function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <section>
            <h2 className="text-4xl font-bold mb-4 text-center">{locale === 'id' ? 'Daftar' : 'Register'}</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>
              {locale === 'id' ? 'Kamu sudah punya akun? ' : 'Already have an account? '}
              <Link className="hover:underline" to="/">{locale === 'id' ? 'Masuk disini' : 'Login here'}</Link>
            </p>
          </section>
        )
      }
    </LocaleConsumer>
  );
}
