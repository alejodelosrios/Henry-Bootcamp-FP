import { Router } from "express";
const applicantController = require("../controllers/applicantController");

const experienceRouter = require("./experience");
const educationRouter = require("./education");
const languageRouter = require("./language");

const isAuthorized = require("./middlewares/isAuthorized")


const applicantRouter = Router();

//MIDDLEWARES

applicantRouter.use("/experience", isAuthorized(["admin", "applicant"]), experienceRouter);
applicantRouter.use("/education", isAuthorized(["admin", "applicant"]), educationRouter);
applicantRouter.use("/language", isAuthorized(["admin", "applicant"]), languageRouter);

//POST
applicantRouter.post("/create/:userId", isAuthorized(["admin"]), applicantController.create);
applicantRouter.post("/review/:companyId", isAuthorized(["admin", "applicant"]), applicantController.review)

//GET
applicantRouter.get("/index", isAuthorized(["admin", "applicant"]), applicantController.index);
applicantRouter.get("/:applicantId",  isAuthorized(["admin", "applicant"]), applicantController.applicantById);

//PUT
applicantRouter.put("/update/:applicantId", isAuthorized(["admin", "applicant"]), applicantController.update);
applicantRouter.put("/tags", isAuthorized(["admin", "applicant"]), applicantController.tags);

//Save the applications to which an applicant has subscribed
applicantRouter.put("/apply", isAuthorized(["admin", "applicant"]), applicantController.apply);

// Save the applications that the applicant marked as favorites
applicantRouter.put("/favorite", isAuthorized(["admin", "applicant"]), applicantController.addfavorite);

// Save the companies that an applicant follows
applicantRouter.put("/follow", isAuthorized(["admin", "applicant"]), applicantController.follow);

//DELETE
applicantRouter.delete("/delete/:applicantId", isAuthorized(["admin", "applicant"]), applicantController.delete);

module.exports = applicantRouter;
