import { Router } from "express";
const languageController = require("../controllers/languagesController");

const languageRouter = Router();

//POST
languageRouter.post("/create/:applicantId", languageController.create);

//UPDATE
languageRouter.put("/update/:languageId", languageController.update);

//DELETE
languageRouter.delete("/delete/:languageId", languageController.delete);

module.exports = languageRouter;
