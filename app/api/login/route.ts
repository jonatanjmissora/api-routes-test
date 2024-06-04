import { NextResponse } from 'next/server';

const API_URL = 'https://digitalmoney.digitalhouse.com/api/login';

export async function POST(req: Request) {

  const reque = req.body

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { 'Content-Type': 'application/json', charset: 'utf-8' },
    body: JSON.stringify({
      "email": "string",
      "password": "string"
    })
  });
  console.log("route status", res.status)
  return NextResponse.json(res);
}