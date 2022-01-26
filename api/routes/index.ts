import { Router } from 'express';

const applicantRouter = require("./applicant")
const postsRouter = require("./posts")
const companyRouter = require("./company")
const userRouter = require("./user")
const experienceRouter = require("./experience")


const mainRouter = Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/applicant", applicantRouter)
mainRouter.use("/posts", postsRouter)
mainRouter.use("/company", companyRouter)
mainRouter.use("/experience", experienceRouter)

module.exports = mainRouter