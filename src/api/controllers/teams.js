const { PrismaClient } = require("@prisma/client")
const ApiError = require("../lib/ApiError")

const db = new PrismaClient()

module.exports = {
    index: async (req, res) => {},

    show: async (req, res) => {},

    create: async (req, res) => {},

    update: async (req, res, next) => {},

    destroy: async (req, res, next) => {}
}