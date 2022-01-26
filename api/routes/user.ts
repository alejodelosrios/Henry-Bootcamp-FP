import { Router } from "express";
const userController = require("../controllers/userController");

const userRouter = Router();

//GET
userRouter.get("/index", userController.index);
// userRouter.get("/:email", userController.userByEmail);

//POST
userRouter.post("/create", userController.create);

//PUT
userRouter.put("/update/:email", userController.update);

//DELETE
userRouter.delete("/delete/:email", userController.delete);

module.exports = userRouter;
