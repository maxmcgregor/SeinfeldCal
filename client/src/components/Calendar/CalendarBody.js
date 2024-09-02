import React from 'react';
import CalendarWeek from './CalendarWeek';
import { FormatDate } from '../../utils/CalendarHelpers';
import Button from 'react-bootstrap/Button';


const CalendarBody = ({ calendarData }) => {

    const { weeks, habitStartDate } = calendarData;
    const formattedHabitStartDate = FormatDate(habitStartDate, 'long', 'numeric', 'numeric', true, true, true);

    const devButton = () => {
        console.log("weeks: ", weeks);
        console.log("habitStartDate: ", habitStartDate);
        console.log("formattedHabitStartDate: ", formattedHabitStartDate);
    }

    return (
        <>
            {/* format this dynamically like you do the title. on a big enough screen it's kind of fucked up */}
            <p>Habit started {formattedHabitStartDate}</p> 
            {weeks.map((weekData, index) => (
                <CalendarWeek
                    key={weekData.weekStartDate}
                    weekData={weekData}
                    habitStartDate={habitStartDate}
                />
            ))}
            <br /><br />
            {/* <Button variant='danger' size="sm" onClick={devButton}>CalendarBody</Button> */}
        </>
    )
}

export default CalendarBody;