import { Router } from 'express';
const postController = require("../controllers/postController")

const postRouter = Router()

postRouter.get("/",  postController.allposts)
postRouter.post("/create", postController.create)
postRouter.get("/:id",  postController.index)
postRouter.put("/update", postController.update)
postRouter.delete("/delete", postController.delete)

module.exports = postRouter