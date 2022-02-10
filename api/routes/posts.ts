import { Router } from "express";
const postsController = require("../controllers/postsController");

const isAuthorized = require("./middlewares/isAuthorized");

const postsRouter = Router();

//POST
postsRouter.post("/filter", postsController.filter);
postsRouter.post("/create/:companyId", isAuthorized(["admin", "company"]), postsController.create);

//GET
postsRouter.get("/index", postsController.index);
postsRouter.get("/:postId", postsController.postById);

//PUT
postsRouter.put("/update/:postId", isAuthorized(["admin", "company"]), postsController.update)

//DELETE
postsRouter.delete("/delete/:postId", isAuthorized(["admin", "company"]), postsController.delete);

module.exports = postsRouter;
