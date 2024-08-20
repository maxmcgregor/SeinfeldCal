import React from 'react';
import CalendarWeek from './CalendarWeek';
import Button from 'react-bootstrap/Button';

const CalendarBody = ({ calendarDataReal }) => {

    const {weeks} = calendarDataReal;
    

    const devButton = () => {
        console.log('calendarDataReal: ', calendarDataReal);
        console.log("weeks: ", weeks);
    }

    return (
        <>
            <p>CalendarBody.js</p>
            {weeks.map((weekData, index) => (
                <CalendarWeek
                    key={weekData.weekStartDate}
                    weekData={weekData}
                />
            ))}
            <br/><br/>
            <Button variant='danger' size="sm" onClick={devButton}>CalendarBody</Button>
        </>
    )
}

export default CalendarBody;