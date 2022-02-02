import { Request, Response } from "express";

module.exports = function validateToken () {
  return (req: Request, res: Response, next: Function) => {
    const bearerHeader = req && req.headers.token
    if(typeof bearerHeader !== 'undefined'){
      next()
    } else {
      res.status(403).send("Token invalida")
    }
  }
}