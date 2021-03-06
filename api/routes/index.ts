import { Router } from "express";
const userRouter = require("./user");

const companyRouter = require("./company");
const applicantRouter = require("./applicant");

const postsRouter = require("./posts");
const tagsRouter = require("./tags");
const categoryRouter = require("./category");

const notificationRouter = require("./notification");
const newsRouter = require("./news");

//VALIDADOR DE QUE EXISTE TOKEN
const validateToken = require("./middlewares/validateToken");

// const notificationTypeRouter = require("./notificationTypes");

const mainRouter = Router();

mainRouter.use("/user", userRouter);

mainRouter.use("/company", companyRouter);
mainRouter.use("/applicant", validateToken(), applicantRouter);

mainRouter.use("/posts", postsRouter);
mainRouter.use("/tag", tagsRouter);
mainRouter.use("/category", validateToken(), categoryRouter);

mainRouter.use("/notification", validateToken(), notificationRouter);
mainRouter.use("/news", newsRouter);

// mainRouter.use("/notification/types", notificationTypeRouter);

module.exports = mainRouter;
