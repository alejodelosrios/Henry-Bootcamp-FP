import { Router } from "express";
const postsController = require("../controllers/postsController");

const postsRouter = Router();

//GET
postsRouter.get("/index", postsController.index);
postsRouter.get("/:postId", postsController.postById);

//POST
postsRouter.post("/filter", postsController.filter);
postsRouter.post("/create/:companyId", postsController.create);

//PUT

//DELETE
postsRouter.delete("/delete/:postId", postsController.delete);

module.exports = postsRouter;
