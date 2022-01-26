import { Router } from "express";

const applicantRouter = require("./applicant");
const postsRouter = require("./posts");
const companyRouter = require("./company");
const userRouter = require("./user");
const educationRouter = require("./education");
const languageRouter = require("./language");

const mainRouter = Router();

mainRouter.use("/language", languageRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/applicant", applicantRouter);
mainRouter.use("/posts", postsRouter);
mainRouter.use("/company", companyRouter);
mainRouter.use("/education", educationRouter);

module.exports = mainRouter;
