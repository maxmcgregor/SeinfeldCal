import React from "react";
import Button from 'react-bootstrap/Button';

const CalendarSwitcher = ({onNext, onPrev}) => {
    return (
        <div>
            <Button onClick={onPrev}>Previous</Button>
            <Button onClick={onNext}>Next</Button>
        </div>
    )
}

export default CalendarSwitcher;