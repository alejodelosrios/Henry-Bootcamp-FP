import { Router } from "express";
const applicantController = require("../controllers/applicantController");

const applicantRouter = Router();

//GET
applicantRouter.get("/index", applicantController.index);
applicantRouter.get("/:applicantId", applicantController.applicantById);

//POST
applicantRouter.post("/create/:userId", applicantController.create);

//PUT
applicantRouter.put("/update/:applicantId", applicantController.update);

//DELETE
applicantRouter.delete("/delete/:applicantId", applicantController.delete);

module.exports = applicantRouter;