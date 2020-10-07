const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
const User = require('../../db/models/Users.js');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log('User is: ', currentUser);
          done(null, currentUser);
        } else {
          new User({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            googleId: profile.id,
            email: '',
            address: '',
          })
            .save()
            .then((newUser) => {
              console.log('Added user: ', newUser);
              done(null, newUser);
            })
            .catch((err) => {
              console.log('Could not save user to database.', err);
            });
        }
      });
    }
  )
);
