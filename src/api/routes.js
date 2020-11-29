const { Router } = require("express")
const { register, login, logout, me, authenticated } = require("./controllers/auth")

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/me", me)
router.delete("/logout", logout)

router.use((error, req, res, next) => {
    res.status(400)
    res.json({ 
        error: process.env.NODE_ENV === "production" ? "An error occurred" : error.message 
    })
})

router.use((req, res, next) => {
    res.status(404)
    res.json({ 
        error: "No endpoint matches your request"
    })
})

module.exports = router