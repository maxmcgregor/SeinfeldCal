import React from 'react';
import CalendarDay from './CalendarDay';
import Button from 'react-bootstrap/Button';

const CalendarWeek = ({ weekData }) => {

    const { weekStartDate, days } = weekData;
    const formattedWeekStartDate = new Date(weekStartDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' })

    const devButton = () => {
        console.log("weekData ", weekData);
        console.log("weekStartDate ", weekStartDate);
        console.log("days: ", days);
    }
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                
                <div style={{display:'flex', flexWrap: 'wrap', flexGrow: 1}}>
                    {days.map((dayData, index) => (
                        <CalendarDay
                            key={dayData.date}
                            dayData={dayData}
                        />
                    ))}
                </div>
            </div>
            {/* <Button variant='danger' size="sm" onClick={devButton}>week</Button> */}
        </>
    )
}

export default CalendarWeek;