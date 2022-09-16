import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import RegisterInput from '../components/RegisterInput';

export default function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Isi form untuk mendaftar akun</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {'Kamu sudah punya akun? '}
        <Link className="hover:underline" to="/">Masuk di sini</Link>
      </p>
    </section>
  );
}
