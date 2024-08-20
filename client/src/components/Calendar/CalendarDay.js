import React from 'react';
import Button from 'react-bootstrap/Button';

const CalendarDay = ({ dayData }) => {
    
    const {date, completed} = dayData;
    const devButton = () => {
        console.log("dayData: ", dayData);
    }
    return (
        <>
            <div style={{margin: '5px', padding: '10px', border: '1px solid black'}}>
                <p>{completed ? "✅" : "❌"}</p>
                <p>{date}</p>
                <Button variant='danger' size="sm" onClick={devButton}>day</Button>
            </div>
        </>
    )
}

export default CalendarDay;