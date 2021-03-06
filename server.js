const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passportConfig = require("./config/passport");
const passport = require("passport");

// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3004;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
require("./routes/userRoute.js")(app);
app.use(cors());

app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/User", {
    useNewUrlParser: true,
  })
  .then((_) => console.log("Connected to DB"))
  .catch((err) => console.error("error", err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
