import React from 'react';
import CalendarDay from './CalendarDay';
import Button from 'react-bootstrap/Button';

const CalendarWeek = ({weekData}) => {
    
    const [weekStartDateIso, days] = Object.entries(weekData)[0];
    
    const weekStartDate = new Date(weekStartDateIso).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric'
    })
    
    return (
        <>
            {/* <p>This is calendar week starting on {weekStartDate}</p> */}
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {Object.entries(days).map(([date, completed]) => (
                    <CalendarDay
                        key={date}
                        dateIso={date}
                        completed={completed}
                    />
                ))}
            </div>
        </>
    )
}

export default CalendarWeek;