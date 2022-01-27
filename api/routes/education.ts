import { Router } from "express";
const educationController = require("../controllers/educationController");

const educationRouter = Router();

//POST
educationRouter.post("/create/:applicantId", educationController.create);

//PUT
educationRouter.put("/update/:educationId", educationController.update);

//DELETE
educationRouter.delete("/delete/:educationId", educationController.delete);

module.exports = educationRouter;
