import { Router } from "express";
const tagsController = require("../controllers/tagsController");
const validateToken = require("./middlewares/validateToken");
const isAuthorized = require("./middlewares/isAuthorized");

const tagsRouter = Router();

//POST
tagsRouter.post(
  "/create",
  isAuthorized(["admin", "applicant", "company"]),
  tagsController.create
);

//GET
tagsRouter.get("/index", tagsController.index);
tagsRouter.get("/:tagId", tagsController.tagById);

//UPDATE
tagsRouter.put(
  "/update/:tagId",
  isAuthorized(["admin", "applicant", "company"]),
  tagsController.update
);

//DELETE
tagsRouter.delete(
  "/delete/:tagId",
  isAuthorized(["admin", "applicant", "company"]),
  tagsController.delete
);

module.exports = tagsRouter;
