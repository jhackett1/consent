import React, { 
    useState, 
    useEffect, 
    createContext, 
    useContext
} from "react"

const AuthContext = createContext()

export const AuthProvider = props => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    useEffect(() => {
        fetch("/api/v1/auth/me")
            .then(res => res.json())
            .then(data => {
                if(data.user) setUser(data.user)
                setLoading(false)
            })
    }, [])

    const logIn = async values => {
        const res = await fetch("/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if(data.user) setUser(data.user)
    }

    const logOut = async () => {
        await fetch("/api/v1/auth/logout", {
            method: "DELETE"
        })
        setUser(false)
    }

    return(
        <AuthContext.Provider value={{
            user,
            loading,
            logIn,
            logOut
        }} {...props}/>
    )
}

export const useAuth = () => useContext(AuthContext)