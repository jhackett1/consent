const { Router } = require("express")
const { async } = require("./_handlers")
const {
    index,
    authorised
} = require("../controllers/permissions")

const rtr = Router({ mergeParams: true })

rtr.use(authorised)

rtr.get("/", async(index))

module.exports = rtr