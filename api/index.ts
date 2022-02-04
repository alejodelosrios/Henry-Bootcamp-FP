import express from "express";
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const mainRouter = require("./routes/index");

const app = express();
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["PF"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.use("/api/v2", mainRouter);

app.use(cors({origin: 'http://localhost:3000'}));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    "SERVER RUNNING ON PORT 3001"
  );
})

