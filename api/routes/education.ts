import { Router } from "express";
const educationController = require("../controllers/educationController");

const educationRouter = Router();

//POST
educationRouter.post("/create/:id", educationController.create);

//PUT
educationRouter.put("/update/:id", educationController.update);

//DELETE
educationRouter.delete("/delete/:id", educationController.delete);

module.exports = educationRouter;
