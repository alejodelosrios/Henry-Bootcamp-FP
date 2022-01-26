import { Router } from "express";
const experienceController = require("../controllers/experienceController")

const experienceRouter = Router();


//POST
experienceRouter.post("/create", experienceController.create);  

//UPDATE
experienceRouter.put("/update", experienceController.update)  

//DELETE
experienceRouter.delete("/delete/:id", experienceController.delete) 






module.exports = experienceRouter;