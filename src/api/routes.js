const { Router } = require("express")
const { register, login, logout, me, authenticated } = require("./controllers/auth")
const projects = require("./controllers/projects")

const router = Router()

router.post("/auth/register", register)
router.post("/auth/login", login)
router.get("/auth/me", me)
router.delete("/auth/logout", logout)

router.get("/projects", projects.index)
router.get("/projects/:id", projects.show)
router.post("/projects", projects.create)
router.put("/projects", projects.update)
router.delete("/projects", projects.destroy)

router.use((error, req, res, next) => {
    res.status(400)
    res.json({ 
        error: process.env.NODE_ENV === "production" ? "An internal error occurred" : error.message 
    })
})

router.use((req, res, next) => {
    res.status(404)
    res.json({ 
        error: "No endpoint matches your request"
    })
})

module.exports = router