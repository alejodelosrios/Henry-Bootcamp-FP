import { Router } from "express";
const companyController = require("../controllers/companyController");

const companyRouter = Router();

//GET
companyRouter.get("/index", companyController.index);
companyRouter.get("/:companyId", companyController.companyById);
companyRouter.get("/posts/:companyId", companyController.getPosts);

//POST
companyRouter.post("/create/:userId", companyController.create);

//PUT
companyRouter.put("/update/:companyId", companyController.create);

//DELETE
companyRouter.delete("/delete/:companyId", companyController.delete);

module.exports = companyRouter;
