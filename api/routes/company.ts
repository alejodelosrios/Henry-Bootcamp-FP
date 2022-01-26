import { Router } from "express";
const companyController = require("../controllers/companyController");

const companyRouter = Router();

//GET
companyRouter.get("/index", companyController.index);
companyRouter.get("/:id", companyController.companyById);
companyRouter.get("/posts/:id", companyController.getPosts);

//POST
companyRouter.post("/create", companyController.create);

//PUT

//DELETE
companyRouter.delete("/delete/:id", companyController.delete)

module.exports = companyRouter;
