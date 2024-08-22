import React from 'react';
import CalendarWeek from './CalendarWeek';
import { FormatDate } from '../../utils/CalendarHelpers';
import Button from 'react-bootstrap/Button';


const CalendarBody = ({ calendarDataReal }) => {

    const { weeks, habitStartDate } = calendarDataReal;
    const formattedHabitStartDate = FormatDate(habitStartDate, 'long', 'numeric', 'numeric', true, true, true);

    const devButton = () => {
        console.log("weeks: ", weeks);
        console.log("habitStartDate: ", habitStartDate);
        console.log("formattedHabitStartDate: ", formattedHabitStartDate);
    }

    return (
        <>
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