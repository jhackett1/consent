const { Router } = require("express")
const { register, login, logout, me, authenticated, google } = require("./controllers/auth")
const projects = require("./controllers/projects")
const teams = require("./controllers/teams")

const router = Router()

const handler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        next(err)
    })
}

router.post("/auth/register", handler(register))
router.post("/auth/login", handler(login))
router.post("/auth/google", handler(google))

router.delete("/auth/logout", authenticated, handler(logout))
router.get("/auth/me", authenticated, handler(me))

router.get("/projects", authenticated, handler(projects.index))
router.get("/projects/:id", authenticated, handler(projects.show))
router.post("/projects", authenticated, handler(projects.create))
router.put("/projects/:id", authenticated, handler(projects.update))
router.delete("/projects", authenticated, handler(projects.destroy))

router.get("/teams", authenticated, handler(teams.index))
router.get("/teams/:id", authenticated, handler(teams.show))
router.post("/teams", authenticated, handler(teams.create))
router.put("/teams/:id", authenticated, handler(teams.update))
router.delete("/teams", authenticated, handler(teams.destroy))

router.use((err, req, res, next) => {
    console.log(err)
    const status = err.status || 500
    res.status(status)
    res.json({ 
        status: status,
        error: err.message 
    })
})

router.use((req, res, next) => {
    res.status(404)
    res.json({ 
        error: "No endpoint matches your request"
    })
})

module.exports = router