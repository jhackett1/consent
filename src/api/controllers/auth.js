const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const ApiError = require("../lib/ApiError")
const { LoginSchema, RegistrationSchema } = require("../schemas/index")
const verifyGoogleToken = require("../lib/verifyGoogleToken")

const db = new PrismaClient()

module.exports = {

    register: async (req, res) => {
        await RegistrationSchema.validate(req.body)
        const {email, name, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const digest = await bcrypt.hash(password, salt)
        const newUser = await db.user.create({ data: {
            name: name,
            email: email,
            password_digest: digest
        }})
        delete newUser.password_digest
        req.session.userId = newUser.id
        res.status(201)
        res.json(newUser)
    },

    login: async (req, res) => {
        await LoginSchema.validate(req.body)
        const {email, password} = req.body
        const user = await db.user.findFirst({
            where: { email: email }
        })
        if(!user) throw new ApiError("That email and password don't match our records", 401)
        const match = await bcrypt.compare(password, user.password_digest)
        if(!match) throw new ApiError("That email and password don't match our records", 401)
        delete user.password_digest
        req.session.userId = user.id
        res.status(200)
        res.json(user)
    },

    google: async (req, res) => {
        const { token }  = req.body
        const payload = await verifyGoogleToken(token)
        const { name, email, picture } = payload
        const user = await db.user.upsert({
            where: { email: email },
            update: { name, picture },
            create: { name, email, picture }
        })
        delete user.password_digest
        req.session.userId = user.id
        res.status(201)
        res.json(user)
    },

    authenticated: async (req, res, next) => {
        if(!req?.session?.userId) throw new ApiError("You're not logged in", 401)
        const user = await db.user.findFirst({
            where: { id: req.session.userId },
            include: {
                memberships: {
                    select:{
                        admin: true,
                        team: true
                    }
                }
            }
        })
        if(!user) throw new ApiError("You're not logged in", 401)
        delete user.password_digest
        req.user = user
        req.allowed_teams = req.user.memberships.map(m => m.team.id)
        next()
    },

    me: async (req, res) => {
        res.status(200)
        res.json(req.user)
    },

    logout: async (req, res) => {
        await req.session.destroy()
        res.status(200)
        res.end()
    }
}