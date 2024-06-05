import { NextResponse } from 'next/server';

const API_URL = 'https://digitalmoney.digitalhouse.com/service';

export async function GET() {
  const res = await fetch(API_URL, {
    headers: { 'Content-Type': 'application/json' },
  });

  const resp = await res.json()
  return NextResponse.json(resp);
}