import express from 'express';
import { PrismaClient } from "@prisma/client";
const mainRouter = require('./routes')

const app = express();
app.use(express.json());

export const prisma = new PrismaClient();

app.use("/api/v1", mainRouter)

app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001")
})