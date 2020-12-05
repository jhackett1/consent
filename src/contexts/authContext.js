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
                if(!data.error) setUser(data)
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
        if(data.error) throw new Error(data.error)
        setUser(data)
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
        setUser(data)
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
            googleLogIn,
            logIn,
            logOut
        }} {...props}/>
    )
}

export const useAuth = () => useContext(AuthContext)