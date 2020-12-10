const ApiError = require("../lib/ApiError")

module.exports = {

    // Check that the user is requesting resources from a team they are a member of
    seeTeam: req => {
        const allowed_teams = req.user.memberships.map(m => m.team.id)
        if(!allowed_teams.includes(parseInt(req.params.teamId))){
            throw new ApiError("You don't have permission to view that", 401)
        }
    }

}