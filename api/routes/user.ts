import { Router } from "express";
const userController = require("../controllers/userController");

const userRouter = Router();

//POST
userRouter.post("/create", userController.create);

//GET
userRouter.get("/index", userController.index);
userRouter.get("/:email", userController.userByEmail);

//PUT
userRouter.put("/update/:userId", userController.update);

//DELETE
userRouter.delete("/delete/:userId", userController.delete);

module.exports = userRouter;
