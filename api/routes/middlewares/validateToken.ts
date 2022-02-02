import { Request, Response } from "express";

module.exports = function validateToken (req: Request, res: Response, next: Function) {
    const bearerHeader = req.headers.token
    if(typeof bearerHeader !== 'undefined'){
      next()
    } else {
      res.status(403).send("Token invalida")
    }
  } 