import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import Button from 'react-bootstrap/Button';

const SampleCalendar = ({ calendarData }) => {
    
    
    const devButton = () => {
        console.log("calendarData: ", calendarData);
    }
    return (
        <>
            <CalendarHeader calendarName={"Habit "} />
            <CalendarBody
                key={calendarData.habitId}
                calendarData={calendarData}
            />
            {/* <Button variant="dark" onClick={devButton}>Sample Calendar</Button> */}
        </>
    )
}

export default SampleCalendar;