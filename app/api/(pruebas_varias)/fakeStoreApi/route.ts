import { NextResponse } from 'next/server';

const API_URL = 'https://fakestoreapi.com/products';

export async function GET() {
  const res = await fetch(API_URL, {
    headers: { 'Content-Type': 'application/json', charset: 'utf-8' },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
