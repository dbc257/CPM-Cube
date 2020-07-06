import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Register</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Login
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

