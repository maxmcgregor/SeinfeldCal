import React from 'react';
import CalendarWeek from './CalendarWeek';
import Button from 'react-bootstrap/Button';

const CalendarBody = ({ calendarDataReal }) => {

    const { weeks, habitStartDate } = calendarDataReal;
    const formattedHabitStartDate = new Date(habitStartDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });


    const devButton = () => {
        console.log("habitStartDate: ", habitStartDate);
        console.log("formattedHabitStartDate: ", formattedHabitStartDate);
    }

    return (
        <>
            <p>Started {formattedHabitStartDate}</p>
            {weeks.map((weekData, index) => (
                <CalendarWeek
                    key={weekData.weekStartDate}
                    weekData={weekData}
                />
            ))}
            <br /><br />
            <Button variant='danger' size="sm" onClick={devButton}>CalendarBody</Button>
        </>
    )
}

export default CalendarBody;