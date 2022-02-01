import { Router } from "express";
const tagsController = require("../controllers/tagsController");

const tagsRouter = Router();

//POST
tagsRouter.post("/create", tagsController.create);

//GET
tagsRouter.get("/index", tagsController.index);
tagsRouter.get("/:tagId", tagsController.tagById);

//UPDATE
tagsRouter.put("/update/:tagId", tagsController.update);

//DELETE
tagsRouter.delete("/delete/:tagId", tagsController.delete);

module.exports = tagsRouter;
