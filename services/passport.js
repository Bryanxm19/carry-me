const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // allow https
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleID: profile.id })
    if(existingUser) {
      done(null, existingUser);
    }
    else {
      const email = profile.emails[0].value
      var username = email.split('@')[0]
      username = username.length <=15 ? username : username.substring(0,15)
      const user = await new User({ googleID: profile.id, email, username }).save();
      done(null, user);
    }
  })
);