const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const ApiError = require("../lib/ApiError")
const { ProjectSchema } = require("../schemas/index")

const db = new PrismaClient()

module.exports = {
    authorised: async (req, res, next) => {
        // check that the user is trying to modify a project they're allowed to
        next()
    },

    index: async (req, res) => {
        const projects = await db.project.findMany({where: {
            Team: {
                id: parseInt(req.params.teamId)
            }
        }})
        res.json(projects)
    },

    show: async (req, res) => {
        const project = await db.project.findFirst({where: {
            id: parseInt(req.params.id),
            Team: {
                id: {
                    in: req.user.memberships.map(m => m.team.id)
                }
            }
        }})
        res.json(project)
    },

    create: async (req, res) => {
        if(!res.locals.teams.includes(parseInt(req.params.teamId))){
            throw new ApiError("You don't have permission to view that team's projects.", 400)
        }
        await ProjectSchema.validate(req.body)
        const project = await db.project.create({ data: {
            name: req.body.name,
            team: {
                connect: { id: req.params.teamId }
            }
        }})
            .catch(err => {
                console.log(err)
                if(err.code === "P2002") throw new ApiError("Each project needs a unique name.", 422)
            })
        res.status(201)
        res.json(project)
    },

    update: async (req, res, next) => {
        await ProjectSchema.validate(req.body)
        let { name } = req.body
        const project = await db.project.update({ 
            where: { 
                id: parseInt(req.params.id),
                team_id: {
                        in: res.locals.teams

                }
             },
            data: {
                name: req.body.name
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