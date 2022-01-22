import { Router } from 'express';
const companyController = require("../controllers/companyController")

const companyRouter = Router()

//GET
companyRouter.get("/index", companyController.index)
companyRouter.get("/:id", companyController.companyById)
companyRouter.get("/posts/:id", companyController.getPosts)
//POST
companyRouter.post("/create", companyController.create)
companyRouter.post("/createReview/:id", companyController.createReview)
//PUT

//DELETE

//DEBAJO LAS QUE AUN NO ESTAN COMPLETADAS
companyRouter.put("/update", companyController.update)
companyRouter.delete("/delete", companyController.delete)

module.exports = companyRouter