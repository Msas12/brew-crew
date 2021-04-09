import axios from "axios";
const BASEURL = "https://api.openbrewerydb.org/breweries/search?query=";

export default {
  searchBrewery: function (query) {
    return axios.get(BASEURL + query);
  },
};
