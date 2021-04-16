import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <InputGroup className="mt-5 mb-3 searchForm">
    <FormControl
      placeholder="Enter a City or State"
      aria-label="Enter a City or State"
      aria-describedby="Brewery Search"
    />
    <InputGroup.Append>
      <Button
        className="searchBtn"
        variant="primary"
        type="submit"
        style={{ backgroundColor: "#D4AF49", border: "none" }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup.Append>
  </InputGroup>
  )
}

export default SearchBar;
