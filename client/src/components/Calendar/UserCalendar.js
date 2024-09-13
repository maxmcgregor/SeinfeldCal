import React, { useState } from "react";
import CalendarBody from "./CalendarBody";
import CalendarHeaderSwitcher from "./CalendarHeaderSwitcher";
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
        console.log("calendars: ", calendars.length);
    }
    
    return (
        <>
            <div className="calendar-header-container">
            {/* <Button onClick={devButton}>UserCalendar component</Button> */}
                <CalendarHeaderSwitcher
                    calendarName={currentCalendar.habitName}
                    onPrev={handlePrevCalendar}
                    onNext={handleNextCalendar}
                    numberOfCalendars={calendars.length}
                />
            </div>
            <div className="calendar-body-container">
            <CalendarBody
                key={currentCalendar.habitId}
                calendarData={currentCalendar}
                />
            </div>
            {error && <p>{error.message}</p>}
        </>
    )
}

export default UserCalendar;