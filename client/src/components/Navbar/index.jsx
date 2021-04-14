import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function NavTabs() {
  const location = useLocation();

  const [menuButton, setMenuButton] = useState({
    icon: faBars,
  });

  const handleClick = () => {
    if (menuButton.icon === faBars) {
      return setMenuButton({ icon: faTimes });
    } else {
      return setMenuButton({ icon: faBars });
    }
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src="imgs/brewcrew.png" alt="brand icon" width="90" height="90" />{" "}
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ border: "none" }}
        onClick={() => handleClick()}
      >
        <span>
          <FontAwesomeIcon
            className="fa"
            icon={menuButton.icon}
            size="2x"
            color="#d4af49"
          />
        </span>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            className={
              location.pathname === "/"
                ? "nav-link active mx-auto"
                : "nav-link mx-auto"
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/favorites"
            className={
              location.pathname === "/favorites"
                ? "nav-link active mx-auto"
                : "nav-link mx-auto"
            }
          >
            Favorites
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            className={
              location.pathname === "/login"
                ? "nav-link active mx-auto"
                : "nav-link mx-auto"
            }
          >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
