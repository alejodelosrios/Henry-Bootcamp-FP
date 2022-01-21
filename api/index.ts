import express from 'express';
const mainRouter = require('./routes')

const app = express();
app.use(express.json());

app.use("/api/v1", mainRouter)

app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001")
})