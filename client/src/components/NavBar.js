import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
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
          <LinkContainer to="login">
            <Nav.Link>Login Register</Nav.Link>
          </LinkContainer>
          {/* <Nav.Link eventKey={2} href="/login">
            Login or Register
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
