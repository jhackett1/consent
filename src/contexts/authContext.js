import React, { 
    createContext, 
    useContext
} from "react"
import useSWR from "swr"

const AuthContext = createContext()

export const AuthProvider = props => {

    const { data, error, mutate } = useSWR(`/api/v1/auth/me`)

    const logIn = async values => {
        const res = await fetch("/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if(data.error) throw new Error(data.error)
        mutate()
    }

    const googleLogIn = async googleData => {
        const res = await fetch("/api/v1/auth/google", {
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if(data.error) throw new Error(data.error)
        mutate()
    }

    const logOut = async () => {
        await fetch("/api/v1/auth/logout", {
            method: "DELETE"
        })
        mutate()
    }

    return(
        <AuthContext.Provider value={{
            user: data,
            error,
            googleLogIn,
            logIn,
            logOut
        }} {...props}/>
    )
}

export const useAuth = () => useContext(AuthContext)