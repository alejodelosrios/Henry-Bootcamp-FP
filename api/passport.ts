const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const axios = require('axios');

const GOOGLE_CLIENT_ID = '631654706497-qqvcr2u7k95o2bjprqvlej4epla3bqj5.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function(accessToken, refreshToken, profile, cb) {
        axios({
            type: "POST",
            url: "http://localhost:3001/api/v1/user/create",
            data: {
                roleId: 1,
                firstName: "",
                lastName: "",
                about: "",
                phoneNumber: "",
                email: "",
                country: "",
                image: "",
                showImage: true,
                skillTags: [],
                experience: [],
                education: [],
                languages: [],
                googleId: profile.id
            }
        })
}
));

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
});