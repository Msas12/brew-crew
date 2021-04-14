import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchBar() {
  return (
    <Form className="searchForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Brewery Search</Form.Label>
        <Form.Control type="email" placeholder="Enter a City or State" />
        <Button
        className="searchBtn"
        variant="primary"
        type="submit"
        style={{ backgroundColor: "#d4af49", border: "none" }}
      >
        Search
      </Button>
      </Form.Group>
      
    </Form>
  );
}

export default SearchBar;
