require("dotenv").config()
const express = require("express")
const session = require('express-session')

const routes = require("./routes")

const server = express()

server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    cookie: { secure: true },
    saveUninitialized: true
}))

server.use("/api", routes)

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})