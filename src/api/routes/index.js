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
const projects = require("../controllers/projects")

const rtr = Router()

rtr.post("/auth/register", async(register))
rtr.post("/auth/login", async(login))
rtr.post("/auth/google", async(google))

rtr.use(async(authenticated))

rtr.get("/auth/me", async(me))
rtr.delete("/auth/logout", async(logout))

rtr.get("/team/:teamId/projects", async(projects.index))
rtr.get("/team/:teamId/projects/:id", async(projects.show))
rtr.post("/team/:teamId/projects", async(projects.create))
rtr.put("/team/:teamId/projects/:id", async(projects.update))
rtr.delete("/team/:teamId/projects/:id", async(projects.destroy))

rtr.use(errorHandler)
rtr.use(fallbackHandler)

module.exports = rtr