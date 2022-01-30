import { Router } from "express";
const postsController = require("../controllers/postsController");

const postsRouter = Router();

//POST
postsRouter.post("/filter", postsController.filter);
postsRouter.post("/create/:companyId", postsController.create);

//GET
postsRouter.get("/index", postsController.index);
postsRouter.get("/:postId", postsController.postById);

//PUT
postsRouter.put("/update/:postId", postsController.update)

//DELETE
postsRouter.delete("/delete/:postId", postsController.delete);

module.exports = postsRouter;
