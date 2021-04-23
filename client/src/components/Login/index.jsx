import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useUserContext } from "../../utils/GlobalState";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();
  const [state, dispatch] = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3004/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data, err) => {
      console.log(data.body);
      console.log(err);
      dispatch({ type: "login", user: { username } });
      setErrors("Password is incorrect");
    });
  };
  console.log(state);
  if (state.user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="mt-4">
        <h2 className="text-center">Welcome to Brew Crew!</h2>
        <h2 className="text-center">Sign in Here:</h2>
        {errors && <div>There was an error {errors}</div>}
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
              className="btn btn-warning"
              type="submit"
              onSubmit={(e) => handleSubmit()}
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Or Sign Up<Link to="/signup"> Here:</Link>
          </p>
        </Container>
      </form>
    </div>
  );
}

export default Login;
