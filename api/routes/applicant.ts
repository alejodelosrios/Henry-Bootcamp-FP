import { Router } from "express";
const applicantController = require("../controllers/applicantController");

const applicantRouter = Router();

//GET
applicantRouter.get("/index", applicantController.index);
applicantRouter.get("/:applicantId", applicantController.applicantById);
applicantRouter.put("/tags", applicantController.tags);
//POST
applicantRouter.post("/create/:userId", applicantController.create);

//PUT
applicantRouter.put("/update/:applicantId", applicantController.update);

//Save the applications to which an applicant has subscribed
applicantRouter.put("/apply", applicantController.apply);

// Save the applications that the applicant marked as favorites
applicantRouter.put("/favourite", applicantController.addfavourite);

// Save the companies that an applicant follows
applicantRouter.put("/follow", applicantController.follow);

//DELETE
applicantRouter.delete("/delete/:applicantId", applicantController.delete);

module.exports = applicantRouter;
