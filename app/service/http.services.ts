import { LoginTypes } from "../types/login.type";

const localHost =
  'http://localhost:3000/';

export const login = async (loginData: LoginTypes) => {

  return fetch(`${localHost}api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData),
  });
}

export const getUser = async (user_id: string) => {
  console.log("aca paso")
  return await fetch(`${localHost}api/users/${user_id}`);
}