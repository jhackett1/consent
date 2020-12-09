import React from "react"
import { Route, NavLink } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import { useAuth } from "../contexts/authContext"

const Profile = () => {
    const { user, logOut } = useAuth()

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

                <button className="ct-button ct-button--secondary" onClick={logOut}>Sign out</button>
            </Route>

            <Route path="/profile/teams" exact>
                {user.memberships.map(membership =>
                    <h2 key={membership.team.id}>{membership.team.name}</h2>
                )}
            </Route>
        </DataPanel>
    )
}
    

export default Profile