import React, { useState, useEffect } from "react"

const AuthContext = React.createContext()

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState(false)
    const [loaded, setLoaded] = useState(false)

    console.log(loaded, user)

    useEffect(() => {
        fetch("/api/auth/me")
            .then(res => res.json())
            .then(data => {
                if(data.user) setUser(data.user)
                setLoaded(true)
            })
    }, [])

    const logOut = async () => {
        await fetch("/api/auth/logout", {
            method: "DELETE"
        })
        setUser(false)
    }

    return (
        <AuthContext.Provider
            value={{
                user: user,
                loaded: loaded,
                logOut: logOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer