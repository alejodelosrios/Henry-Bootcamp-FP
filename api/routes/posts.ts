import { Router } from "express";
const postsController = require("../controllers/postsController");

const postsRouter = Router();

//GET
postsRouter.get("/index", postsController.index);
postsRouter.get("/:id", postsController.postById);

//POST
postsRouter.post("/filter", postsController.filter);
postsRouter.post("/create", postsController.create);

//PUT

//DELETE
postsRouter.delete("/delete/:id", postsController.delete);

module.exports = postsRouter;
