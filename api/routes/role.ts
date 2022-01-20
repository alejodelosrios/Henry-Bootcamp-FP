import { Router } from 'express';
const roleController = require("../controllers/roleController")

const roleRouter = Router()

roleRouter.post("/create", roleController.create)
roleRouter.get("/index", roleController.index)
roleRouter.put("/update", roleController.update)
roleRouter.delete("/delete", roleController.delete)

module.exports = roleRouter