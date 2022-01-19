import { Router } from 'express';

const userRouter = require("./user")
const postRouter = require("./post")
const companyRouter = require("./company")
const roleRouter = require("./role")


const mainRouter = Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/post", postRouter)
mainRouter.use("/company", companyRouter)
mainRouter.use("/role", roleRouter)

module.exports = mainRouter