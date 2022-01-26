import { Router } from "express";
const languageController = require("../controllers/languagesController");

const languageRouter = Router();

//POST
languageRouter.post("/create/:id", languageController.create);

//UPDATE
languageRouter.put("/update/:id", languageController.update);

//DELETE
languageRouter.delete("/delete/:id", languageController.delete);

module.exports = languageRouter;
