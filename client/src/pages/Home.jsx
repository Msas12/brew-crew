import React from "react";
import SearchBar from "../components/SearchBar";
import Brewery from '../components/Brewery'

function Home() {
  return (
<main>
  <SearchBar setBreweries={setBrewieres}/>
  <Brewery breweries={breweries}/>

</main>
  )
}

export default Home;
