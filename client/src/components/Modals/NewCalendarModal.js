import React, { useState, useEffect } from "react";
import { Modal, Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import '../../styling/MiscStuff.css';

const NewCalendarModal = ({ showModal, handleClose, userId, onCalendarAdded }) => {

    const [habitName, setHabitName] = useState("");
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_NODE_BASE_URL}/api/habits/new_habit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    habitName,
                    startDate,
                }),
            });

            if (response.ok) {
                onCalendarAdded();
                handleClose();
            } else {
                console.error("Error adding new habit");
            }
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    }

    useEffect(() => {
        if (showModal) {
            setHabitName("");
            setStartDate(new Date().toISOString().split('T')[0]);
        }
    }, [showModal]);

    const handleModalClose = () => {
        setHabitName("");
        setStartDate(new Date().toISOString().split('T')[0]);
        handleClose();
    }

    return (
        <>
            <Modal show={showModal} onHide={handleModalClose} className="new-calendar-modal">
                <Modal.Header>
                    <Modal.Title>Create New Habit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="habitName">
                                    <FloatingLabel label="Habit Name">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter habit name"
                                            maxLength={36}
                                            value={habitName}
                                            onChange={(e) => setHabitName(e.target.value)}
                                            required
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <FloatingLabel label="Start Date">
                                        <Form.Control
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            required
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Modal.Footer className="d-flex justify-content-center gap-2">
                            <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                            <Button variant="success" type="submit">Add Habit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewCalendarModal;