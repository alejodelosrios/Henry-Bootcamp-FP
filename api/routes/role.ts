import { Router } from 'express';
const roleController = require("../controllers/roleController")

const roleRouter = Router()

roleRouter.use("/create", roleController.create)
roleRouter.use("/index", roleController.index)
roleRouter.use("/update", roleController.update)
roleRouter.use("/delete", roleController.delete)

module.exports = roleRouter