import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import searchBrewery from '../../utils/API'


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
  <Form className="searchForm">
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Brewery Search</Form.Label>
      <Form.Control type="text" ref={searchText} placeholder="Enter a City or State" />
      <Button
        className="searchBtn"
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        style={{ backgroundColor: "#d4af49", border: "none" }}
      >
        Search
      </Button>
    </Form.Group>

  </Form>
);
}

export default SearchBar;
