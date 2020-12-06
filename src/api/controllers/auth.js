const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const ApiError = require("../lib/ApiError")
const { LoginSchema, RegistrationSchema } = require("../schemas/index")
const verifyGoogleToken = require("../lib/verifyGoogleToken")
const { verify } = require("crypto")

const db = new PrismaClient()

module.exports = {

    login: async (req, res) => {
        await LoginSchema.validate(req.body)
        const {email, password} = req.body
        const user = await db.user.findFirst({
            where: { email: email },
            include: {
                teams: true
            }
        })
        if(!user) throw new ApiError("That email and password don't match our records", 401)
        const match = await bcrypt.compare(password, user.password_digest)
        if(!match) throw new ApiError("That email and password don't match our records", 401)
        delete user.password_digest
        req.session.user = user
        req.session.team = user.teams[0]
        res.status(200)
        res.json(user)
    },

    logout: async (req, res) => {
        await req.session.destroy()
        res.status(200)
        res.json({
            message: "Logged out successfully"
        })
    },

    authenticated: async (req, res, next) => {
        try{
            if(!req?.session?.user?.id) throw new ApiError("You're not logged in", 400)
            const user = await db.user.findFirst({where: { id: req.session.user.id }})
            if(!user) throw new ApiError("You're not logged in", 400)
            next()
        } catch(err) {
            next(err)
        }
    },

    me: async (req, res) => {
        const user = await db.user.findFirst({
            where: { id: req.session.user.id },
            include: {
                memberships: {
                    select:{
                        admin: true,
                        team: true
                    }
                }
            }
        })
        delete user.password_digest
        res.status(200)
        res.json(user)
    },

    register: async (req, res) => {
        await RegistrationSchema.validate(req.body)
        const {email, name, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const digest = await bcrypt.hash(req.body.password, salt)
        const newUser = await db.user.create({ data: {
            name: req.body.name,
            email: req.body.email,
            password_digest: digest
        }})
        delete newUser.password_digest
        req.session.user = newUser
        res.status(201)
        res.json(newUser)
    },

    google: async (req, res) => {
        const { token }  = req.body
        const payload = await verifyGoogleToken(token)
        const { name, email, picture } = payload
        const user = await db.user.upsert({
            where: { email: email },
            update: { name, picture, team: {
                connect: { id: 1 }
            }},
            create: { name, email, picture, team: {
                connect: { id: 1 }
            }},
            include: {
                team: true
            }
        })
        delete user.password_digest
        req.session.user = user
        res.status(201)
        res.json(user)
    }
}