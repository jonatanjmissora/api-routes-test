import { jwtDecode } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { email, password } = res;
  const resp = await fetch('https://digitalmoney.digitalhouse.com/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  });
  const data = await resp.json();
  console.log('LOGIN ROUTE', data);

  const response = NextResponse.json(data);

  if(data.token) {
    const decode = jwtDecode(data.token)
    console.log("token data:", decode)
    
    response.cookies.set('token', data.token, {
      expires: new Date(new Date().getTime() + 900000),
      httpOnly: process.env.NODE_ENV === 'production',
    });

    response.cookies.set('userId', decode.username, {
      expires: new Date(new Date().getTime() + 900000),
      httpOnly: process.env.NODE_ENV === 'production',
    });
  }

  return response;
}

export async function GET() {
  return NextResponse.json({msj: "Estoy en Login"})
}