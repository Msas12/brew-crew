const router = require("express").Router();
const breweryRoutes = require ("./brewery");

//Brewery Routes
router.use("/brewery", breweryRoutes);

module.exports = router;