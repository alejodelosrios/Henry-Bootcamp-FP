import { Router } from 'express';

const userRouter = require("./user")
const postsRouter = require("./posts")
const companyRouter = require("./company")
const roleRouter = require("./role")


const mainRouter = Router()

mainRouter.use("/role", roleRouter)
mainRouter.use("/user", userRouter)
mainRouter.use("/posts", postsRouter)
mainRouter.use("/company", companyRouter)

module.exports = mainRouter