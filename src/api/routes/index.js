const { Router } = require("express")
const { async, errorHandler, fallbackHandler } = require("./_handlers")
const { 
    register, 
    login, 
    logout, 
    me, 
    authenticated, 
    google 
} = require("../controllers/auth")
const projectRoutes = require("./_projects")

const rtr = Router()

rtr.post("/auth/register", async(register))
rtr.post("/auth/login", async(login))
rtr.post("/auth/google", async(google))

rtr.use(async(authenticated))

rtr.get("/auth/me", async(me))
rtr.delete("/auth/logout", async(logout))

rtr.use("/team/:teamId/projects", projectRoutes)

rtr.use(errorHandler)
rtr.use(fallbackHandler)

module.exports = rtr