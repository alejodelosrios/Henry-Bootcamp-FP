import { Router } from "express";
const notificationController = require("../controllers/notificationController");

const notificationRouter = Router();

//POST
notificationRouter.post("/create", notificationController.create);

//GET
notificationRouter.get("/index", notificationController.index);
notificationRouter.get("/:email", notificationController.notificationByNotificationId);

//PUT
notificationRouter.put("/update/:notificationId", notificationController.update);

//DELETE
notificationRouter.delete("/delete/:notificationId", notificationController.delete);

module.exports = notificationRouter;
