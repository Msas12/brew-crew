const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    id: {type: Number},
    name: {type: String},
    brewery_type: {type: String},
    street: {type: String},
    address_2: {type: String},
    address_3: {type: String},
    city: {type: String},
    county_province: {type: String},
    state: {type: String},
    postal_code: {type: Number},
    country: {type: String},
    longitude: {type: Number},
    lattitude: {type: Number},
    phone: {type: Number},
    website_url: {type: String},
    updated_at: {type: Date},
    created_at: {type: Date},
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery