import React from "react";
// { useRef }
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import searchBrewery from "../../utils/API";

function SearchBar() {
  // const searchText = useRef("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if ("") {
  //     alert("Please enter correct city or state");
  //   } else {
  //     const newSearch = searchText.current.value;
  //     searchBrewery(newSearch);
  //   }

    return (
      <InputGroup className="mt-5 mb-3 searchForm">
        <FormControl
          // ref={searchText}
          placeholder="Enter a City or State"
          aria-label="Enter a City or State"
          aria-describedby="Brewery Search"
        />
        <InputGroup.Append>
          <Button
            className="searchBtn"
            variant="primary"
            type="submit"
            // onClick={handleSubmit}
            style={{ backgroundColor: "#d4af49", border: "none" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  };
// }

export default SearchBar;
