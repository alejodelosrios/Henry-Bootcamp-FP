import { Router } from 'express';
const postController = require("../controllers/postController")

const postRouter = Router()

postRouter.post("/create", postController.create)
postRouter.get("/index", postController.index)
postRouter.put("/update", postController.update)
postRouter.delete("/delete", postController.delete)

module.exports = postRouter