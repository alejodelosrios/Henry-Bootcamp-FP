import { Router } from "express";
const postsController = require("../controllers/postsController");

const postsRouter = Router();

//GET
postsRouter.get("/index", postsController.index);
postsRouter.get("/:id", postsController.postById);

//POST
postsRouter.post("/create", postsController.create);

//PUT

//DELETE

//DEBAJO LAS QUE AUN NO ESTAN COMPLETADAS
postsRouter.put("/update", postsController.update);
postsRouter.delete("/delete/:id", postsController.delete);

module.exports = postsRouter;
