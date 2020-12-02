const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const ApiError = require("../lib/ApiError")

const db = new PrismaClient()

module.exports = {
    index: async (req, res, next) => {
        try{
            const projects = await db.project.findMany()
            res.json(projects)
        } catch(err) {
            next(err)
        }
    },

    show: async (req, res, next) => {
        try{
            const project = await db.project.findFirst({where: {id: parseInt(req.params.id)}})
            res.json(project)
        } catch(err) {
            next(err)
        }
    },

    create: async (req, res, next) => {

    },

    update: async (req, res, next) => {

    },

    destroy: async (req, res, next) => {

    }
}