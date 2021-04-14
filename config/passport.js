const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    function (username, password, done) {
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
        if (!bcrypt.compareSync(password, this.password)) {
          return done(null, false, {
            message: "Invalid password.",
          });
        }
        // if the user is properly authenticated
        return done(null, user);
      });
    }
    // Our user will sign in using an email, rather than a "username"
    //     {
    //       usernameField: "email",
    //     },
    //     (email, password, done) => {
    //       // When a user tries to sign in this code runs
    //       //Need to update with MONGOOSE
    //       User.find({
    //         where: {
    //           email: email,
    //         },
    //       }).then((dbUser) => {
    //         // If there's no user with the given email
    //         if (!dbUser) {
    //           return done(null, false, {
    //             message: "Incorrect email.",
    //           });
    //           // eslint-disable-next-line brace-style
    //         }
    //         // If there is a user with the given email, but the password the user gives us is incorrect
    //         else if (!bcrypt.compareSync(password, this.password)) {
    //           return done(null, false, {
    //             message: "Incorrect password.",
    //           });
    //         }
    //         // If none of the above, return the user
    //         return done(null, dbUser);
    //       });
    //     }
  )
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
