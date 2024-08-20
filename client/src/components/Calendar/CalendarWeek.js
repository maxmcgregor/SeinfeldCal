import React from 'react';
import CalendarDay from './CalendarDay';
import Button from 'react-bootstrap/Button';

const CalendarWeek = ({weekData}) => {
    
    const { weekStartDate, days } = weekData;
    
    const devButton = () => {
        console.log("weekData ", weekData);
        console.log("weekStartDate ", weekStartDate);
        console.log("days: ", days);
    }
    return (
        <>
            <p>This is calendar week starting on {weekStartDate}</p>
            {days.map((dayData, index) => (
                <CalendarDay
                    key={dayData.date}
                    dayData={dayData}
                />
            ))}
            <Button variant='danger' size="sm" onClick={devButton}>week</Button>
        </>
    )
}

export default CalendarWeek;