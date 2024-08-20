import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CalendarDay = ({ dayData }) => {

    const { date, completed: initialCompleted, habitDayId } = dayData;
    const [completed, setCompleted] = useState(initialCompleted);
    
    const devButton = () => {
        console.log("dayData: ", dayData);
    }

    const completedIcon = habitDayId !== null ? (completed ? "✅" : "❌") : '🔮';
    const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
    const handleIconClick = () => {
        if (habitDayId !== null) {
            setCompleted(prevCompleted => !prevCompleted);
        }
    }
    
    return (
        <>
            <div>
                <div style={{
                    margin: '5px',
                    padding: '10px',
                    border: '1px solid black',
                    cursor: habitDayId !== null ? 'pointer' : 'default'
                }}
                    onClick={ handleIconClick}
                >
                    <p>{completedIcon}</p>
                </div>
                    <p>{formattedDate}</p>
                {/* <Button variant='danger' size="sm" onClick={devButton}>day</Button> */}
            </div>
        </>
    )
}

export default CalendarDay;