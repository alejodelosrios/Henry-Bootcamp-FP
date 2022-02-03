import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

module.exports = function isAuthorized (role: string) {
    return (req: Request, res: Response, next: Function) => {
        const user = jwt.decode(req.headers.token);
        if (user && user.role === role) return next()
        else return res.redirect("/login")
    }
}