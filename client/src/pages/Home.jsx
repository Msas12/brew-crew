import React from "react";
import SearchBar from "../components/SearchBar";
import Brewery from "../components/Brewery";
import { useUserContext } from "../utils/GlobalState";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Home() {
  const [state, dispatch] = useUserContext();
  const updateIndex = (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    dispatch({
      type: "iterateIndex",
      payload: e.target.textContent, // will evaluate to the button text
    });
  };

  console.log(state.breweries);
  console.log(state.index);

  return (
    <main>
      <Container>
        <SearchBar />
        <Row xl={3} lg={2} md={2} sm={1} xs={1}>
          {!state.breweries
            ? ""
            : state.breweries[state.index].map((brewery) => {
                return (
                  <Col key={brewery.id} className="mb-3">
                    <Brewery key={brewery.id} brewery={brewery} />
                  </Col>
                );
              })}
        </Row>
        {!state.breweries ? (
          ""
        ) : (
          <p>{state.breweries[state.index].website_url}</p>
        )}
      </Container>
      {/* dynamically generate buttons based on breweries array length */}
      <div className="row justify-content-center">
        {!state.breweries
          ? ""
          : state.breweries.map((brewery, index) => {
              return (
                <button
                  className="m-1 btn"
                  style={{ backgroundColor: "#d4af49" }}
                  onClick={updateIndex}
                >
                  {index}
                </button>
              );
            })}
      </div>
    </main>
  );
}

export default Home;
