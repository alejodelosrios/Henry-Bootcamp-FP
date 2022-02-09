import { Router } from "express";
const newsController = require("../controllers/newsController");
const isAuthorized = require("./middlewares/isAuthorized");


const newsRouter = Router();

//POST
newsRouter.post("/create", isAuthorized(["admin"]), newsController.create);
newsRouter.post("/subscribe/:email", newsController.subscribe);
newsRouter.post("/unsubscribe/:email", newsController.unsubscribe);

//GET
newsRouter.get("/index", newsController.index);
newsRouter.get("/:newsId", newsController.newsByNewsId);

//UPDATE
newsRouter.put("/update/:newsId", isAuthorized(["admin"]), newsController.update);

//DELETE
newsRouter.delete("/delete/:newsId", isAuthorized(["admin"]), newsController.delete);

module.exports = newsRouter;
