// Requiring our models and passport as we've configured it
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.header("Access-Control-Allow-Origin", "*");
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    let encryptedPassword = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10),
      null
    );
    User.create(
      {
        username: req.body.username,
        password: encryptedPassword,
      },
      (err, user) => {
        if (err) {
          console.log(err);
          res.json(err);
        }
        console.log(user);
        res.json(user);
      }
    );
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
