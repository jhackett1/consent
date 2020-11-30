import React, { useState, useEffect } from "react"

const AuthContext = React.createContext()

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState(false)

    useEffect(() => {
        fetch("/api/auth/me")
          .then(res => res.json())
          .then(data => {
            if(data.user) setUser(data.user)
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
                logOut: logOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer