import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NewCalendarModal from "../components/Modals/NewCalendarModal";
import '../styling/NavBar.css';
import AboutAppModal from "../components/Modals/AboutAppModal";

const NavBar = ({ onLogout, user }) => {

    const [showNewCalendarModal, setShowNewCalendarModal] = useState(false);
    const [showAboutAppModal, setShowAboutAppModal] = useState(false);
    const userId = user ? user.id : null;

    return (
        <>
            <Navbar sticky="top" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
                <Navbar.Brand href="#home">Seinfeld Cal</Navbar.Brand>
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
                                <NavDropdown.Item onClick={onLogout}>Log out</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <NewCalendarModal
                showModal={showNewCalendarModal}
                handleClose={() => setShowNewCalendarModal(false)}
                userId={userId}
            />
            <AboutAppModal
                showModal={showAboutAppModal}
                handleClose={() => setShowAboutAppModal(false)}
            />
        </>
    );
}

export default NavBar;
