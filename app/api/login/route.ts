import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {

    const res = await request.json();
    const { email, password } = res;
    const data = await fetch('https://digitalmoney.digitalhouse.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    });


    let error = ""
    if (!data.ok) {
      console.error("STATUS ERROR : ", data.status)
      if (data.status === 401) error = "La contraseña no corresponde al usuario (401)";
      if (data.status === 404) error = "Usuario no registrado (404)";
    }
    const token = await data.json()
    cookies().set('SwaggerToken', JSON.stringify(token));
    return NextResponse.json({ token, error });
  } catch (e) {
    if (e instanceof Error)
      console.error(e.message)
  }

}
