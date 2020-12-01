import React from "react"
import { AuthConsumer } from "../contexts/authContext"
import { Redirect } from "react-router-dom"

const ProtectedRoutes = ({
    children,
    user,
    loaded,
    ...props
}) => {
    if(!loaded) return <p>Loading...</p>
    if(!user) return <Redirect to="/login"/>
    return children
}

export default props =>
    <AuthConsumer>
        {authContext =>
            <ProtectedRoutes {...props} {...authContext}/>
        }
    </AuthConsumer>