import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import brandImg from "../small-cube.png";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={brandImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="brand logo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/charts">
            <Nav.Link>Charts</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/login">
            <Nav.Link>Login Register</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer eventKey={2} to="/login">
            <Nav.Link>Login or Register</Nav.Link>
          </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
