import { Router } from 'express';
const userController = require("../controllers/userController")

const userRouter = Router()

userRouter.use("/create", userController.create)
userRouter.use("/index", userController.index)
userRouter.use("/update", userController.update)
userRouter.use("/delete", userController.delete)

module.exports = userRouter