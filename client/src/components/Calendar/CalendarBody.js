import React from 'react';
import CalendarWeek from './CalendarWeek';
import Button from 'react-bootstrap/Button';

const CalendarBody = ({calendarData}) => {
    
    const { successHistory, calendarStartDate } = calendarData;
    
    return (
        <>            
            {Object.entries(successHistory).map(([weekStartDate, days]) => {
                const weekData = {
                    [weekStartDate]: days
                }
                return (
                    <CalendarWeek
                        key={weekStartDate}
                        weekData={weekData}
                    />
                )   
            })}
        </>
    )
}

export default CalendarBody;