const { PrismaClient } = require("@prisma/client")
// const ApiError = require("../lib/ApiError")
// const { FormSchema } = require("../schemas/index")
const can = require("../authorisations/index")

const db = new PrismaClient()

module.exports = {

    authorised: (req, res, next) => {
        can.seeTeam(req.user, req.params.teamId)
        next()
    },

    index: async (req, res) => {
        const forms = await db.form.findMany({
            where: {
                project: {
                    team: {
                        id: parseInt(req.params.teamId)
                    }
                }
            },
            include: {
                project: true
            }
    })
        res.json(forms)
    },

    show: async (req, res) => {
    },

    create: async (req, res) => {
    },

    update: async (req, res, next) => {
    },

    destroy: async (req, res, next) => {

    }
}