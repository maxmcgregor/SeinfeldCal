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
                    For a thorough description, read <a href="https://jamesclear.com/stop-procrastinating-seinfeld-strategy" target="_blank" rel="noopener noreferrer">James Clear's blog</a> on the topic.
                    <br /><br />
                    Use this tool to build better habits with Jerry Seinfeld's "Don't Break the Chain" strategy.
                    <br /><br />
                    Small behaviors compound over time. By visually reinforcing your behavior with this calendar, you'll help yourself stay motivated to maintain your streak of behavior.
                    <br /><br />
                    <h5>"Don't Break the Chain"</h5>
                    <br />
                    It's not about perfection, it's about building momentum towards the person you want to become - one day at a time.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AboutAppModal;