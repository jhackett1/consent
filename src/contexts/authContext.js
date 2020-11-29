import React, { useState } from "react"

const AuthContext = React.createContext()

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState(false)

    return (
        <AuthContext.Provider
            value={{
                user: user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer