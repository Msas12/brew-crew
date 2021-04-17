import React, { useRef } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import searchBrewery from '../../utils/API'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {

  const searchText = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if ('') {
      alert("Please enter correct city or state")
    } else {
      const newSearch = (searchText.current.value)
      searchBrewery(newSearch)
    }
  }

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
