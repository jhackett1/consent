const ApiError = require("../lib/ApiError")

module.exports = {

    // Check that the user is a MEMBER of the team they're trying to access
    seeTeam: req => {
        const allowedTeams = req.user.memberships.map(m => m.team.id)
        if(!allowedTeams.includes(parseInt(req.params.teamId)))
            throw new ApiError("You don't have permission to do that", 401)
    },

    // Check that the user can ADMINISTER the team they're trying to administer
    administerTeam: req => {
        const administeredTeams = req.user.memberships
            .filter(m => m.admin)
            .map(m => m.team.id)
        if(!administeredTeams.includes(parseInt(req.params.teamId)))
            throw new ApiError("You don't have permission to do that", 401)
    }

}