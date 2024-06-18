'use client';
import { login } from '@/app/services/auth.services';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginData = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    try {
      const resp = await login(loginData);
      if (resp.error) {
        throw new Error(resp.error);
      }
      setError('');
      router.push('/dashboard');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center items-center gap-3">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="mail"
        name="email"
        defaultValue="jonatanjmissora@gmail.com"
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        defaultValue="654321"
      />
      <button>Enviar</button>
      {error}
    </form>
  );
}
