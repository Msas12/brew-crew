import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Brewery from "../components/Brewery";
import { useUserContext } from "../utils/GlobalState";

function Home() {
  const [state, dispatch] = useUserContext();
  return (
    <main>
      <SearchBar />
      {!state.breweries
        ? ""
        : state.breweries.map((brewery) => {
            return <Brewery brewery={brewery} />;
          })}
    </main>
  );
}

export default Home;
