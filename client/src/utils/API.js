import axios from "axios";
const BASEURL = "https://api.openbrewerydb.org/breweries/search?query=";

export default {
  searchBrewery: function (query) {
    console.log("YEET!!!!")
    return axios.get(BASEURL + query);
  },
};
