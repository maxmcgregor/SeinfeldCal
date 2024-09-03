import React from "react";
import  Nav  from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import  NavDropdown  from "react-bootstrap/NavDropdown";

const NavBar = ({onLogout}) => {
    
    return (
        <Navbar sticky="top" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
                <Navbar.Brand href="#home">Seinfeld Cal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About the app</Nav.Link>
                        <Nav.Link href="https://maxmcgregor.com" target="_blank">The Creator</Nav.Link>
                        <NavDropdown title="Profile (maybe profile pic)" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={onLogout}>
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;