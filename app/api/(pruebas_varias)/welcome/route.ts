import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const welcome = cookies().get('welcome');
  console.log({ welcome });
  if (welcome?.value === 'true') {
    return NextResponse.json({ message: 'WELCOME BACK' });
  }
  cookies().set('welcome', 'true');
  return NextResponse.json({ message: 'WELCOME' });
}
