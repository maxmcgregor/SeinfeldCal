import React from "react";
import Modal from 'react-bootstrap/Modal';
import GoogleAuth from "../Authentication/GoogleAuth";
import '../../styling/LoginPage.css';

const LoginModal = ({ setUser, setToken }) => {

    return (
        <Modal show={true} centered={true} className="login-modal-custom">
            <Modal.Body>
                <h2>Welcome to Seinfeld Calendar</h2>
                <p>To create your own trackers, login with Google</p>
                <div className="d-flex justify-content-center">
                    <GoogleAuth setUser={setUser} setToken={setToken} />
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default LoginModal;