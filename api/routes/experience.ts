import { Router } from "express";
const experienceController = require("../controllers/experienceController")

const experienceRouter = Router();


//POST
experienceRouter.post("/create/:applicantId", experienceController.create);  

//UPDATE
experienceRouter.put("/update/:id", experienceController.update)  

//DELETE
experienceRouter.delete("/delete/:id", experienceController.delete) 





module.exports = experienceRouter;