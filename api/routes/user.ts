import { Router } from 'express';
const userController = require("../controllers/userController")

const userRouter = Router()

//GET
userRouter.get("/index", userController.index)
userRouter.get("/:email", userController.userByEmail)

//POST
userRouter.post("/create", userController.create)

//PUT

//DELETE
userRouter.delete("/delete/:email", userController.delete)

//DEBAJO LAS QUE AUN NO ESTAN COMPLETADAS
userRouter.put("/update", userController.update)


module.exports = userRouter