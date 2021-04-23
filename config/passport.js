const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(function (username, password, done) {
    // look for the user data
    User.findOne({ username: username }, function (err, user) {
      // if there is an error
      if (err) {
        return done(err);
      }
      // if user doesn't exist
      if (!user) {
        return done(null, false, { message: "User not found." });
      }
      // if the password isn't correct
      if (!bcrypt.compareSync(password, user.password)) {
        console.log(user.password);
        console.log(user);
        console.log(password);

        return done(null, false, {
          message: "Invalid password.",
        });
      }
      // if the user is properly authenticated
      return done(null, user);
    });
  })
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
