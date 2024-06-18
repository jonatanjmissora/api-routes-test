const localHost =
  'http://localhost:3000';

type LoginDataTypes = {
    email: string;
    password: string;
}

export const login = async (loginData: LoginDataTypes) => {
  const response = await fetch(`${localHost}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    }),
  });
  const data = await response.json();

  return data;
};
