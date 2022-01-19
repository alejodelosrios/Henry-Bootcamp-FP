import { Router } from 'express';
const postController = require("../controllers/postController")

const postRouter = Router()

postRouter.use("/create", postController.create)
postRouter.use("/index", postController.index)
postRouter.use("/update", postController.update)
postRouter.use("/delete", postController.delete)

module.exports = postRouter