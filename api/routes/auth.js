const router = require("express").Router();
const passport = require("passport");
const userValidation = require("../controllers/userValidation");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", async (req, res) => {
    if (req.user) {
        let userData = await userValidation.getUserIfExists(
            req.user.emails[0].value
        );
        if (userData) {
            console.log("userData: ", userData);
            res.status(200).json({
                success: true,
                message: "successfull",
                user: {
                    ...userData,
                },
                cookies: req.cookies,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "successfull",
                user: req.user,
                cookies: req.cookies,
            });
        }
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

router.get(
    "/google",
    passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

module.exports = router;
