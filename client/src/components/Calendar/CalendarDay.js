import React, { useState } from 'react';
import { FormatDate, ShouldTheMonthBeDisplayed } from '../../utils/CalendarHelpers';
import '../../styling/CalendarDay.css';
import Button from 'react-bootstrap/Button';

const CalendarDay = ({ dayData, habitStartDate }) => {

    const { date, completed: initialCompleted, habitDayId } = dayData;
    const [completed, setCompleted] = useState(initialCompleted);

    const devButton = () => {
        console.log("displayMonth: " , displayMonth);
        console.log("monthName: " , monthName);
    }
    
    const updateHabitDayCompleted = async (habitDayId, completed) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_NODE_BASE_URL}/api/habit_days/completed/${habitDayId}`, {
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
    };

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

    const backgroundColor = habitDayId !== null ? (completed ? 'lightgreen' : 'pink') : 'lightgray';
    const formattedDate = FormatDate(date, 'numeric', 'numeric', 'numeric', false, true, false);
    const [displayMonth, monthName]= ShouldTheMonthBeDisplayed(date);

    return (
        <>
            <div>
                <div
                    className="calendar-day"
                    style={{ cursor: habitDayId !== null ? 'pointer' : 'default', backgroundColor: backgroundColor }}
                    onClick={handleIconClick}
                >
                    <div className="calendar-day-content">
                        <p className="calendar-day-formatted-date">{formattedDate}</p>
                        {displayMonth && <p className="calendar-day-month-name">{monthName}</p>}
                    </div>
                </div>
                {/* <Button variant='danger' size="sm" onClick={devButton}>day</Button> */}
            </div>
        </>
    );
}

export default CalendarDay;