import React, { useRef } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { searchBrewery } from "../../utils/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../utils/GlobalState";

function SearchBar() {
  const [_, dispatch] = useUserContext();
  const searchText = useRef("");

  const splitArrays = (arr) => {
    let retArr = [];
    while (arr.length > 0) {
      let newArr = arr.splice(0, 10);
      retArr.push(newArr);
    }
    console.log("return split array", retArr);
    return retArr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ("") {
      alert("Please enter correct city or state");
    } else {
      const newSearch = searchText.current.value;
      console.log("Hey we are searching for", newSearch);
      searchBrewery(newSearch).then(({ data: breweries }) => {
        console.log("WILL IT WORK?", breweries);
        let newBreweries = splitArrays(breweries);
        // group breweies array into group of 10
        // not this [all the mf brewereies]
        // this [[brewery 1-10], [brewery 11-20], [brewry 21-30]]
        dispatch({
          type: "setBreweries",
          breweries: newBreweries,
        });
      });
    }
  };

  return (
    <InputGroup className="mt-5 mb-3 searchForm">
      <FormControl
        placeholder="Enter a City or State"
        aria-label="Enter a City or State"
        aria-describedby="Brewery Search"
        ref={searchText}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSubmit(event);
          }
        }}
      />
      <InputGroup.Append>
        <Button
          className="searchBtn"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          style={{ backgroundColor: "#d4af49", border: "none" }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default SearchBar;
