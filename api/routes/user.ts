import { Router } from 'express';
const userController = require("../controllers/userController")

const userRouter = Router()

userRouter.post("/create", userController.create)
userRouter.get("/:id", userController.index)
userRouter.put("/update", userController.update)
userRouter.delete("/delete", userController.delete)

module.exports = userRouter