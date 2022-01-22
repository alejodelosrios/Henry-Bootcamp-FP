import { Router } from 'express';
const roleController = require("../controllers/roleController")

const roleRouter = Router()

//GET
roleRouter.get("/index", roleController.index)

//POST
roleRouter.post("/create", roleController.create)

//PUT
roleRouter.put("/update", roleController.update)

//DELETE
roleRouter.delete("/delete", roleController.delete)

module.exports = roleRouter