const { Router } = require("express")
const { async } = require("./_handlers")
const {
    index,
    show,
    create,
    update,
    destroy
} = require("../controllers/projects")
const can = require("../authorisations/index")

const rtr = Router({ mergeParams: true })

rtr.use((req, res, next) => {
    can.seeTeam(req.user, req.params.teamId)
    next()
})

rtr.get("/", async(index))
rtr.get("/:id", async(show))
rtr.post("/", async(create))
rtr.put("/:id", async(update))
rtr.delete("/:id", async(destroy))

module.exports = rtr