import React from "react";
import { Modal, Button } from "react-bootstrap";

const AboutAppModal = ({ showModal, handleClose }) => {

    return (
        <>
            <Modal show={showModal}>
                <Modal.Header>
                    About Seinfeld Strategy
                </Modal.Header>
                <Modal.Body>
                    For a thorough description, I defer to <a href="https://jamesclear.com/stop-procrastinating-seinfeld-strategy" target="_blank" rel="noopener noreferrer">James Clear's blog</a> on the topic.
                    <br /><br/>
                    Use this tool to build better habits with Jerry Seinfeld's "Don't Break the Chain" strategy.
                    <br/><br/>
                    Small behaviors compound over time. By visually reinforcing your behavior with this calendar, the app helps keeps you motivated to maintain your streak of behavior.
                    <br /><br />
                    "Don't Break the Chain"
                    <br /><br />
                    It's not about perfection, it's about building momentum towards the person you want to become - one day at a time.
                    {/* <iframe
                        src="https://maxmcgregor.com"
                        width="100%"
                        height="400px"
                        title="maxmcgregor.com"
                        style={{border: 'none'}}
                    ></iframe> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AboutAppModal;