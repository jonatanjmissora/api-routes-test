"use client"
const localHost =
  'http://localhost:3000/';

//export const revalidate = 10;

export default function Login() {

  const handleLogin = async () => {

    const response = await fetch("https://digitalmoney.digitalhouse.com/api/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', charset: 'utf-8' },
      body: JSON.stringify({
        "email": "string",
        "password": "string"
      })
    })
    const r = await response.json()
    console.log("llego", r)

  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
