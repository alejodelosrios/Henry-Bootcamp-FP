import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

module.exports = function isAuthorized (roles: string[]) {
    return (req: Request, res: Response, next: Function) => {
        const user = jwt.decode(req.headers.token);
        if (user && roles.join(" "). includes(user.role)) next()
        else res.status(403).send("Access Forbidden")
    }
}