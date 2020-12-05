const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const ApiError = require("../lib/ApiError")
const { ProjectSchema } = require("../schemas/index")

const db = new PrismaClient()

module.exports = {
    index: async (req, res) => {
        const projects = await db.project.findMany({where: {
            team_id: req.session.user.team.id
        }})
        res.json(projects)
    },

    show: async (req, res) => {
        const project = await db.project.findFirst({where: {
            team_id: req.session.user.team.id,
            id: parseInt(req.params.id)
        }})
        res.json(project)
    },

    create: async (req, res) => {
        await ProjectSchema.validate(req.body)
        const project = await db.project.create({ data: {
            name: req.body.name,
            team: {
                connect: { id: req.session.user.team.id }
            }
        }})
            .catch(err => {
                if(err.code === "P2002") throw new ApiError("Each project needs a unique name.", 422)
            })
        res.status(201)
        res.json(project)
    },

    update: async (req, res, next) => {

    },

    destroy: async (req, res, next) => {

    }
}