import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CalendarDay = ({ dayData, habitStartDate }) => {

    const { date, completed: initialCompleted, habitDayId } = dayData;
    const [completed, setCompleted] = useState(initialCompleted);

    const devButton = () => {
        console.log("dayData: ", dayData);
    }

    const completedIcon = habitDayId !== null ? (completed ? "✅" : "❌") : '🔮';
    const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
    
    const handleIconClick = () => {
        
        if (habitDayId !== null) {
            const newCompleted = !completed;
            setCompleted(newCompleted);
            updateHabitDayCompleted(habitDayId, newCompleted);
        } else {
            const currentDate = new Date();
            const habitStart = new Date(habitStartDate);
            const clickedDate = new Date(date);
            
            if (clickedDate < habitStart) {
                console.error("Dang, you time traveled to complete your habit before you even started it? Badass.");
                return;
            }
            
            if (clickedDate > currentDate) {
                console.error("Dang, you time traveled to complete your habit in the future? Badass.");
                return;
            }

        }
    }

    const updateHabitDayCompleted = async (habitDayId, completed) => {

        try {
            const response = await fetch(`http://localhost:5001/api/habit_days/completed/${habitDayId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed }),
            });

            if (!response.ok) {
                throw new Error(`Failed to update habit day ${date}`);
            }

            const result = await response.json();
            
        } catch (err) {
            console.error(`Error updating habit day ${date} : ${err}`);
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
                    onClick={handleIconClick}
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