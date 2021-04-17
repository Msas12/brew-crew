import axios from "axios";
const BASEURL = "https://api.openbrewerydb.org/breweries/search?query=";

const searchBrewery = (query)  => {
    console.log('hello?')
    return axios.get(BASEURL + query)
}
const addBrewery = (breweryToAdd) => {
  console.log('hello we are going to add  this brewery', breweryToAdd)
}
export { searchBrewery, addBrewery }