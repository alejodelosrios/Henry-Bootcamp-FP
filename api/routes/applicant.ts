import { Router } from "express";
const applicantController = require("../controllers/applicantController");

const applicantRouter = Router();

//GET
applicantRouter.get("/index", applicantController.index);

//POST
applicantRouter.post("/create", applicantController.create);

//PUT
applicantRouter.put("/update/:id", applicantController.update);

//DELETE
applicantRouter.delete("/delete/:id", applicantController.delete);

module.exports = applicantRouter;
