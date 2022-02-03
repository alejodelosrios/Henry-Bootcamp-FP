import { Router } from "express";
const paymentController = require("../controllers/paymentController");

const paymentRouter = Router();

//POST
paymentRouter.post("/checkout", paymentController.payment);

module.exports = paymentRouter;
