"use client"
import { SessionProvider, useSession } from "../context/session.context"

export const UserData = ({session}) => {

    const msj = useSession()

    return (
        <SessionProvider>

        <section className="flex-1 flex flex-col justify-center items-center">
            {msj}
        <h2>USER DATA:</h2>
        <p>{JSON.stringify(session, null, 2)}</p>
      </section>
        </SessionProvider>
    )
}