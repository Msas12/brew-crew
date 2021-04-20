import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Brewery from "../components/Brewery";
import { useUserContext } from "../utils/GlobalState";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Home() {
  const [state, _] = useUserContext();
  return (
    <main>
      <SearchBar />
      <Container>
        <Row lg={3} md={2} sm={1} xs={1}>
          {!state.breweries
            ? ""
            : state.breweries.map((brewery) => {
                return (
                  <Col className="mb-3">
                    <Brewery key={brewery.id} brewery={brewery} />
                  </Col>
                );
              })}
        </Row>
      </Container>
    </main>
  );
}

export default Home;
