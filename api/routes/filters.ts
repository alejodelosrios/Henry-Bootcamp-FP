import { Router } from 'express';
const filterController = require("../controllers/filterController")

const filterRouter = Router()

filterRouter.get("/index", filterController.index)

module.exports = filterRouter