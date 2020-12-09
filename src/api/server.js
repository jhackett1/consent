require("dotenv").config()

const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const routes = require("./routes/index")

const server = express()

server.use(morgan("tiny"))
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(session({
    store: new (require("connect-pg-simple")(session))({
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}))

server.use("/api/v1", routes)

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})