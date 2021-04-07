import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavTabs() {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src="imgs/brewcrew.png" alt="brand icon" width="75" height="75" />{" "}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/favorites"
            className={
              location.pathname === "/favorites"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Favorites
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/signup"
            className={
              location.pathname === "/signup" ? "nav-link active" : "nav-link"
            }
          >
            Login/Signup
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
