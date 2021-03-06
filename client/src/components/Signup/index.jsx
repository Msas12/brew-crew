import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();
  const apiBaseUrl =
    process.env.NODE_ENV === "development" ? "localhost:3004" : "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiBaseUrl + "api/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data) => {
      console.log(data.body);
      history.push("/login");
      // dispatch({ type: "signedup", user: { username } });
    });
  };

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-center" style={{ color: "#d4af49" }}>
          Sign Up for Brew Crew!
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mx-auto mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <button
              className="btn"
              style={{ backgroundColor: "#d4af49" }}
              type="submit"
              onSubmit={(e) => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </Container>
      </form>
    </div>
  );
}

export default Signup;
