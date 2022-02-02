import { Router } from "express";
const companyController = require("../controllers/companyController");

const companyRouter = Router();

//POST
companyRouter.post("/create/:userId", companyController.create);
companyRouter.post("/review/:companyId", companyController.review)

//GET
companyRouter.get("/index", companyController.index);
companyRouter.get("/:companyId", companyController.companyById);
companyRouter.get("/posts/:companyId", companyController.getPosts);

//PUT
companyRouter.put("/application", companyController.updateApplicationStatus);
companyRouter.put("/favorites", companyController.addFavoriteApplicant)
companyRouter.put("/add-image/:companyId", companyController.addImage)
companyRouter.put("/update/:companyId", companyController.update);

//DELETE
companyRouter.delete("/delete/:companyId", companyController.delete);

module.exports = companyRouter;
