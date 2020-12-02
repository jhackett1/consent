const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const ApiError = require("../lib/ApiError")

const db = new PrismaClient()

module.exports = {

    login: async (req, res, next) => {
        try{
            const {email, password} = req.body
            if(!email || !password) throw new ApiError("Email and password are required", 400)
            const user = await db.user.findFirst({where: { email: email }})
            if(!user) throw new ApiError("User and password doesn't match", 401)
            const match = await bcrypt.compare(password, user.password_digest)
            if(!match) throw new ApiError("User and password doesn't match", 401)
            delete user.password_digest

            req.session.user = user

            res.status(201)
            res.json({
                user: user
            })

        } catch(err){
            next(err)
        }
    },

    logout: async (req, res, next) => {
        try{
            await req.session.destroy()
            res.status(200)
            res.json({
                message: "Logged out successfully"
            })
        } catch(err){
            next(err)
        }
    },

    me: async (req, res, next) => {
        try{
            if(!req.session.user.id) throw new ApiError("You're not logged in", 400)
            const user = await db.user.findFirst({where: { id: req.session.user.id }})
            delete user.password_digest
            res.status(201)
            res.json({
                user: user
            })
        } catch(err){
            next(err)
        }
    },

    authenticated: async (req, res, next) => {
        try{
            if(!req?.session?.user?.id) throw new ApiError("You're not logged in", 400)
            const user = await db.user.findFirst({where: { id: req.session.user.id }})
            if(user) {
                next()
            } else {
                throw new ApiError("You're not logged in", 400)
            }
        } catch(err){
            next(err)
        }
    },

    register: async (req, res, next) => {
        try{
            const {email, name, password} = req.body
            if(!email || !password) throw new ApiError("Email and password are required", 400)
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

        } catch(err){
            next(err)
        }
    }
}