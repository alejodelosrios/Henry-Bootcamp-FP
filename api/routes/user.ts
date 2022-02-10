import { Router } from "express";
const userController = require("../controllers/userController");
const isAuthorized = require("./middlewares/isAuthorized");

const userRouter = Router();

//POST
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

//GET
userRouter.get("/index", isAuthorized(["admin"]), userController.index);

//PUT
userRouter.put("/admin", isAuthorized(["admin"]), userController.userToAdmin)
userRouter.put("/login/reset/:email", isAuthorized(["admin", "applicant", "company"]), userController.resetPassword)
userRouter.put("/update/:userId", isAuthorized(["admin", "applicant", "company"]), userController.update);

//DELETE
userRouter.delete("/delete/:userId", isAuthorized(["admin", "applicant", "company"]), userController.delete);

module.exports = userRouter;
