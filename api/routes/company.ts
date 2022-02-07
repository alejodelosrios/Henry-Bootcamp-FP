import { Router } from "express";
const companyController = require("../controllers/companyController");

const paymentRouter = require("./payment");

const isAuthorized = require("./middlewares/isAuthorized");

const companyRouter = Router();

//MIDDLEWARES
companyRouter.use("/payment", paymentRouter);

//POST
companyRouter.post(
  "/create/:userId",
  isAuthorized(["admin"]),
  companyController.create
);

//GET
companyRouter.get(
  "/index",
  isAuthorized(["admin", "company"]),
  companyController.index
);
companyRouter.get("/:companyId", companyController.companyById);
companyRouter.get(
  "/posts/:companyId",
  isAuthorized(["admin", "company"]),
  companyController.getPosts
);

//PUT
companyRouter.put(
  "/application",
  isAuthorized(["admin", "company"]),
  companyController.updateApplicationStatus
);
companyRouter.put(
  "/favorites",
  isAuthorized(["admin", "company"]),
  companyController.addFavoriteApplicant
);
companyRouter.put(
  "/add-image/:companyId",
  isAuthorized(["admin", "company"]),
  companyController.addImage
);
companyRouter.put(
  "/update/:companyId",
  isAuthorized(["admin", "company"]),
  companyController.update
);

//DELETE
companyRouter.delete(
  "/delete/:companyId",
  isAuthorized(["admin", "company"]),
  companyController.delete
);

module.exports = companyRouter;
