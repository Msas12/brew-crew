const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  id: Number,
  name: { type: String, required: true },
  brewery_type: { type: String, required: true },
  street : { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  website_url: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;