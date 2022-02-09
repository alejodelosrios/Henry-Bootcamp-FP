import { Router } from "express";
const newsController = require("../controllers/newsController");

const newsRouter = Router();

//POST
newsRouter.post("/create", newsController.create);
newsRouter.post("/subscribe/:email", newsController.subscribe);
newsRouter.post("/unsubscribe/:email", newsController.unsubscribe);

//GET
newsRouter.get("/index", newsController.index);
newsRouter.get("/:newsId", newsController.newsByNewsId);

//UPDATE
newsRouter.put("/update/:newsId", newsController.update);

//DELETE
newsRouter.delete("/delete/:newsId", newsController.delete);

module.exports = newsRouter;
