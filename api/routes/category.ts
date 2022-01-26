import { Router } from "express";
const categoryController = require("../controllers/categoryController")

const categoryRouter = Router();

//GET
categoryRouter.get("/index", categoryController.index);

//POST
categoryRouter.post("/create", categoryController.create);  

//UPDATE
categoryRouter.put("/update/:categoryId", categoryController.update)  

//DELETE
categoryRouter.delete("/delete/:categoryId", categoryController.delete) 

module.exports = categoryRouter;