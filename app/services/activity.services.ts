//https://digitalmoney.digitalhouse.com/api/accounts/23/activity

import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const getActivity = async () => {

    const user_id = cookies().get("userId")?.value || ""
    const token = cookies().get("token")?.value || ""

    if(user_id === "") {
        return NextResponse.json("No hay account")
    }
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account_id}/activity`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      },
    });

    const data = await res.json()

    console.log("ACCOUNT en service: ", {data})

    return NextResponse.json(data)
}