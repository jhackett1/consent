const { PrismaClient } = require("@prisma/client")
const ApiError = require("../lib/ApiError")
const { ProjectSchema } = require("../schemas/index")
const can = require("../authorisations/index")

const db = new PrismaClient()

module.exports = {

    authorised: (req, res, next) => {
        can.seeTeam(req.user, req.params.teamId)
        next()
    },

    index: async (req, res) => {
        const projects = await db.project.findMany({where: {
            team: {
                id: parseInt(req.params.teamId)
            }
        }})
        res.json(projects)
    },

    show: async (req, res) => {
        const project = await db.project.findFirst({
            where: {
                id: parseInt(req.params.id),
                team: {
                    id: parseInt(req.params.teamId)
                }
            },
            include: {
                team: true
            }
    })
        res.json(project)
    },

    create: async (req, res) => {
        let { name } = await ProjectSchema.cast(req.body)
        const project = await db.project.create({ data: {
            name: name,
            team: {
                connect: { id: parseInt(req.params.teamId) }
            }
        }})
            .catch(err => {
                if(err.code === "P2002") throw new ApiError("Each project needs a unique name.", 422)
            })
        res.status(201)
        res.json(project)
    },

    update: async (req, res, next) => {
        await ProjectSchema.validate(req.body)
        const { name } = req.body
        const project = await db.project.update({ 
            where: { 
                id: parseInt(req.params.id)
             },
            data: {
                name: name
            }
        })
            .catch(err => {
                if(err.code === "P2002") throw new ApiError("Each project needs a unique name.", 422)
            })
        res.status(200)
        res.json(project)
    },

    destroy: async (req, res, next) => {

    }
}