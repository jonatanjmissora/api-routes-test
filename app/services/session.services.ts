import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const getSession = async () => {

    const user_id = cookies().get("userId")?.value || ""
    const token = cookies().get("token")?.value || ""

    if(user_id === "") {
        return NextResponse.json("No hay session")
    }
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/users/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      },
    });

    const data = await res.json()

    console.log("SESSION en service: ", {data})

    return NextResponse.json(data)
}