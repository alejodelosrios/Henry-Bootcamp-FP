import { Router } from "express";
const userController = require("../controllers/userController");

const userRouter = Router();

//GET
userRouter.get("/index", userController.index);
userRouter.get("/:id", userController.userById);

//POST
userRouter.post("/create", userController.create);

//PUT
userRouter.put("/update/:id", userController.update);

//DELETE
userRouter.delete("/delete/:id", userController.delete);

module.exports = userRouter;
