const localHost =
  'http://localhost:3000/';

export const login = async (loginData) => {

  return await fetch(`${localHost}api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData),
  });
}

export const getUser = async (user_id: string) => {

  TODO get token del cookie y pasarlo al body, con el user_id

  return await fetch(`${localHost}api/users/${user_id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(),
  });
}