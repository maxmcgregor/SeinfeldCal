import React from 'react';
import CalendarDay from './CalendarDay';
import Button from 'react-bootstrap/Button';

const CalendarWeek = ({ weekData, habitStartDate }) => {

    const { weekStartDate, days } = weekData;

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
                            habitStartDate={habitStartDate}
                        />
                    ))}
                </div>
            </div>
            {/* <Button variant='danger' size="sm" onClick={devButton}>week</Button> */}
        </>
    )
}

export default CalendarWeek;