import { Router } from "express";
const tagsController = require("../controllers/tagsController")

const tagsRouter = Router();

//GET
tagsRouter.get("/index", tagsController.index);

//POST
tagsRouter.post("/create", tagsController.create);  

//UPDATE
tagsRouter.put("/update/:tagId", tagsController.update)  

//DELETE
tagsRouter.delete("/delete/:tagId", tagsController.delete) 

module.exports = tagsRouter;