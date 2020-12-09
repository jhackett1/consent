import React, { useState } from "react"
import { Link } from "react-router-dom"
import MinimalLayout from "../components/MinimalLayout"
import { Helmet } from "react-helmet"
import { useAuth } from "../contexts/authContext"

const Login = () => {
    const { user } = useAuth()
    
    return(
        <MinimalLayout>
            <Helmet>
                <title>Choose a team | Consent</title>
            </Helmet>

            <h1 className="ct-login__title">Choose a team</h1>

            <ul>
                {user.memberships.map(membership => 
                    <li key={membership.team.id}>
                        <Link to={`/team/${membership.team.id}`}>
                            {membership.team.name}
                        </Link>
                    </li>
                )}
            </ul>

            <p className="ct-login__actions">
                <Link className="ct-link" to="#">Make a new team</Link>
            </p>
        </MinimalLayout>
    )
}

export default Login