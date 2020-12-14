const { PrismaClient } = require("@prisma/client")
const can = require("../authorisations/index")

const db = new PrismaClient()

module.exports = {

    authorised: (req, res, next) => {
        can.seeTeam(req.user, req.params.teamId)
        next()
    },

    index: async (req, res) => {
        const permissions = await db.permission.findMany({
            select: {
                id: true,
                name: true,
                required: true
            }
        })
        res.json(permissions)
    },

}