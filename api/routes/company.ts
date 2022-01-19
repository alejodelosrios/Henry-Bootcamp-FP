import { Router } from 'express';
const companyController = require("../controllers/companyController")

const companyRouter = Router()

companyRouter.use("/create", companyController.create)
companyRouter.use("/index", companyController.index)
companyRouter.use("/update", companyController.update)
companyRouter.use("/delete", companyController.delete)

module.exports = companyRouter