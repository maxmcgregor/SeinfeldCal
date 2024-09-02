import React, {useState, useEffect} from "react";
import { Modal, Button, Form } from "react-bootstrap";

const NewCalendarModal = ({ showModal, handleClose, userId }) => {
    
    const [habitName, setHabitName] = useState("");
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`New habit: ${habitName}, ${startDate}`);
        try {
            const response = await fetch('http://localhost:5001/api/habits/new_habit', {
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
        <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header>
                    <Modal.Title>Create New Habit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="habitName">
                            <Form.Label>Habit Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter habit name"
                                maxLength={36}
                                value={habitName}
                                onChange={(e) => setHabitName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Habit Start Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </Form.Group>
                    <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                    <Button variant="primary" type="submit">Add Habit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
        </Modal>
        </>
    )
}

export default NewCalendarModal;