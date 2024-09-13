import React from "react";
import { Modal, Button } from "react-bootstrap";
import '../../styling/MiscStuff.css';

const AboutAppModal = ({ showModal, handleClose }) => {

    return (
        <>
            <Modal show={showModal} className="about-app-modal">
                <Modal.Header>
                    <Modal.Title className="about-app-title">About Seinfeld Strategy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Recommended: <a href="https://jamesclear.com/stop-procrastinating-seinfeld-strategy" target="_blank" rel="noopener noreferrer">James Clear's blog</a> on the topic.
                    <br /><br />
                    Use this tool to build better habits with Jerry Seinfeld's "Don't Break the Chain" strategy.
                    <br /><br />
                    Behaviors compound over time. Visually reinforce your behavior to help yourself stay motivated.
                    <br /><br />
                    <h5>"Don't Break the Chain"</h5>
                    <br />
                    It's not about perfection, it's about building momentum one day at a time.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AboutAppModal;