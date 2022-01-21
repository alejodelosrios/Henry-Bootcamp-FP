import { Router } from 'express';

const userRouter = require("./user")
const postsRouter = require("./posts")
const companyRouter = require("./company")
const roleRouter = require("./role")
const filterRouter = require("./filters")


const mainRouter = Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/posts", postsRouter)
mainRouter.use("/company", companyRouter)
mainRouter.use("/role", roleRouter)
mainRouter.use("/filters", filterRouter)

module.exports = mainRouter