import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import CalendarSwitcher from "./CalendarSwitcher";
import Button from "react-bootstrap/Button";

const UserCalendar = ({calendars, error}) => {
    const [currentCalendarIndex, setCurrentCalendarIndex] = useState(0);
    
    const handleNextCalendar = () => {
        setCurrentCalendarIndex((prevIndex) => (prevIndex + 1) % calendars.length);
    }
    
    const handlePrevCalendar = () => {
        setCurrentCalendarIndex((prevIndex) => (prevIndex - 1 + calendars.length) % calendars.length);
    }
    
    const currentCalendar = calendars[currentCalendarIndex];
    
    const devButton = () => {
        console.log("currentCalendar: ", currentCalendar);
        console.log("calendars: ", calendars);
    }
    
    return (
        <>
            <CalendarHeader calendarName={currentCalendar.habitName} />
            <CalendarBody
                key={currentCalendar.habitId}
                calendarData={currentCalendar}
            />
            <CalendarSwitcher
                onNext={handleNextCalendar}
                onPrev={handlePrevCalendar}
            />
            {error && <p>{error.message}</p>}
        </>
    )
}

export default UserCalendar;