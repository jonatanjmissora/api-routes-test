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
    <div className="w-screen">
        <div className="flex flex-col gap-4 w-[90%] sm:w-[40%] mx-auto">
          <h1 className="text-xl font-bold border-b border-black my-8 text-center" > Formulario improvisado 🤣 </h1>
          <input className="px-2 py-1" placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
          <p>👈 {`puedes probar con "string"`} </p>
          <input className="px-2 py-1" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <p>👈 {`puedes probar con "string"`} </p>
          < button className="border border-black bg-gray-300 px-2 py-2 text-xl" onClick={handleClick} > SEND </button>

        <div className="w-full">
              <p className="text-red-800">error: {loginError}</p>
              <p className="text-green-900">token: {loginResp !== "" && "tienes un token"}</p>
        </div>
        </div>

      <div className="absolute bottom-[2rem] sm:left-[35%] left-[1rem]">
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
