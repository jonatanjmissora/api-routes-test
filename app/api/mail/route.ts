import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { email, password } = res;
  const data = await fetch('https://digitalmoney.digitalhouse.com/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  });

  return NextResponse.json(data);
}
