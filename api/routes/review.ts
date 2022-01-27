import { Router } from "express";
const reviewController = require("../controllers/reviewController")

const reviewRouter = Router();



//POST
reviewRouter.post("/create/:companyId", reviewController.create);  



module.exports = reviewRouter;