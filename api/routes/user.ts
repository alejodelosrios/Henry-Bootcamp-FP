import { Router } from "express";
const userController = require("../controllers/userController");
const isAuthorized = require("./middlewares/isAuthorized");

const userRouter = Router();

//POST
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

//GET
userRouter.get("/index", userController.index);

//PUT
userRouter.put("/admin", isAuthorized(["admin"]), userController.userToAdmin)
userRouter.put("/login/reset/:email", userController.resetPassword)
userRouter.put("/update/:userId", userController.update);

//DELETE
userRouter.delete("/delete/:userId", userController.delete);

module.exports = userRouter;
