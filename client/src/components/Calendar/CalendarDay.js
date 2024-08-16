import React from 'react';
import Button from 'react-bootstrap/Button';

const CalendarDay = ({ dateIso, completed }) => {
    
    const date = new Date(dateIso).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric'
    })
    
    return (
        <>
            <div style={{margin: '5px', padding: '10px', border: '1px solid black'}}>
                <p>{completed ? "✅" : "❌"}</p>
                <p>{date}</p>
            </div>
        </>
    )
}

export default CalendarDay;