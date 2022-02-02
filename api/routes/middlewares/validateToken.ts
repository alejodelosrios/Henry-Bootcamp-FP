import { Request, Response } from "express";

module.exports = function validateToken () {
  return (req: Request, res: Response, next: Function) => {
    if(req.headers.token){
      next()
    } else {
      res.status(403).send("Token invalida")
    }
  }
}