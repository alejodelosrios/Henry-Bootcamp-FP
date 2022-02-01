import { Router } from "express";
const newsController = require("../controllers/newsController");

const newsRouter = Router();

//POST
newsRouter.post("/create", newsController.create);

//GET
newsRouter.get("/index", newsController.index);
newsRouter.get("/:newsId", newsController.newsByNewsId);

//UPDATE
newsRouter.put("/update/:newsId", newsController.update);

//DELETE
newsRouter.delete("/delete/:newsId", newsController.delete);

module.exports = newsRouter;
