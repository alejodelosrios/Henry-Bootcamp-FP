const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "631654706497-qqvcr2u7k95o2bjprqvlej4epla3bqj5.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
    new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
