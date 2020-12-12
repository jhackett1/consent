const { Router } = require("express")
const { async } = require("./_handlers")
const {
    index,
    show,
    create,
    update,
    destroy,
    authorised
} = require("../controllers/forms")

const rtr = Router({ mergeParams: true })

rtr.use(authorised)

rtr.get("/", async(index))
rtr.get("/:id", async(show))
rtr.post("/", async(create))
rtr.put("/:id", async(update))
rtr.delete("/:id", async(destroy))

module.exports = rtr