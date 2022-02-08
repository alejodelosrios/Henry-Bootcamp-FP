import { Router } from "express";
const paymentController = require("../controllers/paymentController");

const paymentRouter = Router();

//POST
paymentRouter.post("/checkout", paymentController.checkout);
paymentRouter.post("/payment", paymentController.payment);

module.exports = paymentRouter;
