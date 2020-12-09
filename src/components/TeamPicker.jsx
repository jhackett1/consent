import React from "react"
import { useAuth } from "../contexts/authContext"
import { useParams, useHistory } from "react-router-dom"

const TeamPicker = () => {
    const { user } = useAuth()
    const { teamId } = useParams()
    const history = useHistory()

    if(user.memberships.length === 1) return <p>{user.memberships[0].team.name}</p>

    return(
        <select 
            className="ct-team-picker"
            value={teamId}
            onChange={e => history.push(`/team/${e.target.value}`)}
        >
            {user.memberships.map(membership => 
                <option key={membership.team.id} value={membership.team.id}>
                    {membership.team.name}
                </option>
            )}
        </select>
    )
}

export default TeamPicker