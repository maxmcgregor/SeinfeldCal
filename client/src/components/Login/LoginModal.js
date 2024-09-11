import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import GoogleAuth from "../Authentication/GoogleAuth";
import '../../styling/LoginPage.css';
import AboutAppModal from "../Modals/AboutAppModal";
import Button from "react-bootstrap/button";

const LoginModal = ({ setUser, setToken }) => {

    const [showAboutAppModal, setShowAboutAppModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(true);

    return (
        <>
            <Modal show={showLoginModal} centered={true} className="login-modal-custom">
                <Modal.Body>
                    <div className="button-container">
                        <Button variant="secondary" onClick={() => {
                            setShowAboutAppModal(true)
                            setShowLoginModal(false)
                        }}>
                            About the App
                        </Button>
                        <Button variant="secondary" href="https://maxmcgregor.com" target="_blank">
                            About the Creator
                        </Button>
                    </div>
                    <h2>Welcome to Seinfeld Calendar</h2>
                    <p>To create your own trackers, login with Google</p>
                    <div className="d-flex justify-content-center">
                        <GoogleAuth setUser={setUser} setToken={setToken} />
                    </div>
                </Modal.Body>
            </Modal>
            <AboutAppModal
                showModal={showAboutAppModal}
                handleClose={() => {
                    setShowAboutAppModal(false)
                    setShowLoginModal(true)
                }}
            />
        </>
    )
}

export default LoginModal;