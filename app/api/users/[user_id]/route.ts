import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { user_id: string } }) {
  const { user_id } = params
  const swaggerTokenCookie = cookies().get("swagger_token")?.value;
  if (swaggerTokenCookie) {
    const data = await fetch(`https://digitalmoney.digitalhouse.com/api/users/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": swaggerTokenCookie
      },
    });

    const res = await data.json()
    console.log("RES desde API", res)
    return NextResponse.json("inner");
  }
  return NextResponse.json("outter");
}