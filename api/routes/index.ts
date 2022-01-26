import { Router } from "express";

const applicantRouter = require("./applicant");
const postsRouter = require("./posts");
const companyRouter = require("./company");
const userRouter = require("./user");
const educationRouter = require("./education");
const languageRouter = require("./language");
const experienceRouter = require("./experience");
const newsRouter = require("./news");
const mainRouter = Router();

mainRouter.use("/language", languageRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/applicant", applicantRouter);
mainRouter.use("/posts", postsRouter);
mainRouter.use("/company", companyRouter);
mainRouter.use("/education", educationRouter);
mainRouter.use("/experience", experienceRouter);
mainRouter.use("/news", newsRouter);

module.exports = mainRouter;
