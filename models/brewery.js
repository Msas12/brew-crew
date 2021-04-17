const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    id: {type: Number},
    name: { type: String, required: true },
    brewery_type: { type: String, required: true },
    street : { type: String, required: true },
    address_2: {type: String},
    address_3: {type: String},
    city: { type: String, required: true },
    county_province: {type: String},
    state: { type: String, required: true },
    postal_code: {type: Number},
    country: {type: String},
    longitude: {type: Number},
    lattitude: {type: Number},
    phone: {type: Number},
    website_url: { type: String, required: true },
    updated_at: {type: Date},
    created_at: {type: Date},
    date: { type: Date, default: Date.now }
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
