import express from 'express';
const mainRouter = require('./routes')
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.use("/api/v1", mainRouter)

app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001")
})