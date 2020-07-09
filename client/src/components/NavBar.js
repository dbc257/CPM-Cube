import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import brandImg from "../small-cube.png";
import { connect } from "react-redux";
import { setAuthenticationHeader } from "../utils/Auth";
import * as actionCreators from "../store/creators/actionCreators";

function NavBar(props) {
  function handleSignOut() {
    props.onAuthenticated(false);
    localStorage.removeItem("jsonwebtoken");
    localStorage.removeItem("jwt_access_token");
    setAuthenticationHeader(null);
  }

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
          {/* {props.isLoggedIn ? (
            <LinkContainer to="/charts">
              <Nav.Link>Charts</Nav.Link>
            </LinkContainer>
          ) : null} to="/"*/}
        </Nav>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link type="button" onClick={handleSignOut}>
              {/* <button>Signout</button> */}
              Signout
            </Nav.Link>
          </LinkContainer>
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginRed.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: (isLoggedIn) =>
      dispatch(actionCreators.authenticated(isLoggedIn)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
