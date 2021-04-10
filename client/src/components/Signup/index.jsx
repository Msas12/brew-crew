import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3004/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data) => {
      console.log(data.body);
    });
  };

  return (
    <div>
      <div className="mt-4">
        <h2 className="mx-auto">Sign Up for Brew Crew!</h2>
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
          <button
            className="btn btn-warning"
            type="submit"
            onSubmit={(e) => handleSubmit()}
          >
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
}

export default Signup;