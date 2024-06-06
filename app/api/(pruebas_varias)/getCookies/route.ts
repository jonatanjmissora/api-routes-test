import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookiesData = cookies().getAll();

  if (cookiesData) {

    return NextResponse.json(cookiesData);
  }
  return NextResponse.json("NO HAY COOKIES");
}
