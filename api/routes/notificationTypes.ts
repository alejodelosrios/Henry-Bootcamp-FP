import { Router } from "express";
const notificationTypeController = require("../controllers/notificationTypeController");

const notificationTypeRouter = Router();

//GET
notificationTypeRouter.get("/index", notificationTypeController.index);

//POST
notificationTypeRouter.post("/create", notificationTypeController.create);

//PUT
notificationTypeRouter.put(
  "/update/:typeId",
  notificationTypeController.update
);

//DELETE
notificationTypeRouter.delete(
  "/delete/:typeId",
  notificationTypeController.delete
);

module.exports = notificationTypeRouter;
