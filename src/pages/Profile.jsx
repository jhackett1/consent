import React from "react"
import { Route, NavLink } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import { useAuth } from "../contexts/authContext"
import ProfileForm from "../components/ProfileForm"

const Profile = () => {
    const { user, logOut } = useAuth()

    return (
        <DataPanel header={
            <nav className="ct-sub-nav">
                <NavLink to="/profile" exact>Profile</NavLink>
                <NavLink to="/profile/teams">Teams</NavLink>
            </nav>
        }>

            <Route path="/profile" exact>
                <ProfileForm/>
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