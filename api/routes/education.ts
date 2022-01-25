import { Router } from "express";
const educationController = require("../controllers/educationController");

const educationRouter = Router();

//POST
educationRouter.post("/create", educationController.create);

//PUT
educationRouter.put("/:id/update", educationController.update);

//DELETE
educationRouter.delete("/:id/delete", educationController.delete);

module.exports = educationRouter;
