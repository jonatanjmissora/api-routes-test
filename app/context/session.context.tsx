import { FC, PropsWithChildren, createContext, useContext, useMemo } from "react";

export type SessionState = {
}

const SessionContext = createContext<SessionState | undefined>(undefined)

type SessionProviderProps = PropsWithChildren & {

}

export const SessionProvider: FC<SessionProviderProps> = ({children}: SessionProviderProps) => {

    const msj = "hola mundo"

    return <SessionContext.Provider value={"hola mundo"}>{children}</SessionContext.Provider>
}

export const useSession = () => {
    const context = useContext(SessionContext)
    if(!context) {
        throw new Error("useSession must be within a SessionContext")
    }
    return context
}