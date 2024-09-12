import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AboutAppModal from "../components/Modals/AboutAppModal";
import '../styling/NavBar.css';

const NavBar = ({ logoutGoogle, user, setShowNewCalendarModal }) => {

    const [showAboutAppModal, setShowAboutAppModal] = useState(false);
    const userId = user ? user.id : null;

    return (
        <>
            <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary px-4">
                <Navbar.Brand>Seinfeld Strategy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-links">
                        <Nav.Link onClick={()=>setShowAboutAppModal(true)}>About the app</Nav.Link>
                        <Nav.Link href="https://maxmcgregor.com" target="_blank">About the Creator</Nav.Link>
                        {userId && (<Nav.Link onClick={() => setShowNewCalendarModal(true)}>Add New Habit</Nav.Link>)}
                    </Nav>
                    <Nav className="ms-auto">
                        {userId && (
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={logoutGoogle}>Log out</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <AboutAppModal
                showModal={showAboutAppModal}
                handleClose={() => setShowAboutAppModal(false)}
            />
        </>
    );
}

export default NavBar;
