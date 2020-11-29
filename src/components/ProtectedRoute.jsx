import React from "react"
import { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { AuthConsumer } from "../contexts/authContext"

const ProtectedRoute = ({ user, children }) => {
    const history = useHistory()
    
    useEffect(() => {
        if(!user) history.push("/login")
    }, [history,user])

    return children
}

const WrappedProtectedRoute = props =>
    <AuthConsumer>
        {authContext =>
            <ProtectedRoute {...props} {...authContext}/>
        }
    </AuthConsumer>
    
export default WrappedProtectedRoute