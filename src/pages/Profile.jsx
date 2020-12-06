import React from "react"
import { Route, NavLink } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import { useAuth } from "../contexts/authContext"

const Profile = () => {
    const { user } = useAuth()

    return (
        <DataPanel header={
            <h1>{user.name}</h1>
        }>

            {user.email}

            <nav>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/profile/teams">Teams</NavLink>
            </nav>

            <Route path="/profile" exact>
                Profile
            </Route>

            <Route path="/profile/teams" exact>
                <ul>
                    {user.memberships.map(membership =>
                        <li>{membership.team.name}</li>
                    )}
                </ul>
            </Route>
        </DataPanel>
    )
}
    

export default Profile