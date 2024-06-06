'use client';

import { login } from "@/app/service/http.services";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginErro] = useState("");
  const [loginResp, setLoginResp] = useState("");

  const handleClick = async () => {
    setLoginErro("")
    setLoginResp("")
    const loginData = { email, password }
    try {
      const resp = await login(loginData)
      const { token, error } = await resp.json();
      if (error) setLoginErro(error)
      else {
        setLoginResp(token.token)
      }

    } catch (e) {
      setLoginErro("Fallo al conectar (404)");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold border-b border-black my-8" > Formulario improvisado 🤣 </h1>

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <input className="px-2 py-1" placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
          <input className="px-2 py-1" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          < button className="border border-black bg-gray-300 px-2 py-1 text-xl my-4" onClick={handleClick} > SEND </button>
        </div>

        <div>
          <p>👈 {`"string"`} </p>
          <p className="my-6">👈 {`"string"`} </p>
          <p>prueba con estos datos</p>
          <p> para que obtengas token</p>
        </div>
      </div>

      <p className="text-red-800 my-4">error: {loginError}</p>
      <p className="sm:w-[50%] w-screen break-word">token: {loginResp}</p>

      <div className="absolute bottom-[5rem] sm:left-[35%] left-0">
        <p>Valido los 3 errores que me puede arrojar la respuesta :</p>
        <ul>
          <li> ➡ 401 invalid credencials </li>
          <li> ➡ 404 user not found</li>
          <li> ➡ Fallo en la conexion</li>
        </ul>
      </div>
    </div>
  );
}
